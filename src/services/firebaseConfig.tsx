
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAYzDUUKxd3xaGTdthpHJ1jyCCjrlViuI",
  authDomain: "keepalive-97e77.firebaseapp.com",
  projectId: "keepalive-97e77",
  storageBucket: "keepalive-97e77.appspot.com",
  messagingSenderId: "1035818098507",
  appId: "1:1035818098507:web:4d4c5dbf6bfea73a23d2ce"
};

export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);