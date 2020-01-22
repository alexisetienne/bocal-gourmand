import React from 'react';
import { withStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link/Link';
import { NavLink as RouterLink } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import CardMenuItem from '../../components/cardMenuItem';

const styles = theme => ({
  headerContainer: {
    height: '500px',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundPositionX: 'center',
    overflowX: 'none',
    overflowY: 'none',
    backgroundImage: ' url("../../img/back_menu.jpg")',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
  },
  headerTitle: {
    color: '#ffffff',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '45px',
    borderBottom: 'thick double #ffffff',
    margin: '200px 100px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      fontWeight: 'bold',
      margin: '50px 20px',
    },
  },
  menuImg: {
    width: '300px',
    margin: '20px ',
    borderRadius: 20,
  },
  imgStarter: {
    width: '200px',
    margin: '10px',
    borderRadius: 50,
  },
  imgContainerRight: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  imgContainer: {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  sectionTitle: {
    color: '#d3a476',
    fontSize: '26px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      margin: '10px 10px',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
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
  buttonNav: {
    backgroundColor: '#d3a476',
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
  starter: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  boxMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 80,
  },
  imgTitle: {
    height: 350,
    borderRadius: '50px',
    boxShadow: '15px 15px 10px silver',
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
      borderRadius: '0px',
      width: '100%',
    },
  },
  lastSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  imgLast: {
    width: 600,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  titleLast: {
    display: 'flex',
    justifyContent: 'center',
    margin: 30,
  },
  imgDisplay: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
});

class MenuPage extends React.PureComponent {
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
          <link rel="canonical" href="http://le-bocal-gourmand.fr/menu" />
        </Helmet>
        <div className={classes.container}>
          <header className={classes.headerContainer}>
            <NavBar />
            <div className={classes.titleContainer}>
              <Typography component="h1" className={classes.headerTitle}>
                Le menu de la semaine
              </Typography>
            </div>
          </header>
          <div className={classes.containerMenu}>
            <div className={classes.containerBox}>
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
              <div className={classes.textContainer}>
                <div className={classes.starter}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: 50,
                    }}
                    className={classes.boxMenu}
                  >
                    <Typography
                      component="span"
                      align="center"
                      className={classes.sectionTitle}
                    >
                      Les 3 entrées de la semaine
                    </Typography>
                    <ArrowDownwardIcon
                      style={{
                        height: '40px',
                        width: 40,
                        color: '#ffffff',
                        backgroundColor: '#050f2c',
                        borderRadius: '50px',
                      }}
                    />
                  </div>
                  <div className={classes.imgDisplay}>
                    <img
                      className={classes.imgTitle}
                      src="../../img/entrees-traiteur.jpg"
                      alt="entrées de la semaine - plateaux repas"
                    />
                  </div>
                </div>
                <div className={classes.imgContainerRight}>
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                </div>
                <div className={classes.starter}>
                  <div className={classes.imgDisplay}>
                    <img
                      className={classes.imgTitle}
                      src="../../img/plats-traiteur.jpg"
                      alt="entrées de la semaine - plateaux repas"
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: 100,
                    }}
                    className={classes.boxMenu}
                  >
                    <Typography
                      component="span"
                      align="center"
                      className={classes.sectionTitle}
                    >
                      Les 3 plats de la semaine
                    </Typography>
                    <ArrowDownwardIcon
                      style={{
                        height: '40px',
                        width: 40,
                        color: '#ffffff',
                        backgroundColor: '#050f2c',
                        borderRadius: '50px',
                      }}
                    />
                  </div>
                </div>
                <div className={classes.imgContainerRight}>
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                </div>
                <div className={classes.starter}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: 50,
                    }}
                    className={classes.boxMenu}
                  >
                    <Typography
                      component="span"
                      align="center"
                      className={classes.sectionTitle}
                    >
                      Les 3 desserts de la semaine
                    </Typography>
                    <ArrowDownwardIcon
                      style={{
                        height: '40px',
                        width: 40,
                        color: '#ffffff',
                        backgroundColor: '#050f2c',
                        borderRadius: '50px',
                      }}
                    />
                  </div>
                  <div className={classes.imgDisplay}>
                    <img
                      className={classes.imgTitle}
                      src="../../img/desserts-traiteur.jpg"
                      alt="entrées de la semaine - plateaux repas"
                    />
                  </div>
                </div>
                <div className={classes.imgContainerRight}>
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                  <CardMenuItem
                    img="../../img/gallerie3.jpg"
                    title="entrées a definir"
                  />
                </div>
              </div>
              <div className={classes.titleLast}>
                <Typography
                  component="span"
                  align="center"
                  className={classes.sectionTitle}
                >
                  La salade de la semaine
                </Typography>
              </div>
              <div className={classes.lastSection}>
                <div className={classes.boxRight}>
                  <img
                    className={classes.imgLast}
                    src="../../img/salade.jpg"
                    alt="salade en bocal"
                  />
                </div>
                <div className={classes.boxLeft}>
                  <Typography
                    component="span"
                    align="center"
                    style={{ margin: 20 }}
                  >
                    salade nicoise au choux fleurs
                  </Typography>
                </div>
              </div>
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
              COMMANDEZ
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
      </div>
    );
  }
}

MenuPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuPage);
