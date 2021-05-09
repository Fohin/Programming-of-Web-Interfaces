import React, { useState } from 'react';
import AddProfiles from '../components/Students/AddProfiles';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 50,
  },

  titleContainer: {
    marginTop: 20,
    marginLeft: 40,
    color: '#0099ff',
  },

}));


const NewProfile = (props) => {
    const classes = useStyles();
  
    const addStudent = (name, email, tags, description) => {
      if (name && email && tags && description) {
        const newProfile = {
          name: name,
          email: email,
          tags: tags,
          description: description,
        };
        props.setProfiles([...props.profiles, newProfile]);
      } else {
        window.alert('Text field cannot be blank!');
      }
    };
  
  
    return (
      <Box class={classes.container}>
        
        <Box>
         <AddProfiles addStudent={addStudent} />
        </Box>

      </Box>
    );
  };
  
  export default NewProfile;