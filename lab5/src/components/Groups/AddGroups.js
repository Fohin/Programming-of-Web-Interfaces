import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Grid, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirextion: 'row',
    alignItems: 'center',
  },

  paper: {
    padding: 30,
    minHeight: 450,
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
    marginTop: 120,
    height: 40,
  },
}));

export default function AddGroups(props) {
  const classes = useStyles();
  
  const [typedName, setTypedName] = useState('');
  const [typedEmail, setTypedEmail] = useState('');
  const [typedTags, setTypedTags] = useState('');
  const [typedDescription, setTypedDescription] = useState('');

  const addGroup = () => {
    props.addGroup(typedName, typedEmail, typedTags, typedDescription);
    setTypedName('');
    setTypedEmail('');
    setTypedTags('');
    setTypedDescription('');
  };

  return (
    <Paper elevation={3} className={classes.paper}>

      <Grid className={classes.root} container>

        <Typography variant="h4" className={classes.titleField}>
          Add new group
        </Typography>

        <Grid className={classes.textFields}>
          <TextField
            variant="filled"
            label="Your Group Name"
            placeholder="Enter your group name"
            fullWidth
            className={classes.textField}
            value={typedName}
            onChange={({ target: { value } }) => {
              setTypedName(value);
            }}
          />

          <TextField
            variant="filled"
            label="Your Group Email"
            placeholder="Enter your group email"
            fullWidth
            className={classes.textField}
            value={typedEmail}
            onChange={({ target: { value } }) => {
              setTypedEmail(value);
            }}
          />

          <TextField
            variant="filled"
            label="Your Tags"
            placeholder="Enter tags"
            fullWidth
            className={classes.textField}
            value={typedTags}
            onChange={({ target: { value } }) => {
              setTypedTags(value);
            }}
          />

          <TextField
            variant="filled"
            label="Your group description"
            placeholder="Write something about your group"
            multiline
            rows={4}
            fullWidth
            className={classes.textField}
            value={typedDescription}
            onChange={({ target: { value } }) => {
              setTypedDescription(value);
            }}
          />

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            className={classes.addButton}
            onClick={() => addGroup()}
          >
            Add
          </Button>
        </Grid>  
      </Grid>
    </Paper>
  );
}