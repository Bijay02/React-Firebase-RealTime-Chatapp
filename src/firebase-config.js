// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjH_96YOMaFui7PFIswD5gVdO-vjn0HSA",
  authDomain: "chatapp-ee779.firebaseapp.com",
  projectId: "chatapp-ee779",
  storageBucket: "chatapp-ee779.appspot.com",
  messagingSenderId: "643219070519",
  appId: "1:643219070519:web:947ac87e860065de6869b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);