// Import Firebase SDK (Modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc, updateDoc, onSnapshot, query, orderBy, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Konfigurasi Firebase yang diambil dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCg3eqP5cg_ENDopZn00NK9aoogAdoFROM", // Ganti dengan API Key yang ada di gambar
  authDomain: "sortiq-a9449.firebaseapp.com",
  projectId: "sortiq-a9449",
  storageBucket: "sortiq-a9449.firebasestorage.app",
  messagingSenderId: "758082387378",
  appId: "1:758082387378:web:93f1fdea4b5cdf5319f8ab"
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