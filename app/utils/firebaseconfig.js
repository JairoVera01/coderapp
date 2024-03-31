// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBdUBh4eipVbsTJjgGN2bt7mW4NZXA_Tk",
  authDomain: "next-coderapp.firebaseapp.com",
  projectId: "next-coderapp",
  storageBucket: "next-coderapp.appspot.com",
  messagingSenderId: "892151464023",
  appId: "1:892151464023:web:22b31cb548ecf02f252312",
  measurementId: "G-FPV0BP36QS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
