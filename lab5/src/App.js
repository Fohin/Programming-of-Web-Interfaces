import React, { useState } from 'react';
import AppBar from './components/AppBar';
import SearchProfiles from './pages/SearchProfiles';
import NewProfile from './pages/NewProfile';
import SearchGroups from './pages/SearchGroups';
import NewGroup from './pages/NewGroup';
import PageNotFound from './images/PageNotFound.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'flex',
    marginTop: 50,
    marginLeft: 380,
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

const groupss = [
  {
    name: 'Nokia Group',
    email: 'nokia.group@gmail.com',
    description: 'Sed felis neque, cursus vitae enim non, facilisis sagittis nulla. Mauris lacus nulla, \
                  ullamcorper non tincidunt ut, consequat ac sapien.',
    tags: 'Python, Django, SQL, JavaScript',
  },
  {
    name: 'PolWroProject',
    email: 'polwroproject@gmail.com',
    description: 'In gravida volutpat massa non tempor. Nunc commodo lacus sit amet nisi molestie, \
                  quis consectetur sapien tempus. Maecenas vel tellus sed justo hendrerit venenatis.',
    tags: 'Java, Docker, Python, C, C++',
  },
  {
    name: 'BEST Wroclaw',
    email: 'best.wroclaw@gmail.com',
    description: 'Nam varius diam quis odio suscipit, in porttitor est sodales. Mauris aliquam lacus at velit iaculis convallis. \
                  Quisque et mauris vel dui lobortis fringilla non vitae urna. Nullam vel velit vitae nibh rhoncus sodales vitae ac est.',
    tags: 'Bash, Docker, Python'
  },
];

const App = () => {

  const classes = useStyles();
  
  const [profiles, setProfiles] = useState(students);
  const [groups, setGroupProfiles] = useState(groupss);

  return (

    <Router basename="/Programming-of-Web-Interfaces">
      
      <AppBar/>

      <Switch>
        
        <Route
         exact path="/"
         component={() => (
            <SearchProfiles profiles={profiles} setProfiles={setProfiles} />
          )} 
        />
        <Route
         exact path="/searchProfiles"
         component={() => (
            <SearchProfiles profiles={profiles} setProfiles={setProfiles} />
          )} 
        />
        <Route 
         exact path="/newProfile" 
         component={() => (
            <NewProfile profiles={profiles} setProfiles={setProfiles} />
          )} 
        />
        <Route
         exact path="/searchGroupsProfiles"
         component={() => (
            <SearchGroups groups={groups} setGroupProfiles={setGroupProfiles} />
          )} 
        />
        <Route 
         exact path="/newGroupProfile" 
         component={() => (
            <NewGroup groups={groups} setGroupProfiles={setGroupProfiles} />
          )} 
        />
        <Route>
          <div className={classes.image}>
            <img src={PageNotFound} alt="PageNotFound" />
          </div>  
        </Route>
        
      </Switch>

    </Router>

  );
};

export default App;
