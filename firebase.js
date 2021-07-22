import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAnQINImEuPrw4kjZLSuL2OT_9o7bOV1xo",
    authDomain: "facebook-clone-aaa42.firebaseapp.com",
    projectId: "facebook-clone-aaa42",
    storageBucket: "facebook-clone-aaa42.appspot.com",
    messagingSenderId: "405483841151",
    appId: "1:405483841151:web:e1e78ad0ad5a523b17014a"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db,storage};