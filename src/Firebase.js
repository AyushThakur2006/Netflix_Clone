import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBdv2UQRaTTJBVMDH__xSkOg4Rws7xZxjE",
  authDomain: "netflixclone-2b983.firebaseapp.com",
  projectId: "netflixclone-2b983",
  storageBucket: "netflixclone-2b983.firebasestorage.app",
  messagingSenderId: "827586583153",
  appId: "1:827586583153:web:9025d877c62c77f59cd9d0",
  measurementId: "G-PRWFEKN6V2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };
  
  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };
const logout = () => {
  return signOut(auth).then(() => toast.info("Logged out."));
};

export { auth, db, logout, signIn, signUp };
