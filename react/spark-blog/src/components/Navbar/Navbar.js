import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#2196F3',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuBtnS: {
    background: 'transparent',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

const ButtonAppBar = () => {
    const classes = useStyles();

  return (
    
    <div className={classes.root}>
    <Container>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="40" alt="logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            React Blog
            </Typography>
          
          <Button className={classes.menuBtnS} href="/home">Home</Button>
          <Button className={classes.menuBtnS} href="/about">About</Button>
          <Button className={classes.menuBtnS} href="/blog">Blog</Button>
          <Button className={classes.menuBtnS} href="/contact">Contact </Button>
        </Toolbar>
      </AppBar>
    </Container>
      
    </div>
    
  );
}

export default ButtonAppBar;