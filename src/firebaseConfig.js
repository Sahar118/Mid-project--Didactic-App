
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCUPNW3AivReSqjxFeXpwkYt6A4HiMO_CI",
    authDomain: "diagnosic-app.firebaseapp.com",
    projectId: "diagnosic-app",
    storageBucket: "diagnosic-app.appspot.com",
    messagingSenderId: "162310216237",
    appId: "1:162310216237:web:baeb1189ad6ab5579736a4",
    measurementId: "G-ZL3Z3437WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firestoreDatabase = getFirestore(app)

export default firestoreDatabase;