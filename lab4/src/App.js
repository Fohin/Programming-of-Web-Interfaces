import React, { useState } from 'react';
import Profile from './components/StudentProfile';
import AddProfiles from './components/AddProfiles';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import SearchBox from './components/SearchBox';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  titleContainer: {
    marginTop: 20,
    marginLeft: 40,
    color: '#0099ff',
  },

  leftContainer: {
    width: 800,
  },
  searchContainer: {
    marginTop: 30,
    marginLeft: 20,
  },
}));

const students = [
  {
    name: 'Ragnar Lothbrok',
    email: 'i.am.king@vikings.com',
    description: 'Maecenas sed ante a arcu tincidunt congue. Etiam vel nibh ullamcorper, commodo lectus vitae, \
                  lacinia leo. Morbi risus ex, condimentum non posuere in, porta non risus.',
    tags: 'Bash, Docker, Python',
  },
  {
    name: 'Bjorn Lothbrok',
    email: 'ironside@vikings.com',
    description: 'Nulla vel ultricies augue. Vivamus neque erat, facilisis sit amet purus ac,\
                  interdum laoreet metus. Donec vitae vestibulum velit, id varius odio. ',
    tags: 'Python, Django, SQL, JavaScript',
  },
  {
    name: 'Travis Fimmel',
    email: 'king.ragnar@vikings.com',
    description: 'Suspendisse non bibendum nunc. Nullam tristique sodales mi et porta. Ut finibus nisl vitae risus cursus blandit. \
                  Nam et magna eget arcu luctus egestas. Duis a magna aliquam, volutpat enim nec, euismod urna.',
    tags: 'Java, Docker, Python, C, C++',
  },
];

const App = () => {
  const classes = useStyles();

  const [profiles, setProfiles] = useState(students);
  const [searchProfiles, setSearchProfiles] = useState();


  const updateProfilesDescription = (input) => {
    if (input) {
      const filtered = profiles?.filter((profile) => {
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
      const filtered = profiles?.filter((profile) => {
        return profile.tags
          .toLowerCase()
          .includes(input.toString().toLowerCase());
      });
      setSearchProfiles(filtered);
    } else {
      setSearchProfiles('');
    }
  };

  const addStudent = (name, email, tags, description) => {
    if (name && email && tags && description) {
      const newProfile = {
        name: name,
        email: email,
        tags: tags,
        description: description,
      };
      setProfiles([...profiles, newProfile]);
    } else {
      window.alert('Text field cannot be blank!');
    }
  };


  return (
    <Box class={classes.container}>
      
      <Box class={classes.leftContainer}>
      
        <Box class={classes.titleContainer}>
             
          <Typography variant="h2">
            Tinder for students project
          </Typography>
            
        </Box> 

        <Box class={classes.searchContainer}>
          <SearchBox 
            updateProfilesDescription={updateProfilesDescription}
            updateProfilesTags={updateProfilesTags}
          />
        </Box>

        {(searchProfiles ? searchProfiles : profiles).map((profile) => {
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
      <Box>
        <AddProfiles addStudent={addStudent} />
      </Box>
    </Box>
  );
};

export default App;
