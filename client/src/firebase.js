// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8d23f.firebaseapp.com",
  projectId: "mern-estate-8d23f",
  storageBucket: "mern-estate-8d23f.firebasestorage.app",
  messagingSenderId: "95617465677",
  appId: "1:95617465677:web:6f3bb0eec623352e6a8b04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);