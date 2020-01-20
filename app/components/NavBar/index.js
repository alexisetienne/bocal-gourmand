import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import PictureInPictureIcon from '@material-ui/icons/PictureInPicture';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { NavLink as RouterLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = theme => ({
  buttonGroup: {},
  buttonNav: {
    fontSize: '14px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    padding: '15px',
    color: '#d3a476',
    '&:hover': {
      textDecoration: 'none',
      padding: '5px',
      borderBottom: '3px solid #c87137',
      fontSize: '17px',
      [theme.breakpoints.down('md')]: {
        fontSize: 15,
      },
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  },
  root: {
    display: 'flex',
    backgroundColor: '#050f2c',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBar: {
    width: 'auto',
    marginTop: -1,
    marginLeft: -1,
    marginRight: -1,
  },
  container: {
    overflowX: 'hidden',
    backgroundColor: '#050f2c',
  },
  sideBarIcon: {
    padding: 0,
    color: '#d3a476',
    cursor: 'pointer',
  },
  navHeader: {
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'no-wrap',
    flexGrow: 1,
  },
  rootNav: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemsMobile: {
    fontFamily: 'Cairo, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#d3a476',
  },
  fabNav: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      width: 0,
      drawer: false,
    };

    window.addEventListener('resize', this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  renderDrawer = () => {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <AppBar
          style={{ background: 'transparent', boxShadow: 'none' }}
          className={classes.appBar}
          position="static"
        >
          <Toolbar className={classes.navHeader}>
            <MenuIcon
              className={classes.sideBarIcon}
              onClick={() => {
                this.setState({ drawer: true });
              }}
            />
            <Link component={RouterLink} to="/">
              <img
                style={{ height: 70 }}
                src="../../img/logoNavbar.png"
                alt=""
              />
            </Link>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.drawer}
          onClose={() => {
            this.setState({ drawer: false });
          }}
        >
          <List component="div" disablePadding>
            <ListItem
              className={classes.buttonItem}
              button
              component={RouterLink}
              to="/menu"
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: 15,
              }}
            >
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <Typography
                align="center"
                component="span"
                className={classes.itemsMobile}
              >
                MENUS{' '}
              </Typography>
            </ListItem>
            <ListItem
              className={classes.buttonItem}
              button
              component={RouterLink}
              to="/gallery"
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: 15,
              }}
            >
              <ListItemIcon>
                <PictureInPictureIcon />
              </ListItemIcon>
              <Typography
                align="center"
                component="span"
                className={classes.itemsMobile}
              >
                GALERIE
              </Typography>
            </ListItem>
            <ListItem
              className={classes.buttonItem}
              button
              component={RouterLink}
              to="/contact"
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: 15,
              }}
            >
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <Typography
                align="center"
                component="span"
                className={classes.itemsMobile}
              >
                CONTACT
              </Typography>
            </ListItem>
            <ListItem
              className={classes.buttonItem}
              button
              component={RouterLink}
              to="/"
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: 15,
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Typography
                align="center"
                component="span"
                className={classes.itemsMobile}
              >
                ACCUEIL
              </Typography>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  };

  renderFullwidth = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <Link component={RouterLink} to="/">
            <img
              style={{ height: 100 }}
              src="../../img/logoNavbar.png"
              alt=""
            />
          </Link>
        </div>
        <ButtonGroup
          className={classes.buttonGroup}
          aria-label="text primary button group"
        >
          <Link className={classes.buttonNav} component={RouterLink} to="/">
            ACCUEIL
          </Link>
          <Link className={classes.buttonNav} component={RouterLink} to="/menu">
            NOS MENUS
          </Link>
          <Link
            className={classes.buttonNav}
            component={RouterLink}
            to="/gallery"
          >
            LA GALERIE
          </Link>
          <Link
            className={classes.buttonNav}
            component={RouterLink}
            to="/contact"
          >
            CONTACT ET DEVIS
          </Link>
        </ButtonGroup>
      </div>
    );
  };

  render() {
    const { width } = this.state;
    const isMobile = width < 600;

    return <div>{isMobile ? this.renderDrawer() : this.renderFullwidth()}</div>;
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
