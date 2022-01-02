import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDf-lRm1q6IQJ1Usc49XcZ58-qQXbE8o_w",
    authDomain: "chichatapps.firebaseapp.com",
    projectId: "chichatapps",
    storageBucket: "chichatapps.appspot.com",
    messagingSenderId: "558735460000",
    appId: "1:558735460000:web:27e828cd153e5ec121ebc5",
  })
  .auth();
