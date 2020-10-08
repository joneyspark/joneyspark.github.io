import React, { useContext, useState } from 'react';
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        backgroundColor: '#3f51b5',
        padding: '10px 30px',
        borderRadius: '5px',
        color: '#fff',
        fontWeight: 600,
        width: '100%',
        marginTop: theme.spacing(5),
        '&:hover' :{
            backgroundColor: '#4f66e6',
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
    error: {
        color: 'red',
        fontWeight: 'bold'
    },
    success: {
        color: 'green',
        fontWeight: 'bold'
    },
}));


const AdminLogin = () => {

    const [adminLoggedin, setAdminLoggedIn] = useContext(UserContext);

    const [admin, setAdmin] = useState({
        isSignedIn: false,
        email: '',
        password:'',
    })

    const [handleFields, setHandleFields] = useState({
        errors: {
            password:'',
            email:'',
        }
    });

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    const classes = useStyles();

    const handleInputField = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const errors = handleFields.errors;
    
        switch (fieldName) {
    
            case "email":
                const re = /\S+@\S+\.\S+/;
                errors.email = re.test(fieldValue) ? "": "Email Not Valid";
                //errors.email = fieldValue.length < 5 ? "Email at least 5 character": "";
                break;
            
            case "password":
                errors.password = fieldValue.length < 6 ? "Please give at least 6 character password": "";
                break;
    
            default:
                break;
        }

        setHandleFields({errors, [fieldName]:fieldValue});
    
    }

    const { errors } = handleFields;
    
    const handleLoginSubmit = (e) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        if(email && password ){
            if(handleFields.errors.email.length === 0 && handleFields.errors.password.length === 0){
                console.log("Admin clicked logged...", email, password)
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res.user);
                    const { email, password } = res.user;
                    const adminUser = {
                        isSignedIn: true,
                        email: email,
                        password: password,
                    }
                    setAdminLoggedIn(adminUser);
                    history.replace(from);
                    toast.success("Logged in Successfully", {
                        position: toast.POSITION.TOP_LEFT
                    });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const errorMsg = errorMessage ? "Please Provide Correct Information" : "";
                    toast.error(errorMsg, {
                        position: toast.POSITION.TOP_LEFT
                      });
                    console.log(errorMessage);
                  });
            }
        }else{
            toast.error("Please give Correct Information !", {
                position: toast.POSITION.TOP_LEFT
              });
        }
    
        e.preventDefault();
      }

      

    return (
        <Container >
            <Grid container spacing={3}>
                <Grid item xs={3} />
                    <Grid item xs={6}>
                        <Box>
                            <Card className={classes.form__box}>
                                <CardContent>
                                <Typography variant="h4" component="h2" style={{margin:'15px'}}>
                                    Login
                                </Typography>
                                
                                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleLoginSubmit}>
                                    <TextField id="email" type="email" onBlur={handleInputField} required name="email" label="Email" className={classes.input__box__style} />
                                    <p className={classes.error}>{errors.email}</p>
                                    <TextField id="password" type="password" required label="Password" onBlur={handleInputField} name="password" className={classes.input__box__style}  />
                                    <p className={classes.error}>{errors.password}</p>
                                    
                                    <Button color="primary" type='submit' className={classes.booking__btn}>Login</Button>
                                </form>
                                <Typography variant="h6" component="h6" style={{margin:'15px'}}>
                                    <code>
                                        Email: superadmin@email.com <br />
                                        Password: 12345678
                                    </code>
                                </Typography>
                                </CardContent>
                            </Card>
                            
                        </Box>
                   
                    </Grid>
                <Grid item xs={3} />
            </Grid>
        </Container>
    );
};

export default AdminLogin;