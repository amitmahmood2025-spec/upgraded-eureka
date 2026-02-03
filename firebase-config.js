// firebase-config.js
// ==================
// CORE FIREBASE INITIALIZATION (PRODUCTION SAFE)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js";

//  REPLACE WITH YOUR REAL FIREBASE CONFIG


const firebaseConfig = {
  apiKey: "AIzaSyATQiZKadnZ5-sdZun4HMf6PQv9cPGp64k",
  authDomain: "billobattlehub.firebaseapp.com",
  projectId: "billobattlehub",
  storageBucket: "billobattlehub.firebasestorage.app",
  messagingSenderId: "1077370113383",
  appId: "1:1077370113383:web:ea7adbd8175f3cc13eb3c2",
  measurementId: "G-HZ0T6F5X7P"
};


// Init
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
