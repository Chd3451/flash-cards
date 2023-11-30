import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOTZmXfR_mmRo0FXs4qAS439CfcEE7jmw",
  authDomain: "flashcards-27921.firebaseapp.com",
  projectId: "flashcards-27921",
  storageBucket: "flashcards-27921.appspot.com",
  messagingSenderId: "501593019318",
  appId: "1:501593019318:web:023a0f52f1d81d774b2717",
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = getAuth(app);

export const categories = db.collection('categories');
export const cards = db.collection('cards');
