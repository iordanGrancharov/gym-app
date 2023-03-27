import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
  login_hint: "user@example.com",
});

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // local only. Closing the window wouldn't clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with local persistence.
    console.log("Local Persistent enabled!");
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error.message);
  });

//doc instance of document
// getDoc, setDoc - using data of documents

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocumentRef = doc(db, "users", userAuth.uid);
  console.log("here");
  const userData = await getDoc(userDocumentRef);

  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log("there");
    try {
      await setDoc(userDocumentRef, {
        displayName,
        email,
        createdAt,
        personalInfo: {
          avatar:
            "https://dfge.de/wp-content/uploads/blank-profile-picture-973460_640.png",
          workouts: [],
          nutrition: [],
          weight: "",
          height: "",
          experience: "",
          gymType: "",
        },
      });
    } catch (e) {
      console.log("error creating the user", e.message);
    }
  }

  return userDocumentRef;
};
