import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "auth-boilerplate-4b8b7.firebaseapp.com",
    databaseURL: "https://auth-boilerplate-4b8b7.firebaseio.com",
    projectId: "auth-boilerplate-4b8b7",
    storageBucket: "auth-boilerplate-4b8b7.appspot.com",
    messagingSenderId: "352435680666",
    appId: "1:352435680666:web:7dcef0ca7f2f87e1a4f623"
});

export default app;
