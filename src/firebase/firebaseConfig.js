// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCcTM_LQxLHdZuONwVlNzfXNLJZK-QS9L8",
   authDomain: "proyectos3-46b53.firebaseapp.com",
   projectId: "proyectos3-46b53",
   storageBucket: "proyectos3-46b53.appspot.com",
   messagingSenderId: "61760496417",
   appId: "1:61760496417:web:f2c5e0095c318823e65460"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();

export const DB = getFirestore();
// export const DB = getFirestore(); 