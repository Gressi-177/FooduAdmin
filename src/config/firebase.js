import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyLuTvHQhzd5wObBQg_MeJqetqNl6666I",
    authDomain: "food-delivery-9c90e.firebaseapp.com",
    projectId: "food-delivery-9c90e",
    storageBucket: "food-delivery-9c90e.appspot.com",
    messagingSenderId: "522253257159",
    appId: "1:522253257159:web:aff1a5ee494604e737f1e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
export default app;
