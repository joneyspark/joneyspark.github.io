import * as firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHVqPoojRZD11VGRELuVQAB9snCtlK1Lw",
  authDomain: "ema-jhon-simple-2cf2f.firebaseapp.com",
  databaseURL: "https://ema-jhon-simple-2cf2f.firebaseio.com",
  projectId: "ema-jhon-simple-2cf2f",
  storageBucket: "ema-jhon-simple-2cf2f.appspot.com",
  messagingSenderId: "706806171454",
  appId: "1:706806171454:web:55c154f8576e68d3064e6f",
  measurementId: "G-8GSJT8YGQ8"
};

export const firebaseInitializeFramework = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handelGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
        const {displayName, photoURL, email} = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          photo: photoURL,
          email: email,
          success: true,
        }
        return signedInUser;
    })
    .catch(error => {
        console.log(error);
        console.log(error.message);
    })
}

export const handelSignOut = () => {
    return firebase.auth().signOut()
    .then(res =>{
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email:'',
        password:'',
        photo:''
      }
      return signedOutUser;
    })
    .catch(error =>{
      console.log(error);
    })
  }

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res =>{
          const newUserInfo = res.user;
          newUserInfo.success = true;
          newUserInfo.error = '';
          updateUserInfo(name);
          return newUserInfo;
        })
        .catch(error =>{
          const newUserInfo = {};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          return newUserInfo;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          const newUserInfo = res.user;
          newUserInfo.success = true;
          newUserInfo.error = '';
          return newUserInfo;
        })
        .catch(function(error) {
          const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

const updateUserInfo = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      //photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      console.log('Update successful');
    }).catch(function(error) {
      console.log(error);
    });
  }