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

//allow us to take google object when user log's in with google
//async action because we are making API request
export const createUser = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = await userRef.get();

    if(!snapShop.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }catch (error) {
            console.log('error msg', error)
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
