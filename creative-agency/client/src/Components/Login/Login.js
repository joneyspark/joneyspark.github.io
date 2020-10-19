import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../Config/Config';
import * as firebase from "firebase/app";
import "firebase/auth";


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

    const handelGoogleSignIn = () => {
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
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('name', displayName);
            storeAuthToken();
            

          }).catch((error) => {
            const errorMessage = error.message;

          });
       
    }

    

    

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
            
          }).catch(function(error) {
            // Handle error
          });
    }


    return (
        <section className="login-section">
            <div className="container">
                <div className="row d-flex align-items-center" style={{height: '100vh'}}>
                    <div className="col-md-6 offset-md-3">
                    <div className="loginlogo text-center p-5" style={{width: '100%'}}>
                    <img className="img-fluid text-center" width="180" src={process.env.PUBLIC_URL + '/images/logos/logo.png'} alt="" />
                    </div>
                        <div className="card text-center " style={{padding: '100px 0'}}>
                            <h4>Login With</h4>
                            <button className="btn btn-default" style={{border: '1px solid #ddd', borderRadius: '16px', margin:'15px 75px'}} onClick={handelGoogleSignIn}>Continue with Google</button>
                            <p>Don't have an account? <a href="#">Create an account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;