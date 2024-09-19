// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWkhrpQEwsQG7xnX0P0GqV0yp0EbFwtq4",
  authDomain: "hotel-460ce.firebaseapp.com",
  projectId: "hotel-460ce",
  storageBucket: "hotel-460ce.appspot.com",
  messagingSenderId: "91035176076",
  appId: "1:91035176076:web:76c883ae1d876329db7fa9",
  measurementId: "G-GD60CFEVMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app);
const db = getFirestore(app);
export {auth, db}