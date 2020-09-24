import { Box, Button, Card, CardContent, Checkbox, Container, FormControlLabel, FormGroup, Grid, Link, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Header2 from '../Header/Header2';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { transitionsPage, transitionVariants } from '../Transitions/Transitions';
import { handleGoogleSignIn, handleFacebookSignIn, firebaseInitializeFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleSignOut } from './LoginManager';
import { toast, ToastContainer } from 'react-toastify';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    form__box: {
        marginTop: '50px',
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
    signIn__button:{
        width: '90%',
        margin: 'auto',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: '1px solid #949494',
        boxShadow: 'none',
        marginTop: '15px',
        marginLeft: '5%',
        '&:hover' : {
            backgroundColor:'#F9A51A',
            border:0,
        }
    },
}));



const Login = () => {
    const classes = useStyles();
    
    const [state, setState] = React.useState({
        checkedB: false,
      });
    
      const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.checked });
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
    lname:'',
    photo:'',
    password:'',
    error:'',
    success: false,
});

firebaseInitializeFramework();

const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        setUser(res);
        setLoggedInUser(res);
        toast.success("Logged in Successfully !", {
            position: toast.POSITION.TOP_LEFT
        });
        history.replace(from);
    })
}

const facebookSignIn = () => {
    handleFacebookSignIn()
    .then(res => {
        setUser(res);
        setLoggedInUser(res);
        toast.success("Logged in Successfully !", {
            position: toast.POSITION.TOP_LEFT
        });
        history.replace(from);
    })
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
        createUserWithEmailAndPassword(user.name, user.lname, user.email, user.password)
        .then(res => {
            setUser(res);
            setLoggedInUser(res);
            toast.success("Registration Successfully Done !", {
                position: toast.POSITION.TOP_LEFT
            });
            history.replace(from);
        })
      }else{
        toast.error("Fields are Required !", {
            position: toast.POSITION.TOP_LEFT
          });
      }
      e.preventDefault();
  }

  const handleLoginSubmit = (e) => {

    if(user.email && user.password) {
        signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            setUser(res);
            setLoggedInUser(res);
            toast.success("Logged in Successfully !", {
                position: toast.POSITION.TOP_LEFT
            });
            history.replace(from);
        }).catch(error => {
            toast.error("Error Notification !", {
                position: toast.POSITION.TOP_LEFT
              });
        })
    }else{
        toast.error("Fields are Required !", {
            position: toast.POSITION.TOP_LEFT
          });
    }
    e.preventDefault();
  }

    const signOut = () => {
        handleSignOut()
        .then(res => {
            setUser(res);
            setLoggedInUser(res);
            toast.info("Logged Out !", {
                position: toast.POSITION.TOP_LEFT
            });
        })
    }
    
    let pageVariants;
    let pageTransitions;
    transitionVariants(pageVariants);
    transitionsPage(pageTransitions);


    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={transitionVariants(pageVariants)}
            transition={transitionsPage(pageTransitions)}
        >
            
        <Container >
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
                                    <TextField id="email" type="email" onBlur={handleInputField} required name="email" label="Email" className={classes.input__box__style} />
                                    <TextField id="password" type="password" required label="Password" onBlur={handleInputField} name="password" className={classes.input__box__style}  />
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
                            {user.isSignedIn 
                            ?
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.signIn__button}
                                onClick={signOut}
                            >
                                Facebook SignOut
                            </Button>
                            :
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.signIn__button}
                                onClick={facebookSignIn}
                            >
                                <img src={process.env.PUBLIC_URL + '/images/fb.png'} width="30" alt="google login" style={{marginRight: '5%'}} />
                                Continue with Facebook
                            </Button>
                            }
                            
                            {user.isSignedIn ?
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.signIn__button}
                                startIcon={<CloudUploadIcon />}
                                onClick={signOut}
                            >
                                Sign out
                            </Button>

                            :
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.signIn__button}
                                onClick={googleSignIn}
                            >
                                <img src={process.env.PUBLIC_URL + '/images/google.png'} width="30" alt="google login" style={{marginRight: '5%'}} />
                                Continue with Goodgle
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
    </motion.div>
    );
};

export default Login;