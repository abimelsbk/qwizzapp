import { getApps, getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJ9HcdFos8Bx5JqRq9ABGJqhC8E0dNXZQ",
  authDomain: "quizcraft-app.firebaseapp.com",
  projectId: "quizcraft-app",
  storageBucket: "quizcraft-app.appspot.com",
  messagingSenderId: "583582839425",
  appId: "1:583582839425:web:c5a0b0e6d777f5f2f6c63f"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);