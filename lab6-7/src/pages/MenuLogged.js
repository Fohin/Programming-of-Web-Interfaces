import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Image1 from '../images/Margherita.jpeg';
import Image2 from '../images/Funghi.jpg';
import Image3 from '../images/Salame.jpg';
import Image4 from '../images/Prosciutto.jpg';
import Image5 from '../images/Hawai.jpg';
import Image6 from '../images/Formaggio.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '30px auto',
    maxWidth: 480,
  },

  menu: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    margin: 20,
    fontFamily: 'GreatVibes-Regular',
  },

  media: {
    height: 300,
  },
}));




export default function Menu() {
  const classes = useStyles();
 
  return (
    <div>
    <Typography variant="h2" className={classes.menu}>
        Our Menu
    </Typography>

    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}>

    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Image1}
          title="Margherita"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Margherita
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ingredients: tomato sauce, cheese, oregano
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to Order List
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Image2}
          title="Funghi"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Funghi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ingredients: tomato sauce, cheese, mushrooms
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Order List
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Image3}
          title="Salame"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Salame
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ingredients: tomato sauce, cheese, salami
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Add to Order List
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Image4}
          title="Prosciutto"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Prosciutto
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ingredients: tomato sauce, ham, corn
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to Order List
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Image5}
          title="Hawai"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hawai
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ingredients: tomato sauce, cheese, chicken, pineapple
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to Order List
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Image6}
          title="Formaggio"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Formaggio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ingredients: tomato sauce, cheese, smoked cheese, mozzarellla, feta cheese, gorgonzola
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to Order List
        </Button>
      </CardActions>
    </Card>

    </Grid>
    </div>
  );
  
}