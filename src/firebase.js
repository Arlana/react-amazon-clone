import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDB21sDmI2iUdfCXOyztbSKmuACjT5pC3w",
    authDomain: "clone-1b94d.firebaseapp.com",
    databaseURL: "https://clone-1b94d.firebaseio.com",
    projectId: "clone-1b94d",
    storageBucket: "clone-1b94d.appspot.com",
    messagingSenderId: "813361941350",
    appId: "1:813361941350:web:57ee30405c0b514384d6a7",
    measurementId: "G-6CDBQVMFRV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }; //use these outside the file