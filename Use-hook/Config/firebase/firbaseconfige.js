import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaRF2Ccb35Ua_s0GFjexojwAGRaj3v-Yo",
  authDomain: "react-hook-6fdfe.firebaseapp.com",
  projectId: "react-hook-6fdfe",
  storageBucket: "react-hook-6fdfe.appspot.com",
  messagingSenderId: "672691511918",
  appId: "1:672691511918:web:5b45244534b6889febfc7f",
  measurementId: "G-RXQLM2VTWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default app