import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAzpQEqbYoZW8a9qvmiwR9QJnbO1FxbFo",
  authDomain: "cinemart-ticket-booking.firebaseapp.com",
  projectId: "cinemart-ticket-booking",
  storageBucket: "cinemart-ticket-booking.firebasestorage.app",
  messagingSenderId: "274952909081",
  appId: "1:274952909081:web:5341ac23f179fd521a9588",
  measurementId: "G-9W81QG5WZ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
