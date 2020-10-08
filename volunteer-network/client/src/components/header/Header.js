import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    AppBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginBottom: '20px',
    },
    title: {
        flexGrow: 1,
      },
    menuButton: {
    marginRight: theme.spacing(3),
    },
  }));


const Header = () => {
    
    let history = useHistory();
    const goAdmin = () => {
        history.push('/adminDashboard')
    }

    const classes = useStyles();
    return (
        
        <Container className={classes.root}>
            <AppBar className={classes.AppBar}  position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} width="150" alt=""/>
                    </Link>
                </Typography>
                <Button color="primary" className={classes.menuButton}>Home</Button>
                <Button color="primary" className={classes.menuButton}>Donation</Button>
                <Button color="primary" className={classes.menuButton}>Events</Button>
                <Button color="primary" className={classes.menuButton}>Blog</Button>
                <Button color="primary" variant="contained" className={classes.menuButton}>Register</Button>
                <Button color="primary" variant="contained" className={classes.menuButton} onClick={goAdmin}>Admin</Button>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Header;