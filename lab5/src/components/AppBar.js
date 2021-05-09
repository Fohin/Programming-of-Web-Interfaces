import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
       flexGrow: 1,
    },

    title: {
       flexGrow: 1,
       color: '#000099',
       textDecoration: 'none',
    },
    
    menuButton: {
       marginRight: theme.spacing(2),
    },

}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="secondary">
       <Toolbar>
         <Button color="inherit" component={Link} to="/searchProfiles">Search Profiles</Button>
         <Button color="inherit" component={Link} to="/newProfile">Add Profile</Button>

         <Typography 
          align="center" 
          variant="h4" 
          className={classes.title} 
          to="/"
          component={Link}>
            Tinder for students projects
         </Typography>

         <Button color="inherit" component={Link} to="/searchGroupsProfiles">Search Groups</Button>
         <Button color="inherit" component={Link} to="/newGroupProfile">Add Group</Button>         
       </Toolbar>
      </AppBar>
    </div>
  );
}