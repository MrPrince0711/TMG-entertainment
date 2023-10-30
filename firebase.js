// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiWOWfBS20OuEy0b6NZijog8_dWcwaBsY",
  authDomain: "tmg-entertainment.firebaseapp.com",
  projectId: "tmg-entertainment",
  storageBucket: "tmg-entertainment.appspot.com",
  messagingSenderId: "3576020065",
  appId: "1:3576020065:web:8bb1e5fa934f31235d7e20",
  measurementId: "G-GW0D54M70B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);