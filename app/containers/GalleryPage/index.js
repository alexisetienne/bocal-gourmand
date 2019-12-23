/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import ArrowDown from '@material-ui/icons/ArrowDownwardSharp';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Gallery from 'react-grid-gallery';

import { FormattedMessage } from 'react-intl';
import NavBar from "../../components/NavBar";

const useStyles = makeStyles(theme => ({
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
  },
  headerTitle: {
    color: '#ffffff',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '45px',
  },
  headerContainer: {
    height: '550px',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundPositionX: 'center',
    backgroundImage: 'url("https://i.ibb.co/xYg4k8k/0032-Traiteur-Pamier-Le-bocal-gourmand-38-WEB.jpg")',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GalleryPage() {

  const classes = useStyles();

  const IMAGES =
    [{
      src: "https://i.ibb.co/Dwv1t2V/0016-Traiteur-Pamier-Le-bocal-gourmand-22-WEB.jpg",
      thumbnail: "https://i.ibb.co/Dwv1t2V/0016-Traiteur-Pamier-Le-bocal-gourmand-22-WEB.jpg",
      thumbnailWidth: "10%",
      thumbnailHeight: "10%",
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
      {
        src: "https://i.ibb.co/CVHvFwd/0014-Traiteur-Pamier-Le-bocal-gourmand-20-WEB-1.jpg",
        thumbnail: "https://i.ibb.co/CVHvFwd/0014-Traiteur-Pamier-Le-bocal-gourmand-20-WEB-1.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "Boats (Jeshu John - designerspics.com)"
      },
      {
        src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/79890532_201530571009146_2331126399353487360_o.jpg?_nc_cat=102&_nc_ohc=2mHGhvzBZqIAQl-9iWg1_5vsoS-GOvdvxrjCVlHvIWlOUvwbIW9rPrOXw&_nc_ht=scontent-cdt1-1.xx&oh=b599740e300f23e446be4d21667f2cd1&oe=5E76D1F7",
        thumbnail: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/79890532_201530571009146_2331126399353487360_o.jpg?_nc_cat=102&_nc_ohc=2mHGhvzBZqIAQl-9iWg1_5vsoS-GOvdvxrjCVlHvIWlOUvwbIW9rPrOXw&_nc_ht=scontent-cdt1-1.xx&oh=b599740e300f23e446be4d21667f2cd1&oe=5E76D1F7",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://i.ibb.co/PYjTKmY/0027-traiteur-Patrick-Bastide-27-WEB.jpg",
        thumbnail: "https://i.ibb.co/PYjTKmY/0027-traiteur-Patrick-Bastide-27-WEB.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "Boats (Jeshu John - designerspics.com)"
      },
      {
        src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/79150194_201530497675820_799648216738955264_o.jpg?_nc_cat=100&_nc_ohc=O1YEmI_SXlUAQmGw6jzBeI9QxLevuJfG5f9DnXnmr-ef6boJahF2oeNQA&_nc_ht=scontent-cdt1-1.xx&oh=07adbfc86b83f27c0559d20149f2f1ad&oe=5E72A618",
        thumbnail: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/79150194_201530497675820_799648216738955264_o.jpg?_nc_cat=100&_nc_ohc=O1YEmI_SXlUAQmGw6jzBeI9QxLevuJfG5f9DnXnmr-ef6boJahF2oeNQA&_nc_ht=scontent-cdt1-1.xx&oh=07adbfc86b83f27c0559d20149f2f1ad&oe=5E72A618",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "Boats (Jeshu John - designerspics.com)"
      },
      {
        src: "https://i.ibb.co/ph8Vp6Y/0025-traiteur-Patrick-Bastide-25-WEB.jpg",
        thumbnail: "https://i.ibb.co/ph8Vp6Y/0025-traiteur-Patrick-Bastide-25-WEB.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://i.ibb.co/nBcChBP/0003-traiteur-Patrick-Bastide-3-WEB.jpg",
        thumbnail: "https://i.ibb.co/nBcChBP/0003-traiteur-Patrick-Bastide-3-WEB.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "Boats (Jeshu John - designerspics.com)"
      },
      {
        src: "https://i.ibb.co/ccwhmq6/0004-traiteur-Patrick-Bastide-4-WEB.jpg",
        thumbnail: "https://i.ibb.co/ccwhmq6/0004-traiteur-Patrick-Bastide-4-WEB.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "Boats (Jeshu John - designerspics.com)"
      },
      {
        src: "https://i.ibb.co/sCLTsMC/0015-Traiteur-Pamier-Le-bocal-gourmand-21-WEB.jpg",
        thumbnail: "https://i.ibb.co/sCLTsMC/0015-Traiteur-Pamier-Le-bocal-gourmand-21-WEB.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://i.ibb.co/jhhRQSN/0008-Traiteur-Pamier-Le-bocal-gourmand-14-WEB.jpg",
        thumbnail: "https://i.ibb.co/jhhRQSN/0008-Traiteur-Pamier-Le-bocal-gourmand-14-WEB.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "Boats (Jeshu John - designerspics.com)"
      },
      {
        src: "https://i.ibb.co/j3khyqn/0002-traiteur-Patrick-Bastide-2-WEB.jpg",
        thumbnail: "https://i.ibb.co/j3khyqn/0002-traiteur-Patrick-Bastide-2-WEB.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "Boats (Jeshu John - designerspics.com)"
      },
      {
        src: "https://i.ibb.co/dBtX2FW/0025-Traiteur-Pamier-Le-bocal-gourmand-31-WEB.jpg",
        thumbnail: "https://i.ibb.co/dBtX2FW/0025-Traiteur-Pamier-Le-bocal-gourmand-31-WEB.jpg",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%",
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/79885062_201530677675802_4521778982688915456_o.jpg?_nc_cat=108&_nc_ohc=fWCfePnlgG4AQleP58cHMeWo2M4TvARcVGcJkxQO2xNpzP1Y_aBUhBe6w&_nc_ht=scontent-cdt1-1.xx&oh=e602c04a8bc96ea02cfff4a64ba51b96&oe=5E76E0DD",
        thumbnail: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/79885062_201530677675802_4521778982688915456_o.jpg?_nc_cat=108&_nc_ohc=fWCfePnlgG4AQleP58cHMeWo2M4TvARcVGcJkxQO2xNpzP1Y_aBUhBe6w&_nc_ht=scontent-cdt1-1.xx&oh=e602c04a8bc96ea02cfff4a64ba51b96&oe=5E76E0DD",
        thumbnailWidth: "10%",
        thumbnailHeight: "10%"
      }]

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={classes.container}>
        <header className={classes.headerContainer}>
          <NavBar/>
          <div className={classes.titleContainer}>
            <Typography component='h1' className={classes.headerTitle} >
              DECOUVREZ NOS BOCAUX .
            </Typography>
          </div>
          <div className={classes.arrowContainer}>
            <Fab style={{ marginTop: 40}} >
              <ArrowDown style={{backgroundColor: '#ff9955',color: '#ffffff',borderRadius: 50, width: 60, height: 60 }}className={classes.arrow}/>
            </Fab>
          </div>
        </header>
        <div style={{backgroundColor: '#000000'}}>
        <div className={classes.picturesContainer}>
        <Gallery  images={IMAGES}/>
        </div>
        </div>
      </div>
    </div>
  );
}
