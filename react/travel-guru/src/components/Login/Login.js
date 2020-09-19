import { Box, Button, Card, CardContent, Checkbox, Container, FormControlLabel, FormGroup, Grid, Link, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Header2 from '../Header/Header2';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyARv2BbZ0C0k_GcSC8N0q7M36WzOB5mSAU",
    authDomain: "travel-guruji.firebaseapp.com",
    databaseURL: "https://travel-guruji.firebaseio.com",
    projectId: "travel-guruji",
    storageBucket: "travel-guruji.appspot.com",
    messagingSenderId: "681057747405",
    appId: "1:681057747405:web:d0919675bae2a0ae85c484"
  };


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    form__box: {
        marginTop: '100px',
        border: '1px solid #949494',
        padding:'30px 10px',
    },
    input__box__style: {
        width: '95%',
        margin: '15px',
    },
    remember__and__forgot: {
        width: '50%',
        margin: '15px',
    },
    booking__btn: {
        backgroundColor: '#F9A51A',
        padding: '10px 30px',
        borderRadius: '5px',
        color: '#000',
        fontWeight: 600,
        width: '100%',
        marginTop: theme.spacing(5),
        '&:hover' :{
            backgroundColor: '#f3ae3b',
        },
    },
    dont__have_acc: {
        textAlign: 'center',
        marginTop: theme.spacing(2),
        pointer:'cursor',
    },
}));

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const Login = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const [loggedInUser, setLoggedInUser] = useContext(UserContext);

      let history = useHistory();
      let location = useLocation();

      let { from } = location.state || { from: { pathname: "/" } };

      const [manageForm, setManageForm] = useState(true);


      const handleTheForm = () => {
        setManageForm( !manageForm );
        console.log("New User Form");
      }

//Firebase Login start

const [user, setUser] = useState({
    isSignedIn: false,
    email: '',
    name:'',
    photo:'',
    password:'',
    error:'',
    success: false,
});


