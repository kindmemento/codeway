// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDstTLfIXpNqoZJqStXmb7YPPPMRHrwDv0",
  authDomain: "cortex-config.firebaseapp.com",
  projectId: "cortex-config",
  storageBucket: "cortex-config.appspot.com",
  messagingSenderId: "370348194036",
  appId: "1:370348194036:web:a438b70709fcd6467cc6a1",
  measurementId: "G-DRSCNC93E1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };