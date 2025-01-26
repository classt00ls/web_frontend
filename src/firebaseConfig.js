// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Configuración de tu proyecto Firebase (copiar desde Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyBLpMbXsLsRnO9MTHY3ghS48jjYSqnupwo",
    authDomain: "mealmoti-1632c.firebaseapp.com",
    projectId: "mealmoti-1632c",
    storageBucket: "mealmoti-1632c.firebasestorage.app",
    messagingSenderId: "557964531752",
    appId: "1:557964531752:web:ec97e3bc099a5dac44fd1d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Proveedor de Google
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };