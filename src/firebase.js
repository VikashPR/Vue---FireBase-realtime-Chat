import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCfPMeO_7MkuEUemkSRF5sWqDrCWQ1VjdY",
    authDomain: "fireship-tut-70cce.firebaseapp.com",
    projectId: "fireship-tut-70cce",
    storageBucket: "fireship-tut-70cce.appspot.com",
    messagingSenderId: "539545430093",
    appId: "1:539545430093:web:56615af0931e9d8a051404"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();



