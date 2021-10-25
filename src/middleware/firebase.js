// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "#####################",
  authDomain: "disney-clone-11d31.firebaseapp.com",
  projectId: "disney-clone-11d31",
  storageBucket: "disney-clone-11d31.appspot.com",
  messagingSenderId: "728584509740",
  appId: "#################",
  measurementId: "###############",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const moviesStorage = ref(storage, "movies");

export { app, auth, provider, moviesStorage, analytics, signInWithPopup };
export default db;