// Initialize Firebase
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

  const provider = new firebase.auth.GoogleAuthProvider();

  const googleSignIn = () => {
      firebase.auth().signInWithPopup(provider)
      .then( res => {
        const {displayName, email, photoURL} = res.user;
        console.log(displayName);
        console.log(email);
        console.log(photoURL);

        const googleSignedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
        }

        setUser(googleSignedInUser);
        setLoggedInUser(googleSignedInUser);
        history.replace(from);
      }).catch(error => {
        var email = error.email;
      });
  }

  const googleSignOut = () => {
    firebase.auth().signOut()
    .then( (res) => {
        const signOutUser = {
            isSignedIn: false,
            name:'',
            email:'',
            photo:'',
            password:'',
        }
        setUser(signOutUser);
        console.log('Sign-out successful')
      }).catch((error) => {
        console.log('An error happened.');
      });
  }


  const handleInputField = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;

      let isValidFormField = true;

      if( fieldName === 'name'){
          isValidFormField = fieldValue.length > 2;
      }
      
      if( fieldName === 'lname'){
          isValidFormField = fieldValue.length > 2;
      }

      if ( fieldName === 'email'){
          const re = /\S+@\S+\.\S+/;
          isValidFormField = re.test(fieldValue);
          console.log(isValidFormField);
      }
      if( fieldName === 'password'){
          const passwordIsValid = fieldValue.length > 6;
          const checkPassworHasNum = /\d{1}/.test(fieldValue);
          isValidFormField = passwordIsValid && checkPassworHasNum;
        }
      if( fieldName === 'confirmPassword'){
        const confirmPassword = fieldValue.length > 6;
        const checkConfirmPassworHasNum = /\d{1}/.test(fieldValue);
        isValidFormField = confirmPassword && checkConfirmPassworHasNum
        }

    if(isValidFormField){
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
  }

  const handleRegSubmit = (e) => {
      if (user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then( (res) => {
            const newUser = {...user};
            newUser.success = true;
            newUser.error = '';
            setUser(newUser);
            updateProfile(user.name);
            history.replace(from);
            console.log('Successfully Submit');
        })
        .catch((error) => {
            const newUser = {...user};
            newUser.error = error.message;
            newUser.success = false;
            setUser(newUser);
          });
      }
      e.preventDefault();
  }

  const handleLoginSubmit = (e) => {
    if(user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            const {displayName, email} = res.user;
            const passwordSignedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success:true,
                error:'',

            }
            setUser(passwordSignedInUser);
            setLoggedInUser(passwordSignedInUser);
            history.replace(from);
            console.log('Display Name >>>', res.user);
            
        })
        .catch((error) => {
            const newUser = {...user};
            newUser.error = error.message;
            newUser.success = false;
            setUser(newUser);
          });
    }
    e.preventDefault();
  }

    const updateProfile = (name) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name,
        }).then( () =>{
        console.log('Update successful.')
        }).catch((error) =>{
        console.log('An error happened.')
        });
    }

    

    return (
        <Container>
            <Header2></Header2>
            <Grid container spacing={3}>
                <Grid item xs={3} />
                    <Grid item xs={6}>
                    { manageForm ? 
                        <Box>
                            <Card className={classes.form__box}>
                                <CardContent>
                                <Typography variant="h4" component="h2" style={{margin:'15px'}}>
                                    Login
                                </Typography>
                                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleLoginSubmit}>
                                    <TextField id="email" type="email" onBlur={handleInputField} name="email" label="Email" className={classes.input__box__style} />
                                    <TextField id="password" type="password" label="Password" onBlur={handleInputField} name="password" className={classes.input__box__style}  />
                                    <Box component='div' display='flex' justifyContent='center' alignItems='center'>
                                        <Box className={classes.remember__and__forgot}>
                                            <FormGroup row>
                                                <FormControlLabel
                                                    control={
                                                    <Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="checkedB"
                                                        color="primary"
                                                    />
                                                    }
                                                    label="Remember Me"
                                                />
                                            </FormGroup>
                                        </Box>
                                        <Box className={classes.remember__and__forgot}>
                                        <Link
                                            component="button"
                                            variant="body2"
                                            onClick={() => {
                                                console.info("I'm a button.");
                                            }}
                                            >
                                            Forgot Password
                                            </Link>
                                        </Box>
                                    </Box>
                                    <p style={{color: 'red'}}>{user.error}</p>
                                    {user.success && <p style={{color: 'green'}}>User Loggedin Successfully</p> }
                                    <Button color="primary" type='submit' className={classes.booking__btn}>Login</Button>
                                    <Typography variant='subtitle1' className={classes.dont__have_acc}>
                                        Don't have account ? <Link style={{cursor:'pointer'}} onClick={handleTheForm}>Create an account</Link>
                                    </Typography>

                                </form>
                                </CardContent>
                            </Card>
                            <br />
                            <hr />
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<CloudUploadIcon />}
                            >
                                Facebook Signup
                            </Button>
                            {user.isSignedIn ?
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<CloudUploadIcon />}
                                onClick={googleSignOut}
                            >
                                Sign out
                            </Button>

                            :
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<CloudUploadIcon />}
                                onClick={googleSignIn}
                            >
                                Goodgle Signin
                            </Button>
                            }
                        </Box>
                        :
                        <Card className={classes.form__box}>
                            <CardContent>
                            <Typography variant="h4" component="h2" style={{margin:'15px'}}>
                                Create an account
                            </Typography>
                            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleRegSubmit}>
                                <TextField id="first_name" type="text" name="name" onBlur={handleInputField} label="First Name" required className={classes.input__box__style} />

                                <TextField id="last_name" type="text" name="lname" required label="Last Name" onBlur={handleInputField} className={classes.input__box__style} />

                                <TextField id="email" type="email" required name="email" onBlur={handleInputField} label="Email" className={classes.input__box__style} />
                                <TextField id="password" type="password" required label="Password" onBlur={handleInputField} name="password" className={classes.input__box__style}  />

                                <TextField id="confirm_password" type="password" required onBlur={handleInputField} name="confirmPassword" label="Confirm Password" className={classes.input__box__style}  />
                                <p style={{color: 'red'}}>{user.error}</p>
                                {user.success && <p style={{color: 'green'}}>User Created Successfully</p> }
                                <Button color="primary" className={classes.booking__btn} type="submit">Register</Button>
                                <Typography variant='subtitle1' className={classes.dont__have_acc}>
                                    Don't have account ? <Link style={{cursor:'pointer'}} onClick={handleTheForm}>Already have an account</Link>
                                </Typography>

                            </form>
                            </CardContent>
                        </Card> 

                    }
                    </Grid>
                <Grid item xs={3} />
            </Grid>
        </Container>
    );
};

export default Login;