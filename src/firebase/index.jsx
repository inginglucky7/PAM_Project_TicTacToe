// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword, connectAuthEmulator} from 'firebase/auth';
import {getFirestore, collection, getDocs, onSnapshot} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDjGA6V-RDVTGenSI0lXDVgz0l-rKT-6pA",
    authDomain: "pam-tictactoe.firebaseapp.com",
    projectId: "pam-tictactoe",
    storageBucket: "pam-tictactoe.appspot.com",
    messagingSenderId: "380267568031",
    appId: "1:380267568031:web:e2464b4d49a4c0420e7baa",
    measurementId: "G-5LHSZ1CDR4"
});
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://127.0.0.1:5173/");
// Initialize Firebase
const db = getFirestore(firebaseApp);
onAuthStateChanged(auth, user => {
    if(user != null){
        syncData(user);
    } else {
        console.log("No user");
    }
});

function syncData(user) {
    const messageRef = collection(db, `messages/${user.uid}`);
    onSnapshot(messageRef, snapshot => {
        const messages = snapshot.docs.map(doc => doc.data());
    });
}