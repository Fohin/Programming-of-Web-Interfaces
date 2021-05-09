import React, { useState } from 'react';
import Profile from '../components/Students/StudentProfile';
import SearchBox from '../components/Students/SearchBox';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  leftContainer: {
    width: 800,
  },
  searchContainer: {
    marginTop: 30,
    marginLeft: 65,
  },
}));

const SearchProfiles = (props) => {
    const classes = useStyles();
  
    const [searchProfiles, setSearchProfiles] = useState();
  
    const updateProfilesDescription = (input) => {
      if (input) {
        const filtered = props.profiles?.filter((profile) => {
          return profile.description
            .toLowerCase()
            .includes(input.toString().toLowerCase());
        });
        setSearchProfiles(filtered);
      } else {
        setSearchProfiles('');
      }
    };
  
    const updateProfilesTags = (input) => {
      if (input) {
        const filtered = props.profiles?.filter((profile) => {
          return profile.tags
            .toLowerCase()
            .includes(input.toString().toLowerCase());
        });
        setSearchProfiles(filtered);
      } else {
        setSearchProfiles('');
      }
    };
  
  
    return (
      <Box class={classes.container}>
        
        <Box class={classes.leftContainer}>
        
          <Box class={classes.searchContainer}>
            <SearchBox 
              updateProfilesDescription={updateProfilesDescription}
              updateProfilesTags={updateProfilesTags}
            />
          </Box>
  
          {(searchProfiles ? searchProfiles : props.profiles).map((profile) => {
            return (
              <Profile
                name={profile.name}
                email={profile.email}
                description={profile.description}
                tags={profile.tags}
              />
            );
          })}
        </Box>

      </Box>
    );
  };
  
  export default SearchProfiles;