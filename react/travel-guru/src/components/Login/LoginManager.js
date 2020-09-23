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
  export const firebaseInitializeFramework = ()=> {
    // Initialize Firebase
    if(firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig);
    }
  }

  export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
      return firebase.auth().signInWithPopup(provider)
      .then( (res) => {
        const {displayName, email, photoURL} = res.user;
        const googleSignedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true,
        }

        return googleSignedInUser;
      }).catch(error => {
        const errorMessage = error.message;
      });
  }

  export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then( (res) => {
        const signOutUser = {
            isSignedIn: false,
            name:'',
            email:'',
            photo:'',
            password:'',
        }
        return signOutUser;
      }).catch((error) => {
        console.log('An error happened.');
      });
  }

  export const handleFacebookSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookProvider)
    .then((res)=> {
      const {displayName, email, photoURL} = res.user;
      const facebookSignedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true,
      }
  
      return facebookSignedInUser;
    }).catch((error)=> {
      const errorMessage = error.message;
    });
  }

  export const createUserWithEmailAndPassword = (name, lname, email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( (res) => {
            const newUser = res.user;
            newUser.success = true;
            newUser.error = '';
            updateProfile(name, lname);
            console.log("New User>>>", res.user);
            return newUser;
        })
        .catch((error) => {
            const newUser = {};
            newUser.error = error.message;
            newUser.success = false;
            return newUser;
          });

  }

  export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
          const newUser = res.user;
          newUser.success = true;
          newUser.error = '';
          console.log("Loggined In User>>>", res.user);
          return newUser;
        })
        .catch((error) => {
            const newUser = {};
            newUser.error = error.message;
            newUser.success = false;
            return newUser;
          });
  }

  const updateProfile = (name, lname) => {

    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name + " " + lname,
    }).then( () =>{
    console.log('Update successful.')
    }).catch((error) =>{
    console.log('An error happened.')
    });
}
