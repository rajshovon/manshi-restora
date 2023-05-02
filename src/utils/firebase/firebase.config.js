// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS_-J7HQXCNu3Snuj2XLyJr1uDEEgx3vI",
  authDomain: "manshi-restora.firebaseapp.com",
  projectId: "manshi-restora",
  storageBucket: "manshi-restora.appspot.com",
  messagingSenderId: "674628618052",
  appId: "1:674628618052:web:7cd2ae03d640e3948ab911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;