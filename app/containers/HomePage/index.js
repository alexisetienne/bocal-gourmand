/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import ArrowDown from '@material-ui/icons/ArrowDownwardSharp';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import NavBar from "../../components/NavBar";

const styles = () => ({
  textP: {
    color: '#ffffff',
    fontSize: '17px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    padding: 20,
    border: '6px solid',
    borderRadius: '50px',
    borderColor: '#ff9955',
  },
    containersHowWeUs: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'no-wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  containerHowWeUs: {
      backgroundImage: 'linear-gradient(to right , #deaa87, #ff9955) ',
    },
  sectionTitle: {
    color: '#ffffff',
    fontSize: '22px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    paddingTop: '10px',
  },
  arrowContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  imgHowWeUs: {
    margin: 50,
    width: '30%',
    height: '30%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 250,
  },
  headerTitle: {
    color: '#050f2c',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '45px',
  },
  headerSubtitle: {
    color: '#050f2c',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '25px',
  },
  headerContainer: {
    height: '800px',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundPositionX: 'center',
    backgroundImage: 'url("https://i.ibb.co/WVbczg5/0012-traiteur-Patrick-Bastide-12-WEB.jpg")',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: 8,
    },
  },
});

class HomePage extends React.PureComponent {

  render() {

    const {classes} = this.props;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example"/>
        </Helmet>
        <div className={classes.container}>
          <header className={classes.headerContainer}>
            <NavBar/>
            <div className={classes.titleContainer}>
              <Typography component='h1' className={classes.headerTitle}>
                LE BOCAL GOURMAND
              </Typography>
              <Typography component='h2' className={classes.headerSubtitle}>
                Traiteur a Pamiers , pour particuliers et professionnels .
              </Typography>
            </div>
            <div className={classes.arrowContainer}>
              <Fab style={{marginTop: 40}}>
                <ArrowDown
                  style={{backgroundColor: '#ff9955', color: '#ffffff', borderRadius: 50, width: 60, height: 60}}
                  className={classes.arrow}/>
              </Fab>
            </div>
          </header>
          <div className={classes.containerHowWeUs}>
            <Typography component='h3' align='center' className={classes.sectionTitle}>
            QUI SOMMES-NOUS ?
            </Typography>
          <div className={classes.containersHowWeUs}>
            <img className={classes.imgHowWeUs} src="https://i.ibb.co/XzMX1T9/0028-Traiteur-Pamier-Le-bocal-gourmand-34-WEB.jpg" alt=""/>
            <Typography component='span' align='center' className={classes.textP}>
              Le Bocal Gourmand cuisine des plats maison au rythme des saisons . <br/>Chaque semaine des menus variés.
              Choisissez la formule <br/> qui vous fait envie,Le Bocal Gourmand vous livra sur Pamiers et ses environ.<br/>
              Pour les prestations de traiteur nous nous déplaçons plus loin.
            </Typography>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(HomePage);
