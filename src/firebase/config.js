// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjr_Qig8loySMdMLXv1m8VMc7PHoSPl0g",
  authDomain: "lasmartblind.firebaseapp.com",
  projectId: "lasmartblind",
  storageBucket: "lasmartblind.appspot.com",
  messagingSenderId: "132256990420",
  appId: "1:132256990420:web:d70acc6c3fefacd802a741",
  measurementId: "G-74ZE7F9SWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);
const db = getFirestore(app);

export { projectFirestore, projectStorage, db };
