import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCf6ACviSzkS7tujFPfyd6o3iLkvj99Fks",
    authDomain: "messenger-63e48.firebaseapp.com",
    projectId: "messenger-63e48",
    storageBucket: "messenger-63e48.appspot.com",
    messagingSenderId: "513675006315",
    appId: "1:513675006315:web:e056012d611feeb1317c2e",
    measurementId: "G-2YJD7MXHRS"
});

const db = firebaseApp.firestore();

export default db;