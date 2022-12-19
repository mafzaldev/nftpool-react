import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

import { GoogleAuthProvider, getAuth, EmailAuthProvider, FacebookAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDAok-MwHIaPoMwlFN3gEk7-LlalvV0jPs",
    authDomain: "nft-pool.firebaseapp.com",
    projectId: "nft-pool",
    storageBucket: "nft-pool.appspot.com",
    messagingSenderId: "415191724434",
    appId: "1:415191724434:web:f719acf4b3eee83149114b"
  } ;

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const emailProvider = new EmailAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, emailProvider, facebookProvider };
