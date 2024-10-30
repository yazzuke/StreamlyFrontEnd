// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf4S4stdhdAphd-RBmvW5Lv1mTc2FiHPo",
  authDomain: "streamly-7099c.firebaseapp.com",
  projectId: "streamly-7099c",
  storageBucket: "streamly-7099c.appspot.com",
  messagingSenderId: "276045084670",
  appId: "1:276045084670:web:8214485dad65a7e0d072af",
  measurementId: "G-3JQCRP3T90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);