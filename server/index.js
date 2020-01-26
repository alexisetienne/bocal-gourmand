/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const path = require('path');
const logger = require('./logger');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});

// public directory setup
app.use('/public', express.static(path.join(__dirname, 'public')));

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// index route
app.get('/', (req, res) => {
  res.redirect('/contact');
});

// render contact form
app.get('/contact', (req, res) => {
  res.render('contact');
});

// post route
app.post('/contact', (req, res) => {
  const output = `
        <p>Bonjour,<p>
        <p>Vous avez une nouvelle demande de contact.</p>
        <h3>Details du contact</h3>
        <ul>  
            <li>Nom: ${req.body.fullName}</li>
            <li>numero de telephone: ${req.body.phone}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.textArea}</p>
    `;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: 'true',
    auth: {
      user: 'alexisetienne86@gmail.com', // could use generated ethereal user
      pass: 'etienne0290', // could use generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: 'alexisetienne86@gmail.com', // sender address
    to: 'alexisetienne2010@live.fr', // list of receivers
    subject: 'Message client site web', // Subject line
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.redirect('/contact');
  });
});

//  starts a UNIX socket and listens for connections on the given path
app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server has started...');
});
