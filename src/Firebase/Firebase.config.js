// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLTHdqj4JMTm8BXsnIolrUq3cMPm1TK8",
  authDomain: "login-with-context-api.firebaseapp.com",
  projectId: "login-with-context-api",
  storageBucket: "login-with-context-api.appspot.com",
  messagingSenderId: "247749830826",
  appId: "1:247749830826:web:78d9ab78800692611b48d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app