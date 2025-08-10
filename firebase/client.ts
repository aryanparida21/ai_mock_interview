// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDosu34EvzPDrmfBmaoQkt3QWla3GWnqjU",
  authDomain: "prepwise-966c1.firebaseapp.com",
  projectId: "prepwise-966c1",
  storageBucket: "prepwise-966c1.firebasestorage.app",
  messagingSenderId: "375031104858",
  appId: "1:375031104858:web:4db83a9048cd920f8f1f63",
  measurementId: "G-5HMV3R1X37"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);