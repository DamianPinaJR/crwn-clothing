// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb6O7iBhaHSNRrs3ltfbRPwqTmULS_qMY",
  authDomain: "crwn-clothing-db-75905.firebaseapp.com",
  projectId: "crwn-clothing-db-75905",
  storageBucket: "crwn-clothing-db-75905.appspot.com",
  messagingSenderId: "670409208896",
  appId: "1:670409208896:web:e44cdf273fdef88e4c1ba5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
  });

export const auth = getAuth();
export const google = () => signInWithPopup(auth, provider)
