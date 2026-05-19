// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ3qvI2gXaR8vzlh_i3wl-hkmq1sofgMk",
  authDomain: "medicinebymanny.firebaseapp.com",
  projectId: "medicinebymanny",
  storageBucket: "medicinebymanny.firebasestorage.app",
  messagingSenderId: "1057116904252",
  appId: "1:1057116904252:web:2d17d6ca6bd2cfd54f9c39",
  measurementId: "G-WM7NW97L8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const createUserWithGoogle = () => {
return signInWithPopup(auth, googleProvider)
}
export { createUserWithEmailAndPassword, signInWithEmailAndPassword }
