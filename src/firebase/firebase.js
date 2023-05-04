// Import the functions you need from the SDKs you need
import { initializeApp, setLogLevel } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN4xCQC8qTNB2ymouoNn6rXn_IM4oPAC4",
  authDomain: "bookrev-54415.firebaseapp.com",
  projectId: "bookrev-54415",
  storageBucket: "bookrev-54415.appspot.com",
  messagingSenderId: "4922525399",
  appId: "1:4922525399:web:b3800c73896971298f9292"
};
setLogLevel('debug')
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const bookRef = collection(db,"books");
export default app;