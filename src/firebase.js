import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAz-yv8tvaq0Fski0plQFyhPpsJZPpf2cA",
    authDomain: "app-auth-vue2.firebaseapp.com",
    databaseURL: "https://app-auth-vue2-default-rtdb.firebaseio.com",
    projectId: "app-auth-vue2",
    storageBucket: "app-auth-vue2.appspot.com",
    messagingSenderId: "537873661905",
    appId: "1:537873661905:web:3eef2cb5870534e920eaf0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export { db, auth }
