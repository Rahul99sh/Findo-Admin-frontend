// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdexK_vNNOpt7YyerltX5nIOtceYUlfUc",
  authDomain: "findo-bdfd7.firebaseapp.com",
  projectId: "findo-bdfd7",
  storageBucket: "findo-bdfd7.appspot.com",
  messagingSenderId: "997842520502",
  appId: "1:997842520502:web:7c19b8a63cbafb27339917",
  measurementId: "G-WEC28MRWHP"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getFirestore(firebase);
export default firebase;