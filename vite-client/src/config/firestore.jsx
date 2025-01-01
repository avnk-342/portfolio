// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxwBDqOKQXd7RH-HbfnHsStHo81cEKt9I",
  authDomain: "portfolio-web-b44c7.firebaseapp.com",
  projectId: "portfolio-web-b44c7",
  storageBucket: "portfolio-web-b44c7.firebasestorage.app",
  messagingSenderId: "589085836836",
  appId: "1:589085836836:web:c3dd80e84548d0e0e2fab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);