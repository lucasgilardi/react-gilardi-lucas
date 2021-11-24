import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDNiJ_XLUpx_VZPGYE_RuryDg8_K6mrhTg",
    authDomain: "arivaci-co.firebaseapp.com",
    projectId: "arivaci-co",
    storageBucket: "arivaci-co.appspot.com",
    messagingSenderId: "374495704387",
    appId: "1:374495704387:web:ad77fb33bb5cec9fa9ebf6"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
      return firebase.firestore(app)
  }