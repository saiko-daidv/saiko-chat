import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAV5kQqrgYAh_snm3IGhgzEznvRgiHQt70",
  authDomain: "saiko-react-firebase-chat.firebaseapp.com",
  projectId: "saiko-react-firebase-chat",
  storageBucket: "saiko-react-firebase-chat.appspot.com",
  messagingSenderId: "939642709502",
  appId: "1:939642709502:web:7dcc6631afd622a2d74caf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)