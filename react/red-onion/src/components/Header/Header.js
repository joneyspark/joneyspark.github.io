import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box, Container, IconButton  } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    app___bar:{
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    banner__bg:{
        backgroundImage: `url(${process.env.PUBLIC_URL}/red-onion/images/bannerbackground.png)`,
        height: 510,
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: "#333"
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <>
        <Container>
            <AppBar position="static" className={classes.app___bar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img width="150" src={process.env.PUBLIC_URL + '/red-onion/images/logo2.png'} /> 
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                    <Button color="primary">Login</Button>
                    <Button color="primary">Signup</Button>
                </Toolbar>
            </AppBar>
        </Container>
        <Box component="div" display="flex" justifyContent="center" alignItems="center" className={classes.banner__bg}>
            <Box>
                <Typography variant="h3" component="h4" p={3} gutterBottom>
                    Best Food waiting for your belly
                </Typography>
                <Box className="banner__search">
                    <input type="search" placeholder="Search Food Item" />
                    <Button color="primary">Search</Button>
                </Box>
            </Box>
        </Box>
        </>
    );
};

export default Header;