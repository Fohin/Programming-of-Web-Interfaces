import React, { useState } from 'react';
import GroupProfile from '../components/Groups/GroupProfile';
import SearchBoxGroup from '../components/Groups/SearchBoxGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

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

const SearchGroupProfiles = (props) => {
    const classes = useStyles();
  
    const [searchGroupProfiles, setSearchGroupProfiles] = useState();
  
    const updateGroupProfilesDescription = (input) => {
      if (input) {
        const filtered = props.groups?.filter((profile) => {
          return profile.description
            .toLowerCase()
            .includes(input.toString().toLowerCase());
        });
        setSearchGroupProfiles(filtered);
      } else {
        setSearchGroupProfiles('');
      }
    };
  
    const updateGroupProfilesTags = (input) => {
      if (input) {
        const filtered = props.groups?.filter((profile) => {
          return profile.tags
            .toLowerCase()
            .includes(input.toString().toLowerCase());
        });
        setSearchGroupProfiles(filtered);
      } else {
        setSearchGroupProfiles('');
      }
    };
  
  
    return (
      <Box class={classes.container}>
        
        <Box class={classes.leftContainer}>
        
          <Box class={classes.searchContainer}>
            <SearchBoxGroup 
              updateGroupProfilesDescription={updateGroupProfilesDescription}
              updateGroupProfilesTags={updateGroupProfilesTags}
            />
          </Box>
  
          {(searchGroupProfiles ? searchGroupProfiles : props.groups).map((profile) => {
            return (
              <GroupProfile
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
  
  export default SearchGroupProfiles;