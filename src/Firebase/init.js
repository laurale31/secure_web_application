// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKSPkv4HE9m1juYbYP3XfzEGUMYIhek8M",
  authDomain: "al-project-one-firebase.firebaseapp.com",
  projectId: "al-project-one-firebase",
  storageBucket: "al-project-one-firebase.appspot.com",
  messagingSenderId: "79031437511",
  appId: "1:79031437511:web:2061e63c38d3d770ae16e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db 