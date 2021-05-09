import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Box, CardContent, Typography, CardActions, Button, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import EmailIcon from '@material-ui/icons/Email';
import GroupIcon from '@material-ui/icons/Group';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const styles = (theme) => ({
    root: {
      margin: 20,
      backgroundColor: 'white',
    },

    nameContainer: {
      display: 'flex',
      alignItems: 'center',
    },

    name: {
      fontSize: 35,
      fontWeight: 500,
      marginLeft: 10,
      fontStyle: 'bold',
    },

    profile: {
      fontSize: 80,
      color: '#FE3C72',
    },

    emailContainer: {
      display: 'flex',
      alignItems: 'center',
    },

    email: {
      fontSize: 14,
      marginLeft: 15,
      fontStyle: 'italic',
    },

    emailIcon: {
      fontize: 20,
      marginLeft: 30,
      color: '#0099ff',
    },

    description: {
      fontSize: 15,
      marginBottom: 12,
      marginTop: 10,
    },

    tags: {
      fontSize: 13,
      marginTop: 20,
    },

    cardActions: {
      height: 1,
    },

    buttonMessage: {
      marginLeft: 600,
    },
  });

  class GroupProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const { classes } = this.props;
  
      return (
        <Paper elevation={2} className={classes.root}>

          <CardContent>

            <Box className={classes.nameContainer}>
              <GroupIcon className={classes.profile} />
              <Typography className={classes.name} color="textPrimary">
                {this.props.name}
              </Typography>
            </Box>

            <Box className={classes.emailContainer}>
              <EmailIcon className={classes.emailIcon} />
              <Typography variant="caption" className={classes.email} color="primary">
                {this.props.email}
              </Typography>
            </Box>

            <Typography className={classes.description} color="inherit">
              {this.props.description}
            </Typography>

            <Typography className={classes.tags} color="textSecondary">
              Tags:{' '} {this.props.tags}
            </Typography>

            <CardActions className={classes.cardActions}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.buttonMessage}
                endIcon={<SendRoundedIcon/>}
               >
                Message
              </Button>
            </CardActions>

          </CardContent>

        </Paper>
      );
    }
  }
  
  GroupProfile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(GroupProfile);