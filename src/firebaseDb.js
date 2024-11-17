import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhdcWkUAQPX39nveABmjt6FRoigJFs57M",
  authDomain: "quasartodolist-f1424.firebaseapp.com",
  projectId: "quasartodolist-f1424",
  storageBucket: "quasartodolist-f1424.firebasestorage.app",
  messagingSenderId: "244327792366",
  appId: "1:244327792366:web:71fa9b6252216219253dff",
  measurementId: "G-18J8LV9DY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();

