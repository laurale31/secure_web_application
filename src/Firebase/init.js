// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUjp1A8UxShnHY-TDJoz688qeyolWmnTk",
  authDomain: "project-two-f9ba1.firebaseapp.com",
  projectId: "project-two-f9ba1",
  storageBucket: "project-two-f9ba1.appspot.com",
  messagingSenderId: "242109740728",
  appId: "1:242109740728:web:ad20507142ffe0c910e64d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db 