// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Ganti nilai di bawah dengan data dari Firebase Console (Project Settings > General)
const firebaseConfig = {
  apiKey: "AIzaSyYOUR_API_KEY_HERE",
  authDomain: "simat-sako-lampung.firebaseapp.com",
  projectId: "simat-sako-lampung",
  storageBucket: "simat-sako-lampung.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcde12345"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
