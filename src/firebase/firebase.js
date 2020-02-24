import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAAH3jyxOAhALXMmKJ9dA_Ha50XSdfzdyE",
    authDomain: "crwn-db-aff5c.firebaseapp.com",
    databaseURL: "https://crwn-db-aff5c.firebaseio.com",
    projectId: "crwn-db-aff5c",
    storageBucket: "crwn-db-aff5c.appspot.com",
    messagingSenderId: "275632285632",
    appId: "1:275632285632:web:abd8580bd84aff685c0a25",
    measurementId: "G-JHFR05TJSN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
