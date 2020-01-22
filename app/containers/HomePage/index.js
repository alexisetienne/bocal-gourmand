/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ArrowDown from '@material-ui/icons/ArrowDownwardSharp';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link/Link';
import { NavLink as RouterLink } from 'react-router-dom';
import services from '../../components/CardServices/service.json';
import NavBar from '../../components/NavBar';
import CardServices from '../../components/CardServices';

const styles = theme => ({
  textP: {
    color: '#ffffff',
    fontSize: '17px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    padding: 20,
  },
  containersHowWeUs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '900px',
    margin: '0px auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  containerHowWeUs: {
    backgroundImage: 'linear-gradient(to right , #bdc3c7, #2c3e50) ',
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: '22px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    paddingTop: '10px',
  },
  arrowContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  imgHowWeUs: {
    margin: 50,
    width: '50%',
    borderRadius: '50px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '30px',
    maxWidth: '400px',
    padding: '20px',
    opacity: 0.8,
    backgroundColor: '#d3a476',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  headerTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',

      marginTop: 50,
    },
  },
  headerTitle: {
    color: '#ffffff',
    animation: 'text-shadow 1.5s ease-in-out infinite',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontSize: '40px',
    padding: '10px',
    margin: '10px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
    },
  },
  headerSubtitle: {
    color: '#ffffff',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    fontSize: '25px',
    padding: '5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: 30,
    },
  },
  headerContainer: {
    height: '800px',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundPositionX: 'center',
    backgroundImage: 'url("../../img/backHeader.png")',
    backgroundBlendMode: 'overlay',
    [theme.breakpoints.down('sm')]: {
      height: '600px',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: 8,
    },
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to right , #FFFFFF, #d3a476) ',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  cardCenter: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      display: 'flex',
    },
  },
  containerMenu: {
    height: '580px',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundPositionX: 'center',
    backgroundImage:
      'url("https://i.ibb.co/ZTnV9Td/markus-spiske-ZKNs-Vqb-RSPE-unsplash.jpg")',
    [theme.breakpoints.down('sm')]: {
      height: '1080px',
    },
  },
  menuImg: {
    width: '300px',
    margin: '50px ',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  buttonNav: {
    backgroundImage: 'linear-gradient(to right , #deaa87, #050f2c) ',
    margin: '50px',
    borderRadius: '20px',
    maxWidth: '400px',
    color: '#ffffff',
    fontSize: '22px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    padding: '10px',
    '&:hover': {
      textDecoration: 'none',
      filter: 'grayscale(60%)',
    },
  },
  buttonNavHeader: {
    backgroundColor: ' #050f2c',
    margin: '50px',
    borderRadius: '20px',
    maxWidth: '400px',
    color: '#ffffff',
    fontSize: '22px',
    fontFamily: 'Cairo, sans-serif',
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
  fabArrow: {
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
  },
  buttonBox: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
    },
  },
});

class HomePage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Helmet>
          <title>Le bocal gourmand , traiteur à Pamiers</title>
          <link
            href="https://fonts.googleapis.com/css?family=Cairo&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Le bocal gourmand :  traiteur pour particuliers et des professionnels à Pamiers  ."
          />
        </Helmet>
        <div className={classes.container}>
          <header className={classes.headerContainer}>
            <NavBar />
            <div className={classes.headerTitleContainer}>
              <div className={classes.titleContainer}>
                <Typography
                  align="center"
                  component="h1"
                  className={classes.headerTitle}
                >
                  LE BOCAL GOURMAND
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  className={classes.headerSubtitle}
                >
                  Traiteur sur Pamiers pour particuliers et professionnels.
                </Typography>
              </div>
              <div className={classes.buttonBox}>
                <Link
                  className={classes.buttonNavHeader}
                  component={RouterLink}
                  to="/contact"
                >
                  Commandez
                </Link>
              </div>
            </div>
            <div className={classes.arrowContainer}>
              <Fab className={classes.fabArrow}>
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
          <div className={classes.containerHowWeUs}>
            <Typography
              component="h3"
              align="center"
              className={classes.sectionTitle}
            >
              Qui sommes-nous ?
            </Typography>
            <div className={classes.containersHowWeUs}>
              <img
                className={classes.imgHowWeUs}
                src="https://i.ibb.co/XzMX1T9/0028-Traiteur-Pamier-Le-bocal-gourmand-34-WEB.jpg"
                alt=""
              />
              <Typography
                component="span"
                align="center"
                className={classes.textP}
              >
                Le Bocal Gourmand cuisine des plats maison au rythme des saisons
                . <br />
                Par souci écologique, nos repas sont servis dans des bocaux en
                verre consignés à la 1ère commande. <br /> Chaque semaine, nous
                vous proposons des menus variés. Choisissez la formule qui vous
                fait envie et Le Bocal Gourmand vous livrera sur Pamiers et ses
                environs.
                <br />
                Pour les prestations de traiteur nous nous déplaçons plus loin.
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.containerOurService}>
          <Typography
            component="h3"
            align="center"
            style={{ color: '#d3a476' }}
            className={classes.sectionTitle}
          >
            NOS SERVICES
          </Typography>
          <div className={classes.gridContainer}>
            {services.map(service => (
              <div className={classes.cardCenter} key={service.id}>
                <CardServices
                  title={service.title}
                  img={service.img}
                  text={service.text}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.containerMenu}>
          <Typography
            component="h3"
            align="center"
            style={{ color: '#ffffff' }}
            className={classes.sectionTitle}
          >
            LE MENU DE LA SEMAINE
          </Typography>
          <div className={classes.imgContainer}>
            <img
              className={classes.menuImg}
              src="https://i.ibb.co/tsj1dHc/menu-Tarif-Convert-Image.png"
              alt=""
            />
            <img
              className={classes.menuImg}
              src="https://i.ibb.co/kq8Y3jp/menu.jpg"
              alt=""
            />
          </div>
        </div>
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
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            © Copyright 2020 Le bocal gourmand, traiteur multi-assembleur à
            Pamiers | © Copyright 2020 Presles Corp.
          </Typography>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
