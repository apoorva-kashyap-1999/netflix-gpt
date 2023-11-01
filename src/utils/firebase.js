// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9JIP8ZAT7jzpKp6f7N5TrY_nOvDhErpQ",
  authDomain: "netflixgpt-f37a9.firebaseapp.com",
  projectId: "netflixgpt-f37a9",
  storageBucket: "netflixgpt-f37a9.appspot.com",
  messagingSenderId: "292278648384",
  appId: "1:292278648384:web:cdd5883bfd9be4fcb3a9a5",
  measurementId: "G-BZTPP9BSSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();