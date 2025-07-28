import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4-y8AOrpk11RcUmFW5Dm4g2u7ZWEqyDk",
  authDomain: "andid-hryemen.firebaseapp.com",
  projectId: "andid-hryemen",
  storageBucket: "andid-hryemen.appspot.com",
  messagingSenderId: "279785756549",
  appId: "1:279785756549:web:cbb4d2366c890486dad6ec",
  measurementId: "G-KQFFKXEB37"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);