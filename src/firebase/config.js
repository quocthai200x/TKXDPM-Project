import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI_YHExVfqZyTTllIO5vkblQTE19ay4CA",
  authDomain: "fir-test-13760.firebaseapp.com",
  projectId: "fir-test-13760",
  storageBucket: "fir-test-13760.appspot.com",
  messagingSenderId: "823881529259",
  appId: "1:823881529259:web:84484eaf2fa546d7a284ee",
  measurementId: "G-N39KRZGRHL",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth, app };
export default firebase;
