import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBOb7rDvNkZsEJL2u8ZUrNxVkcQTV1eOcQ",
  authDomain: "mondy-assignment.firebaseapp.com",
  projectId: "mondy-assignment",
  storageBucket: "mondy-assignment.appspot.com",
  messagingSenderId: "370778500989",
  appId: "1:370778500989:web:54d5de2b48c20dea0d2614",
  measurementId: "G-VVRJS38KY5"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
