import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0CFTobkRq_qjInR9nxx8Jt8p45Ar6s1c",
  authDomain: "fondos-86a37.firebaseapp.com",
  projectId: "fondos-86a37",
  storageBucket: "fondos-86a37.appspot.com",
  messagingSenderId: "53005027601",
  appId: "1:53005027601:web:13f2014e352538577fe4b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export {auth, db};