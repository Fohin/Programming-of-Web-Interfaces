import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../config/Fire";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image1 from '../images/amicis-spread-spicy-peper-chicken-arugula-and-spinach-salad.jpg';
import Image2 from '../images/pizza-salami-1080x721.jpg';
import Image3 from '../images/photo-1513104890138-7c749659a591.jpg';
import Image4 from '../images/pexels-nataliya-vaitkevich-5792327.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 130,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '30px auto',
    maxWidth: 500,
  },

  container2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '30px auto',
    maxWidth: 500,
  },

  homepage__title: {
    marginTop: 30,
    margin: 20,
  },

  media: {
    height: 300,
  },

}));


export default function HomePage() {
  const classes = useStyles();
 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe =
    auth.onAuthStateChanged( (u) => {
      if (u) {
        setUser(u);
      } else {
        console.log("User not logged")
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(auth.currentUser)


  if (user)
  return (
    
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}>

    <Card className={classes.container2}>
      <CardActionArea to="/menu" component={Link}>
        <CardMedia
          className={classes.media}
          src={Image1}
          title="Login"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Menu
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Check out our Menu!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.container2}>
      <CardActionArea to="/orderList" component={Link}>
        <CardMedia
          className={classes.media}
          src={Image4}
          title="Order List"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Order List
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Add or remove pizzas in your order!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </Grid>
    
  )

  return (
    
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}>

    <Card className={classes.container}>
      <CardActionArea to="/menu" component={Link}>
        <CardMedia
          className={classes.media}
          src={Image1}
          title="Login"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Menu
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Check out our Menu!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.container}>
      <CardActionArea to="/login" component={Link}>
        <CardMedia
          className={classes.media}
          src={Image2}
          title="Login"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Login
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Make yourself comfortable and login in to your account!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.container}>
      <CardActionArea to="/register" component={Link}>
        <CardMedia
          className={classes.media}
          src={Image3}
          title="Login"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Register
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Create your own pizza account!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
  );

}