// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Q4qTuLQpWu6rwvmoPqn4kK5FzQPVPN8",
  authDomain: "say-what-d89df.firebaseapp.com",
  projectId: "say-what-d89df",
  storageBucket: "say-what-d89df.appspot.com",
  messagingSenderId: "1095378776918",
  appId: "1:1095378776918:web:da5876759cf09f51ee5cf7",
  measurementId: "G-74466ZE208",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
