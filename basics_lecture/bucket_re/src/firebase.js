// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
  appId: "1:381993601261:web:57c452d3449dd0176424e4",
  measurementId: "G-34HCL6P2K5"
};

// Initialize Firebase
// const app = 
initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();