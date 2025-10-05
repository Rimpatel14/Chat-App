// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4bRmRvp3NtAT1H4xgClRfw9IhPHXl7Dw",
  authDomain: "chat-app-gs-288b9.firebaseapp.com",
  projectId: "chat-app-gs-288b9",
  storageBucket: "chat-app-gs-288b9.firebasestorage.app",
  messagingSenderId: "1023171371943",
  appId: "1:1023171371943:web:3a97517080c46ec9190c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth