/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import ArrowDown from '@material-ui/icons/ArrowDownwardSharp';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Gallery from 'react-grid-gallery';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link/Link';
import { NavLink as RouterLink } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const styles = theme => ({
  picturesContainer: {
    maxWidth: 1200,
    margin: '30px auto',
  },
  arrowContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
  },
  headerTitle: {
    color: '#ffffff',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '45px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      fontWeight: 'bold',
    },
  },
  ReactGridGallery_tile: {
    marginLeft: 'calc(50% - 135px)',
  },
  headerContainer: {
    height: '550px',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundPositionX: 'center',
    backgroundImage:
      'url("https://i.ibb.co/xYg4k8k/0032-Traiteur-Pamier-Le-bocal-gourmand-38-WEB.jpg")',
    [theme.breakpoints.down('sm')]: {
      height: '350px',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttonNav: {
    backgroundImage: 'linear-gradient(to right , #deaa87, #050f2c) ',
    margin: '50px',
    borderRadius: '20px',
    maxWidth: '400px',
    color: '#ffffff',
    fontSize: '22px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    padding: '10px',
    '&:hover': {
      textDecoration: 'none',
      filter: 'grayscale(60%)',
    },
  },
  questionContainer: {
    height: '250px',
    backgroundImage: 'linear-gradient(to right , #1B1B3A, #050f2c) ',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
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
  containerBody: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

class GalleryPage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    const IMAGES = [
      {
        src: '../../img/gallerie.jpg',
        thumbnail: '../../img/gallerie.jpg',
        thumbnailWidth: 369,
        thumbnailHeight: 246,
      },
      {
        src: '../../img/gallerie2.jpg',
        thumbnail: '../../img/gallerie2.jpg',
        thumbnailWidth: 340,
        thumbnailHeight: 150,
      },
      {
        src: '../../img/gallerie3.jpg',
        thumbnail: '../../img/gallerie3.jpg',
        thumbnailWidth: 369,
        thumbnailHeight: 246,
      },
      {
        src: '../../img/gallerie4.jpg',
        thumbnail: '../../img/gallerie4.jpg',
        thumbnailWidth: 340,
        thumbnailHeight: 150,
      },
      {
        src: '../../img/gallerie5.jpg',
        thumbnail: '../../img/gallerie5.jpg',
        thumbnailWidth: 340,
        thumbnailHeight: 150,
      },
      {
        src: '../../img/gallerie6.jpg',
        thumbnail: '../../img/gallerie6.jpg',
        thumbnailWidth: 369,
        thumbnailHeight: 246,
      },
      {
        src: '../../img/gallerie7.jpg',
        thumbnail: '../../img/gallerie7.jpg',
        thumbnailWidth: 369,
        thumbnailHeight: 246,
      },
      {
        src: '../../img/gallerie8.jpg',
        thumbnail: '../../img/gallerie8.jpg',
        thumbnailWidth: 369,
        thumbnailHeight: 246,
      },
      {
        src: '../../img/gallerie9.jpg',
        thumbnail: '../../img/gallerie9.jpg',
        thumbnailWidth: 370,
        thumbnailHeight: 245,
      },
      {
        src: '../../img/gallerie10.jpg',
        thumbnail: '../../img/gallerie10.jpg',
        thumbnailWidth: 370,
        thumbnailHeight: 243,
      },

      {
        src: '../../img/gallerie11.jpg',
        thumbnail: '../../img/gallerie11.jpg',
        thumbnailWidth: 369,
        thumbnailHeight: 246,
      },
      {
        src: '../../img/gallerie12.jpg',
        thumbnail: '../../img/gallerie12.jpg',
        thumbnailWidth: 369,
        thumbnailHeight: 246,
      },
      {
        src: '../../img/gallerie13.jpg',
        thumbnail: '../../img/gallerie13.jpg',
        thumbnailWidth: 370,
        thumbnailHeight: 245,
      },
      {
        src: '../../img/gallerie14.jpg',
        thumbnail: '../../img/gallerie14.jpg',
        thumbnailWidth: 370,
        thumbnailHeight: 243,
      },

      {
        src: '../../img/gallerie15.jpg',
        thumbnail: '../../img/gallerie15.jpg',
        thumbnailWidth: 369,
        thumbnailHeight: 246,
      },
      {
        src: '../../img/gallerie16.jpg',
        thumbnail: '../../img/gallerie16.jpg',
        thumbnailWidth: 370,
        thumbnailHeight: 243,
      },

      {
        src: '../../img/gallerie17.jpg',
        thumbnail: '../../img/gallerie17.jpg',
        thumbnailWidth: 300,
        thumbnailHeight: 400,
      },
    ];

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
        </Helmet>
        <div className={classes.container}>
          <header className={classes.headerContainer}>
            <NavBar />
            <div className={classes.titleContainer}>
              <Typography
                component="h1"
                align="center"
                className={classes.headerTitle}
              >
                DECOUVREZ NOS BOCAUX .
              </Typography>
            </div>
            <div className={classes.arrowContainer}>
              <Fab style={{ marginTop: 40 }}>
                <ArrowDown
                  style={{
                    backgroundColor: '#d3a476',
                    color: '#ffffff',
                    borderRadius: 50,
                    width: 60,
                    height: 60,
                  }}
                  className={classes.arrow}
                />
              </Fab>
            </div>
          </header>
          <div className={classes.containerBody}>
            <Gallery images={IMAGES} />
            <div className={classes.questionContainer}>
              <Typography
                component="h3"
                align="center"
                style={{ color: '#ffffff' }}
                className={classes.sectionTitle}
              >
                Vous souhaitez avoir plus de renseignements ou passer commande ?
              </Typography>
              <Link
                className={classes.buttonNav}
                component={RouterLink}
                to="/contact"
              >
                Contactez-nous
              </Link>
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
      </div>
    );
  }
}

GalleryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryPage);
