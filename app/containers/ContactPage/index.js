/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link/Link';
import NavBar from '../../components/NavBar';
import FormContact from '../../components/FormContact';

const styles = theme => ({
  footer: {
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerInfo: {},
  iconFacebook: {
    width: 80,
    height: 80,
    color: '#d3a476',
  },
  paperStyle: {
    margin: 50,
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: '50px',
    [theme.breakpoints.down('sm')]: {
      margin: '10px',
    },
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: 'linear-gradient(#deaa87, #050f2c)',
    display: 'flex',
    flexDirection: 'column',
  },
  titleStyle: {
    marginTop: 20,
    fontSize: 32,
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 10px ',
      fontSize: 24,
    },
  },
  subtitleStyle: {
    fontSize: 21,
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 10px ',
      fontSize: 18,
    },
  },
});

class ContactPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Cairo&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <title>Le bocal gourmand , traiteur à Pamiers</title>
          <link rel="canonical" href="http://le-bocal-gourmand.fr/contact" />
        </Helmet>
        <div className={classes.container}>
          <header className={classes.headerContainer}>
            <NavBar />
          </header>
          <div className={classes.root}>
            <Grid item xs={10}>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  component="span"
                  align="center"
                  style={{ color: '#ffffff' }}
                  className={classes.titleStyle}
                >
                  Contactez-nous
                </Typography>
                <Typography
                  component="span"
                  align="center"
                  style={{ color: '#ffffff' }}
                  className={classes.subtitleStyle}
                >
                  Nous nous ferons un plaisir de vous répondre dans les plus
                  bref délais .
                </Typography>
                <div className={classes.boxInfo}>
                  <PhoneIcon
                    style={{ width: 40, height: 40, color: '#d3a476' }}
                  />
                  <Typography
                    component="span"
                    align="center"
                    style={{ color: '#ffffff' }}
                    className={classes.subtitleStyle}
                  >
                    06 23 46 62 72 || 06 14 41 42 16
                  </Typography>
                </div>
                <div className={classes.boxInfo}>
                  <EmailIcon
                    style={{ width: 40, height: 40, color: '#d3a476' }}
                  />
                  <Typography
                    component="span"
                    align="center"
                    style={{ color: '#ffffff' }}
                    className={classes.subtitleStyle}
                  >
                    lebocalgourmand09@gmail.com
                  </Typography>
                </div>
                <FormContact />
              </Paper>
            </Grid>
          </div>
          <div className={classes.footer}>
            <Link
              target="_blank"
              href="https://www.facebook.com/lebocalgourmandtraiteur/"
            >
              <FacebookIcon className={classes.iconFacebook} />
            </Link>
            <div className={classes.footerInfo}>
              <PhoneIcon style={{ color: '#d3a476', margin: '5px' }} />
              <Typography
                component="span"
                align="center"
                style={{ color: '#ffffff' }}
                className={classes.footerStyle}
              >
                06 23 46 62 72 || 06 14 41 42 16
              </Typography>
            </div>
            <div className={classes.footerInfo}>
              <EmailIcon style={{ color: '#d3a476', margin: '5px' }} />
              <Typography
                component="span"
                align="center"
                style={{ color: '#ffffff' }}
                className={classes.footerStyle}
              >
                lebocalgourmand09@gmail.com
              </Typography>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#d3a476',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              component="span"
              align="center"
              style={{
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 'bold',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              © Copyright 2020 Le bocal gourmand, traiteur multi-assembleur à
              Pamiers | © Copyright 2020 Presles Corp.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactPage);
