import { auth } from "../firebase/firebaseAuthentication";
import { setPersistence, browserLocalPersistence } from "firebase/auth";

export const persistence = async (callback) => {
  return setPersistence(auth, browserLocalPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // local only. Closing the window wouldn't clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with local persistence.
      return callback();
    })
    .catch((error) => {
      // Handle Errors here.
      throw error.message;
    });
};
