// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp9cx-XYQpsuBFPhm0rBaBRmUVYMfp6x4",
  authDomain: "portfolio-db6df.firebaseapp.com",
  projectId: "portfolio-db6df",
  storageBucket: "portfolio-db6df.firebasestorage.app",
  messagingSenderId: "35135143797",
  appId: "1:35135143797:web:002946313b6814b975dd3c",
  measurementId: "G-R65Y3BWHPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//const analytics = getAnalytics(app);