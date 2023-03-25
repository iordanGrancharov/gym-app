import { auth, googleProvider } from "../firebase/firebaseAuthentication";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export const signIn = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("Successfull login!");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const signInWithGoogle = async (email, password) => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    console.log("Successfull login!");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
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
