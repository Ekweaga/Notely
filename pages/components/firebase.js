// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtM23MiEyEWzIJT9eKX3FR9NkkCUYeU-E",
  authDomain: "notely-af2e3.firebaseapp.com",
  projectId: "notely-af2e3",
  storageBucket: "notely-af2e3.appspot.com",
  messagingSenderId: "829533614561",
  appId: "1:829533614561:web:2b30e1a0c36d7d864f22a0",
  measurementId: "G-G64PMRET8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);