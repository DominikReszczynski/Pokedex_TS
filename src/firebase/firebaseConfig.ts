// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPGwa76HPqg0qCKsOpwXYHj8I_O4TjE8c",
  authDomain: "pokedexts.firebaseapp.com",
  projectId: "pokedexts",
  storageBucket: "pokedexts.appspot.com",
  messagingSenderId: "188336105780",
  appId: "1:188336105780:web:727dd64a1eeb256408dd61",
  measurementId: "G-0Z31G9WHB7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);