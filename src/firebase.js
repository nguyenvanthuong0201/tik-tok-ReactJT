import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjnCLGuAzUh6y-yywSoEY183hyQy7Aeh0",
    authDomain: "tik-tok-clone-5a913.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-5a913.firebaseio.com",
    projectId: "tik-tok-clone-5a913",
    storageBucket: "tik-tok-clone-5a913.appspot.com",
    messagingSenderId: "132661824870",
    appId: "1:132661824870:web:f49f790f5c6840b8548ca7",
    measurementId: "G-MGL5XVJYFZ"
  };
  // npm install firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  export default db;