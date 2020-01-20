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
    margin: '10px',
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
  itemLegend: {
    fontSize: '14px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    color: '#ffffff',
    padding: '10px',
  },
});

class CardMenuItem extends React.PureComponent {
  render() {
    const { classes, img, title } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="menu de la semaine"
          height="240"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent style={{ backgroundColor: '#050f2c' }}>
          <Typography
            gutterBottom
            component="span"
            className={classes.itemLegend}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
CardMenuItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardMenuItem);
