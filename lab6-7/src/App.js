import React, { useState } from "react";
import AppBar from './components/AppBar';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import MenuOrder from './pages/MenuLogged';
import PageNotFound from './images/PageNotFound.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

}));

function App() {

  const classes = useStyles();

  return (

    <Router basename="/Pizzeria">
      
      <AppBar/>

      <Switch>
        
        <Route
         exact path="/" component={HomePage}
        />

        <Route
         exact path="/menu" component={Menu}
        />

        <Route
         exact path="/menuOrder" component={MenuOrder}
        />
        
        <Route
         exact path="/login" component={Login}
        />

        <Route
         exact path="/register" component={Register}
        />

        <Route>
          <div 
           style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
           class={classes.image}
          >
            <img src={PageNotFound} alt="PageNotFound" />
          </div>  
        </Route>

      </Switch>

    </Router>

  );
};

export default App;
