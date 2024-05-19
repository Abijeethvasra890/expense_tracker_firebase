import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2zmncqCb09Si7cxU-F-knrtmnX-haTjc",
  authDomain: "expense-tracker-react-6ed23.firebaseapp.com",
  projectId: "expense-tracker-react-6ed23",
  storageBucket: "expense-tracker-react-6ed23.appspot.com",
  messagingSenderId: "945047886525",
  appId: "1:945047886525:web:32251abed209994c5435d4",
  measurementId: "G-XHPDRBH4XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();