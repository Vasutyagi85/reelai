// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqeMDjCEegaUl89KZDzJ8HcHD9dJLNyX4",
  authDomain: "reelai-98d13.firebaseapp.com",
  projectId: "reelai-98d13",
  storageBucket: "reelai-98d13.firebasestorage.app",
  messagingSenderId: "397727668445",
  appId: "1:397727668445:web:f325f54dbcfd1b1d05a334",
  measurementId: "G-YSH7SPT9QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth();