import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnbsMZ2TU8IexWXHcgC-h7mOyEnyrGLn8",
  authDomain: "reactts1-26838.firebaseapp.com",
  databaseURL: "https://reactts1-26838-default-rtdb.firebaseio.com",
  projectId: "reactts1-26838",
  storageBucket: "reactts1-26838.appspot.com",
  messagingSenderId: "1095671119669",
  appId: "1:1095671119669:web:07e6ca0334cf946c0a567c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
