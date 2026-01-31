// Import Firebase SDK (Modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc, updateDoc, onSnapshot, query, orderBy, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Konfigurasi Firebase yang diambil dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBQG1n-hPzKGoQH1uboJ7Ee9ec-fH_pFJo",
  authDomain: "sortiq-platform.firebaseapp.com",
  projectId: "sortiq-platform",
  storageBucket: "sortiq-platform.firebasestorage.app",
  messagingSenderId: "730072323724",
  appId: "1:730072323724:web:748ff32269337b8d998da9"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Bagikan fitur ke file lain agar bisa digunakan di seluruh aplikasi
export { 
    auth, db, 
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
    collection, addDoc, getDocs, doc, setDoc, getDoc, updateDoc, 
    onSnapshot, query, orderBy, where, serverTimestamp 
};
