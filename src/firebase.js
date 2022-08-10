import firebase from "firebase/compat/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNp8uNXRx8PPbGKHMopz3mqZX-rF6-zq8",
  authDomain: "reservia-c4dd4.firebaseapp.com",
  projectId: "reservia-c4dd4",
  storageBucket: "reservia-c4dd4.appspot.com",
  messagingSenderId: "798774961246",
  appId: "1:798774961246:web:fbe46ff8ca205f0dfc00cf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
// const provider = new firebase.auth.GoogleAuthProvider();
connectAuthEmulator(auth, "http://localhost:9099");
// const storage = firebase.storage();

export { auth };
// export default db;
