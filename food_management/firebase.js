// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgLboqeQLUUCjykHUIyeCd3T3zE1zwHcE",
  authDomain: "food-management-de1e4.firebaseapp.com",
  projectId: "food-management-de1e4",
  storageBucket: "food-management-de1e4.appspot.com",
  messagingSenderId: "415861967846",
  appId: "1:415861967846:web:89a0080d63fcd1c949a427",
  measurementId: "G-1LPBFWBKS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };