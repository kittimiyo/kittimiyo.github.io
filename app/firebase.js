import * as firebase from 'firebase';

let isAnonymous = true;
let uid = false;

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBCBrH4Bz2HwZ90OleRNz_PD0kY7J8pI-s",
    authDomain: "sylvie-wedding-site.firebaseapp.com",
    databaseURL: "https://sylvie-wedding-site.firebaseio.com",
    storageBucket: "sylvie-wedding-site.appspot.com",
    messagingSenderId: "1056019502803"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.auth().signInAnonymously().catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
});

firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
        isAnonymous = user.isAnonymous;
        uid = user.uid;
    } else {
        // User is signed out.
    }
});

export default firebaseApp;