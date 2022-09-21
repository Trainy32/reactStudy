// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBNKxTNWs7DtGmBVTIkOQE5U2vVPdBymSs",
  authDomain: "sparta-react-basic-b15c2.firebaseapp.com",
  projectId: "sparta-react-basic-b15c2",
  storageBucket: "sparta-react-basic-b15c2.appspot.com",
  messagingSenderId: "381993601261",
  appId: "1:381993601261:web:0dbd0dece5be448c6424e4",
  measurementId: "G-CXK0M705EJ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app)

export default app
