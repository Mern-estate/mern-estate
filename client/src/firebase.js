// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2dcd6.firebaseapp.com",
  projectId: "mern-estate-2dcd6",
  storageBucket: "mern-estate-2dcd6.firebasestorage.app",
  messagingSenderId: "604616099630",
  appId: "1:604616099630:web:1a805eba19d58da0e79cbf"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

