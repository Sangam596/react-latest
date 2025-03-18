// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6Ls3Z-Ut_FWHCgKNjFfDKOubuBzmoKEA",
    authDomain: "sangam-merndev.firebaseapp.com",
    projectId: "sangam-merndev",
    storageBucket: "sangam-merndev.firebasestorage.app",
    messagingSenderId: "273691887606",
    appId: "1:273691887606:web:019a791c51455ab9cbe9d7",
    measurementId: "G-RGKVXGCFVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);