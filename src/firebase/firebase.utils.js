import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9TwoAeekJXKbYlcdKBEr83rQqGVVsIco",
    authDomain: "profile-webapp-8f345.firebaseapp.com",
    databaseURL: "https://profile-webapp-8f345.firebaseio.com",
    projectId: "profile-webapp-8f345",
    storageBucket: "profile-webapp-8f345.appspot.com",
    messagingSenderId: "664025801706",
    appId: "1:664025801706:web:c1eaafc584aef427414893",
    measurementId: "G-1QEWTJ1LPR"
  };

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
    };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;