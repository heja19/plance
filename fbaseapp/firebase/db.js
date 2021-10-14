import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDhamb20qKklCRPcO6G7jchB8NTMhRpKv8",
    authDomain: "plance-3e3cb.firebaseapp.com",
    projectId: "plance-3e3cb",
    storageBucket: "plance-3e3cb.appspot.com",
    messagingSenderId: "819351280961",
    appId: "1:819351280961:web:fbb811394b2af12caa95c0",
    measurementId: "G-4MPHYDTH7B"
  };
  
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();