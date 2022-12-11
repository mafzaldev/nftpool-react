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
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const emailProvider = new EmailAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// enableIndexedDbPersistence(db)
//   .catch((err) => {
//       if (err.code == 'failed-precondition') {
//           // Multiple tabs open, persistence can only be enabled
//           // in one tab at a a time.
//           // ...
//       } else if (err.code == 'unimplemented') {
//           // The current browser does not support all of the
//           // features required to enable persistence
//           // ...
//       }
//   });

export { db, auth, googleProvider, emailProvider, facebookProvider };
