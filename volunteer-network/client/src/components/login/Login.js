import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseconfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loginBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      border: '1px solid #ddd',
      minHeight: '260px',
      textAlign: 'center'
    },
    googleLoginBtn: {
      backgroundColor: 'transparent',
      color: '#000',
      width: '400px',
      '&:hover': {
        backgroundColor: '#3dc379',
      }
    }
  });

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        name:'',
        error:'',
        success: false,
    });

    let history = useHistory();
    let location = useLocation();

      let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInuser = {
                name: displayName,
                email: email,
                isSignedIn: true,
                success: true,
            }
            setUser(signedInuser);
            setLoggedInUser(signedInuser);
            storeAuthToken();
            

          }).catch((error) => {
            const errorMessage = error.message;

          });
    }

    console.log("Loggedin user>>>", loggedInUser);
    console.log(user);

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Box component="div" className={classes.loginBox}>
                    <Box component='div'>
                        <Typography variant="h6">
                            Login With
                        </Typography>
                        <br />
                        <Box>
                        
                          <Button color="primary" variant="contained" className={classes.googleLoginBtn} onClick={handleGoogleSignin}><img src={process.env.PUBLIC_URL + '/images/google.png'} width="35" style={{marginRight: '15px'}} />Google Signin</Button>
                        </Box>
                        
                        
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
};

export default Login;