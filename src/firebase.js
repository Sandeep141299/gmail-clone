import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB1xrHlSogltmiSqEceVXgeUSuhGyr_WTo",
    authDomain: "clone-ec9c5.firebaseapp.com",
    projectId: "clone-ec9c5",
    storageBucket: "clone-ec9c5.appspot.com",
    messagingSenderId: "860842838027",
    appId: "1:860842838027:web:db77e3fe81276f15d71f0e",
    measurementId: "G-G14LHM8TZR"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);