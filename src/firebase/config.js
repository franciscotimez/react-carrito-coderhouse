// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS2ga1UPHL2PKTYBG1gPXcAlw86cGF44k",
  authDomain: "react-carrito-coderhouse.firebaseapp.com",
  projectId: "react-carrito-coderhouse",
  storageBucket: "react-carrito-coderhouse.appspot.com",
  messagingSenderId: "666354492942",
  appId: "1:666354492942:web:df2a50d28672231cb5fe5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)