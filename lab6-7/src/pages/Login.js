import { auth } from "../config/Fire";
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import background from '../images/pexels-sydney-troxell.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Grid, Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backgroundd: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: 30,
  },

  root: {
    display: 'flex',
    flexDirextion: 'row',
    alignItems: 'center',
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 120,
  },

  paper: {
    padding: 30,
    height: 250,
    width: 300,
    margin: 20,
  },

  titleField: {
    marginLeft: 20,
    fontStyle: 'bold',
  },

  textFields: {
    marginTop: 20,
  },

  textField: {
    margin: '15px auto',
    height: 40,
  },

  addButton: {
    alignSelf: 'flex-end',
    marginTop: 30,
    height: 40,
  },
}));

export default function Login() {
  const classes = useStyles();
  
  const [typedEmail, setTypedEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const login = () => {
    auth
      .signInWithEmailAndPassword(typedEmail, typedPassword)
      .then(() => {
        console.log("Zalogowano");
        setRedirect(true);
      })
      .catch(error => {
        console.log(error);
      });

  };

  if (redirect) return <Redirect to="/" />;

  return (
    <div className={classes.backgroundd}>
    <Box className={classes.container}>
    <Paper elevation={3} className={classes.paper}>

      <Grid  
       container 
       direction="row"
      justify="space-around"
      alignItems="center">

        <Typography variant="h4" className={classes.titleField}>
          Login
        </Typography>

        <Grid className={classes.textFields}>
          <TextField
            variant="filled"
            label="Email"
            type="email"
            placeholder="Enter your email"
            fullWidth
            className={classes.textField}
            value={typedEmail}
            onChange={({ target: { value } }) => {
              setTypedEmail(value);
            }}
          />

          <TextField
            variant="filled"
            label="Password"
            type="password"
            placeholder="Enter your Password"
            fullWidth
            className={classes.textField}
            value={typedPassword}
            onChange={({ target: { value } }) => {
              setTypedPassword(value);
            }}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.addButton}
            onClick={login}
          >
            Submit
          </Button>
        </Grid>  
      </Grid>
    </Paper>
    </Box>
    </div>
  );
}