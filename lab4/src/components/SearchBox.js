import React from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  searchField: {
    marginLeft: 200,
  },

}));


function Search(props) {
    const classes = useStyles();

    return (
      
        <Box class={classes.searchField}>
            <TextField
            label="Search in description"
            placeholder="..." 
            type="search" 
            variant="filled" 
            onChange={({ target: { value } }) => {
            props.updateProfilesDescription(value);
            }}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton>
                    <SearchIcon/>
                    </IconButton>
                </InputAdornment>,
            }}
            />

            <br />
            <br />

            <TextField
            label="Search in tags"
            placeholder="..." 
            type="search" 
            variant="filled"
            onChange={({ target: { value } }) => {
            props.updateProfilesTags(value);
            }} 
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton>
                    <SearchIcon/>
                    </IconButton>
                </InputAdornment>,
            }}
            />
        </Box>

    );
  }


export default Search;