import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import {
    useHistory
  } from "react-router-dom";
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#fff",
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    
  }));

  
const Header = () => {
    const classes = useStyles();
    let history = useHistory();
    const goToProduct = () => {
        history.push('/product')
    }
    
    const goToShop = () => {
        history.push('/shop')
    }

    return (
        <>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar>
                    <Button color="primary" 
                    onClick={goToProduct}>
                        Product
                    </Button>
                    <Button color="primary" onClick={goToShop}>
                        Shop
                    </Button>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="logo here" width="180" />
                    </Typography>
                        <Button color="primary">
                            ManageInventory
                        </Button>
                        <Button color="primary">
                            Category
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;