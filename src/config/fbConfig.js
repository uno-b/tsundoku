import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCDw9JzYAyv-NoXFrH8inXGkGwTfCFhxG4",
  authDomain: "tsundoku-41b6f.firebaseapp.com",
  databaseURL: "https://tsundoku-41b6f.firebaseio.com",
  projectId: "tsundoku-41b6f",
  storageBucket: "tsundoku-41b6f.appspot.com",
  messagingSenderId: "1006854295361",
  appId: "1:1006854295361:web:b450accdbf97ccf0e61bc0",
  measurementId: "G-FNVV40S4Y9",
};

firebase.initializeApp(config);

export default firebase;
