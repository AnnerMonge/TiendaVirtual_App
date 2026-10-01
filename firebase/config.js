// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0M9PbBPi4D_dIl3ybAWYWHWDKbHvjN5c",
  authDomain: "tiendavirtual-493a2.firebaseapp.com",
  projectId: "tiendavirtual-493a2",
  storageBucket: "tiendavirtual-493a2.firebasestorage.app",
  messagingSenderId: "138482206622",
  appId: "1:138482206622:web:1c1f8e4dfdab057e92788f",
  measurementId: "G-2YR7P5851R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);