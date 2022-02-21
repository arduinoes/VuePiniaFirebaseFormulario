import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvGfqa-J8qjWX5Cc8R1Ku8BPY2woEh1ak",
    authDomain: "museo-f7dc2.firebaseapp.com",
    databaseURL: "https://museo-f7dc2.firebaseio.com",
    projectId: "museo-f7dc2",
    storageBucket: "museo-f7dc2.appspot.com",
    messagingSenderId: "761451708850",
    appId: "1:761451708850:web:40858aa8e7419d164ba4ab",
    measurementId: "G-45VHXFWMEE"
  };

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth();

export { db, auth, storage };
