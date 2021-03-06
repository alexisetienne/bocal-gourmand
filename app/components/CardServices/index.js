import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link/Link';
import { NavLink as RouterLink } from 'react-router-dom';

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: '80px',
    minHeight: 407,
    [theme.breakpoints.down('sm')]: {
      margin: '20px',
    },
  },
  buttonNav: {
    backgroundImage: 'linear-gradient(to right , #deaa87, #d3a476) ',
    borderRadius: '20px',
    color: '#ffffff',
    fontSize: '17px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    padding: '10px',
    '&:hover': {
      textDecoration: 'none',
      filter: 'grayscale(60%)',
    },
  },
  cardFont: {
    fontSize: '22px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
  },
  cardFontText: {
    fontSize: '14px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
  },
});

class CardServices extends React.PureComponent {
  render() {
    const { classes, img, title, text } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent style={{ minHeight: 220 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardFont}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.cardFontText}
          >
            {text}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Link
            className={classes.buttonNav}
            component={RouterLink}
            to="/contact"
          >
            CONTACT
          </Link>
        </CardActions>
      </Card>
    );
  }
}
CardServices.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardServices);
