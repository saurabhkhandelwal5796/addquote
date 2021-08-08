import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

{/*NavBar Buttons imported:  */}
          <Typography className={classes.title} variant="h6" noWrap>
          <Button style = {{color :'white'}} component={Link} to={'/'} color="white">Best Quotes</Button>
          </Typography>
          <div className={classes.grow} />
          <Typography className={classes.title} variant="h6" noWrap>
          <Button style = {{color :'white'}} component={Link} to={'/home'} color="white">Home</Button>
          <Button style = {{color :'white'}} component={Link} to={'/wellLiked'} color="white">Liked Quotes</Button>
          <Button style = {{color :'white'}} component={Link} to={'/addQuote'} color="white">Add Quotes</Button>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
