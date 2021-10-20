// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmtBGugcION7fKmkvG02qkxtpBPhOGm7A",
  authDomain: "disney-clone-11d31.firebaseapp.com",
  projectId: "disney-clone-11d31",
  storageBucket: "disney-clone-11d31.appspot.com",
  messagingSenderId: "728584509740",
  appId: "1:728584509740:web:8b2278c516823b4f2f7489",
  measurementId: "G-Q50P5SWRY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, provider, storage, analytics, signInWithPopup };
export default db;
