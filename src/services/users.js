import { auth, googleProvider } from "../firebase/firebaseAuthentication";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

import { persistence } from "../utils/persistence";

export const signIn = async (email, password) => {
  try {
    console.log("here");
    const response = await persistence(
      signInWithEmailAndPassword(auth, email, password)
    );
    console.log("Successfull login!");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const signInWithGoogle = async () => {
  try {
    const response = await persistence(signInWithPopup(auth, googleProvider));
    console.log("Successfull login!");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = async (email, password) => {
  try {
    const response = await persistence(
      createUserWithEmailAndPassword(auth, email, password)
    );
    console.log("Successfull registration!");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async () => {
  try {
    const response = await signOut(auth);
    console.log("Successfull logout!");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
