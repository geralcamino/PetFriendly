console.log('todo ok');
  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'firebase/app';
  import {getAuth, onAuthStateChanged} from 'firebase/auth';
  import {getFirestore, collection,getDocs, getDoc } from 'firebase/firestore';

  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDnpnXJsxMxn33RV2rPjGMDD1gnwDQD4z0",
    authDomain: "petfriendly-5a8d3.firebaseapp.com",
    projectId: "petfriendly-5a8d3",
    storageBucket: "petfriendly-5a8d3.appspot.com",
    messagingSenderId: "990910792060",
    appId: "1:990910792060:web:c71269018d234c4fd5a4f9"
  });


const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);







