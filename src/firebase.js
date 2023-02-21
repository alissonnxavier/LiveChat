import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZtzjBoT3hnx_E1ErEZTlnm1g9OQEyNLE",
  authDomain: "chat-a33ee.firebaseapp.com",
  projectId: "chat-a33ee",
  storageBucket: "chat-a33ee.appspot.com",
  messagingSenderId: "495347607911",
  appId: "1:495347607911:web:51aba8cdae9401d4a767c2"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();