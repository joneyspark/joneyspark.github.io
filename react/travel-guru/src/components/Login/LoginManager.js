import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyARv2BbZ0C0k_GcSC8N0q7M36WzOB5mSAU",
    authDomain: "travel-guruji.firebaseapp.com",
    databaseURL: "https://travel-guruji.firebaseio.com",
    projectId: "travel-guruji",
    storageBucket: "travel-guruji.appspot.com",
    messagingSenderId: "681057747405",
    appId: "1:681057747405:web:d0919675bae2a0ae85c484"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const provider = new firebase.auth.GoogleAuthProvider();
  
  export const googleSignIn = () => {
    return firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        
        var user = result.user;
        
      })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

