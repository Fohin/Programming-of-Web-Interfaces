import React, { useState } from 'react';
import { auth } from "../config/Fire";
import { Redirect } from "react-router-dom";
import background from '../images/pexels-edward-eyer.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Grid, Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backgroundd: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
    height: 400,
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

export default function Register() {
  const classes = useStyles();
  
  const [typedName, setTypedName] = useState('');
  const [typedEmail, setTypedEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');
  const [typedConfirmedPassword, setTypedConfirmedPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  const register = () => {
    if (typedPassword === typedConfirmedPassword) {
  
    auth
      .createUserWithEmailAndPassword(typedEmail, typedPassword)
      .then(() => {
        auth
          .signInWithEmailAndPassword(typedEmail, typedPassword)
          .then((loggedUser) => {
            loggedUser.user.updateProfile({
              displayName: typedName
            });
          })
          .catch((error) => {
            console.log(error);
          });
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
      });
    } else
      alert("Passwords don't match");  
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
          Register
        </Typography>

        <Grid className={classes.textFields}>
          <TextField
            variant="filled"
            label="Your Nickname"
            placeholder="Enter your nickname"
            fullWidth
            className={classes.textField}
            value={typedName}
            onChange={({ target: { value } }) => {
              setTypedName(value);
            }}
          />

          <TextField
            variant="filled"
            label="Your Email"
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
            label="Your Password"
            type="password"
            placeholder="Enter your password"
            fullWidth
            className={classes.textField}
            value={typedPassword}
            onChange={({ target: { value } }) => {
              setTypedPassword(value);
            }}
          />

          <TextField
            variant="filled"
            label="Confirm Password"
            type="password"
            placeholder="Enter your password again"
            fullWidth
            className={classes.textField}
            value={typedConfirmedPassword}
            onChange={({ target: { value } }) => {
              setTypedConfirmedPassword(value);
            }}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.addButton}
            onClick={register}
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