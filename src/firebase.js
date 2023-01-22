import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8MkQIHK1dZBgnRQFpeHGxJI4uJfMKgvw",
    authDomain: "gcc-webapp-4db80.firebaseapp.com",
    projectId: "gcc-webapp-4db80",
    storageBucket: "gcc-webapp-4db80.appspot.com",
    messagingSenderId: "1015498538264",
    appId: "1:1015498538264:web:0641cbf9c648af63f7b26d",
    measurementId: "G-QXGR2QKQWL"
  };  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
