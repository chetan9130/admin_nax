import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhayP87hhRlmWEGk23N3jUVUHunC5aPwk",
  authDomain: "naxshatra.firebaseapp.com",
  databaseURL: "https://naxshatra-default-rtdb.firebaseio.com",
  projectId: "naxshatra",
  storageBucket: "naxshatra.firebasestorage.app",
  messagingSenderId: "865443728028",
  appId: "1:865443728028:web:7a4f4e5b5670c5dcf3fb59",
  measurementId: "G-QHY3CM4CM5",
};

const app = initializeApp(firebaseConfig);


export const db = getDatabase(app);
export const auth = getAuth(app);
export { RecaptchaVerifier };
