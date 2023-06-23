// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWHV711WUOJC-SSaHq_AyVwKrADj1SQ0I",
  authDomain: "company-project-5a21e.firebaseapp.com",
  projectId: "company-project-5a21e",
  storageBucket: "company-project-5a21e.appspot.com",
  messagingSenderId: "429454398195",
  appId: "1:429454398195:web:3a9c8a71099a7c6a33dd86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();