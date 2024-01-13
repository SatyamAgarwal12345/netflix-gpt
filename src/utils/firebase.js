// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHRYNkrh4VGIe7KHx9GJoBfYm6SQdLLTQ",
  authDomain: "netflixgpt-8028c.firebaseapp.com",
  projectId: "netflixgpt-8028c",
  storageBucket: "netflixgpt-8028c.appspot.com",
  messagingSenderId: "321135922686",
  appId: "1:321135922686:web:acaf470beb154cf0ff44af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();