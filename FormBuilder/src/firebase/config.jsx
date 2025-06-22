import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCGS-cGwvXbAOq88oZRE9pf7vHvXQscxw",
  authDomain: "dndformbuilder.firebaseapp.com",
  projectId: "dndformbuilder",
  storageBucket: "dndformbuilder.firebasestorage.app",
  messagingSenderId: "614317441828",
  appId: "1:614317441828:web:b239df1bf41021f50ae9b1",
  measurementId: "G-RHYS7LK7ZM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);