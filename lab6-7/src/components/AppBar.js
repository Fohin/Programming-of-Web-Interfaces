import React, { useEffect, useState } from 'react';
import { auth } from "../config/Fire";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
       flexGrow: 1,
    },

    title: {
       flexGrow: 1,
       color: '#000000',
       fontFamily: 'CheeseGraterRegular',
       textDecoration: 'none',
    },
    
    menuButton: {
       marginRight: theme.spacing(2),
    },

}));

export default function NavBar() {
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

  const logout = () => {
    auth.signOut()
  }

  console.log(auth.currentUser)

  if (user)
    return (
      <div>
        <AppBar position="static" color="primary">
        <Toolbar>
          <Typography 
            variant="h3" 
            className={classes.title} 
            to="/"
            component={Link}>
              Philippo Pizzeria Ristorante
          </Typography>

          <Button
              color="inherit"
              to="/orderList"
              component={Link}
          >
            Order List
          </Button>
          
          <Button
              color="inherit"
              to="/"
              component={Link}
              onClick={logout}
          >
            Logout
          </Button>

        </Toolbar>
        </AppBar>
      </div>
  )

  return (
    <div>
        <AppBar position="static" color="primary">
        <Toolbar>
          <Typography 
            variant="h3" 
            className={classes.title} 
            to="/"
            component={Link}>
              Philippo Pizzeria Ristorante
          </Typography>
        </Toolbar>
        </AppBar>
      </div>
  )
}