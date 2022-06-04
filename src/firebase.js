// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWtpFipBlBKMZ0R2T-jLxe8xbyXzGF-yo",
  authDomain: "taller-react-e6c23.firebaseapp.com",
  projectId: "taller-react-e6c23",
  storageBucket: "taller-react-e6c23.appspot.com",
  messagingSenderId: "919439499280",
  appId: "1:919439499280:web:8bc76b19a2ea389de6ea95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}

