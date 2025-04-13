import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast.success('Logged in successfully!');
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        toast.error('Incorrect password!');
      } else if (error.code === 'auth/user-not-found') {
        toast.error('No user found with this email!');
      } else {
        toast.error('Login failed: ' + error.message);
      }
    });
};

const logout = () => {
  signOut(auth)
    .then(() => {
      toast.success('Successfully logged out!');
    })
    .catch((error) => {
      toast.error('Logout failed: ' + error.message);
    });
};

export { auth, db, signIn, logout };
