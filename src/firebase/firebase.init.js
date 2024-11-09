// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNZHN9-ECAvLrqMv_o2Y85UY-SuPNmmds",
  authDomain: "fir-firebase-7b268.firebaseapp.com",
  projectId: "fir-firebase-7b268",
  storageBucket: "fir-firebase-7b268.firebasestorage.app",
  messagingSenderId: "8515162155",
  appId: "1:8515162155:web:de6f4897730671e1ce1a6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;