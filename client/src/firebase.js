// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "modern-estate.firebaseapp.com",
  projectId: "modern-estate",
  storageBucket: "modern-estate.appspot.com",
  messagingSenderId: "903102191310",
  appId: "1:903102191310:web:f2272393ecc2844919629f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);