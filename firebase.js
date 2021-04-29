import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC70THSQwLSOnY3r_rCs0_EADJX7MasVw",
  authDomain: "signal-clone-fb.firebaseapp.com",
  projectId: "signal-clone-fb",
  storageBucket: "signal-clone-fb.appspot.com",
  messagingSenderId: "708034129881",
  appId: "1:708034129881:web:ca02fc50724a1192e6b3c8"
};

let app;

if (firebase.apps.length ===0) {
app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };