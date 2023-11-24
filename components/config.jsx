// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB3svqrggecZV2asghqn5ON9WbqMY0NE_0",
  authDomain: "fir-tutorial-a8743.firebaseapp.com",
  projectId: "fir-tutorial-a8743",
  storageBucket: "fir-tutorial-a8743.appspot.com",
  messagingSenderId: "216699909342",
  appId: "1:216699909342:web:9c255cd53be4d9ab93be4f",
  measurementId: "G-PQFF4HD1SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize database
export const db = getDatabase(app);