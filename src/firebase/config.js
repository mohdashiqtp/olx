import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBlMZaWb4krFyyzOdcK0_coe9lFFYsIAhg",
    authDomain: "olx-clone-76df4.firebaseapp.com",
    projectId: "olx-clone-76df4",
    storageBucket: "olx-clone-76df4.appspot.com",
    messagingSenderId: "1065935522665",
    appId: "1:1065935522665:web:00198377766d97882fcbf8",
    measurementId: "G-TM2E5QV5B8"
  };

  export default firebase.initializeApp(firebaseConfig);