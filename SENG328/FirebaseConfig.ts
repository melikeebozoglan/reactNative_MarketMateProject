import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx9mv7yhRFAH27n58OJYP6ikQrTy5q7CM",
  authDomain: "seng328-a0d31.firebaseapp.com",
  projectId: "seng328-a0d31",
  storageBucket: "seng328-a0d31.appspot.com",
  messagingSenderId: "608152206515",
  appId: "1:608152206515:web:f72749217ef0a01cdc84c6",
  measurementId: "G-W9PC90XV83"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);