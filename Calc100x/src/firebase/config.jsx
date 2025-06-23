import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBP7Vo2BahFvasasI_pj0pfdSxI8xX-BLE",
  authDomain: "i-love-calc.firebaseapp.com",
  projectId: "i-love-calc",
  storageBucket: "i-love-calc.firebasestorage.app",
  messagingSenderId: "577967102990",
  appId: "1:577967102990:web:07a71d0a54d2607c9d705f",
  measurementId: "G-XHW04NXKXS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);