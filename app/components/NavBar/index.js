import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const styles = () => ({

  buttonGroup: {
  },
  buttonNav: {
    fontSize: '17px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    padding: '15px',
    color: '#ff9955',
    '&:hover': {
      textDecoration: 'none',
      padding: '5px',
      borderBottom: '3px solid #c87137',
      fontSize: '22px',
    },
  },
  root: {
    display: 'flex',
    backgroundColor: '#050f2c',
    opacity: '0.8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});


class NavBar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <img style={{width: 80}} src="https://i.redd.it/gl6mjdp9vml11.jpg" alt=""/>
        </div>
        <ButtonGroup className={classes.buttonGroup} aria-label="text primary button group">
          <Link className={classes.buttonNav} component={RouterLink} to="/">ACCUEIL</Link>
          <Link className={classes.buttonNav}>NOS MENUS</Link>
          <Link className={classes.buttonNav} component={RouterLink} to="/gallery">LA GALLERIE</Link>
          <Link className={classes.buttonNav} component={RouterLink} to="/contact">CONTACT ET DEVIS</Link>
        </ButtonGroup>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NavBar);
