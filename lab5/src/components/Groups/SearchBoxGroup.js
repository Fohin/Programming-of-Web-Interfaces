import React from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  searchField: {
    marginLeft: 200,
  },

}));


function SearchBoxGroups(props) {
    const classes = useStyles();

    return (
      
        <Box class={classes.searchField}>
            <TextField
            label="Search in description"
            placeholder="..." 
            type="search" 
            variant="filled" 
            onChange={({ target: { value } }) => {
            props.updateGroupProfilesDescription(value);
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
            props.updateGroupProfilesTags(value);
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


export default SearchBoxGroups;