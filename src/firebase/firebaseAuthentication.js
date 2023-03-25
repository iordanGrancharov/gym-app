import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_RAPID_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_RAPID_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_RAPID_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_RAPID_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_RAPID_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_RAPID_FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_RAPID_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_RAPID_FIREBASE_MEASURMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});
