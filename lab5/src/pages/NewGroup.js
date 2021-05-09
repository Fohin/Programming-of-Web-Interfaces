import React, { useState } from 'react';
import AddGroups from '../components/Groups/AddGroups';
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


const NewGroup = (props) => {
    const classes = useStyles();
  
    const addGroup = (name, email, tags, description) => {
      if (name && email && tags && description) {
        const newGroup= {
          name: name,
          email: email,
          tags: tags,
          description: description,
        };
        props.setGroupProfiles([...props.groups, newGroup]);
      } else {
        window.alert('Text field cannot be blank!');
      }
    };
  
  
    return (
      <Box class={classes.container}>
        
        <Box>
         <AddGroups addGroup={addGroup} />
        </Box>

      </Box>
    );
  };
  
  export default NewGroup;