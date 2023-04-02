import { auth, googleProvider } from "../firebase/firebaseAuthentication";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import {
  createUserDocumentFromAuth,
  getUserData,
} from "../firebase/firebaseFirestore";

import { db } from "../firebase/firebaseFirestore";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";

export const signIn = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("Successfull login!");
    return response;
  } catch (error) {
    throw error.message;
  }
};

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

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
    throw error.message;
  }
};

export const logout = async () => {
  try {
    const response = await signOut(auth);
    console.log("Successfull logout!");
    return response;
  } catch (error) {
    throw error.message;
  }
};

export const createUser = async (auth) => {
  const response = await createUserDocumentFromAuth(auth);

  return response;
};

export const getUser = async (auth) => {
  const response = await getUserData(auth);
  return response;
};

export const updateUser = (id, updatedUser) => {
  const user = doc(db, "users", id);
  return updateDoc(user, updatedUser);
};

export const deleteWorkout = (id) => {
  const user = doc(db, "users", id);
  return deleteDoc(user);
};
