// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDApAOmE0XJ1bfwIsTS77cdewVYPigbRJQ",
  authDomain: "my-app-7574f.firebaseapp.com",
  projectId: "my-app-7574f",
  storageBucket: "my-app-7574f.appspot.com",
  messagingSenderId: "939118334569",
  appId: "1:939118334569:web:d42ede4d8fd96f826148f8",
  measurementId: "G-ZJGK9RE6KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);