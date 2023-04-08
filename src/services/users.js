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

import { deleteUser } from "firebase/auth";

import { db } from "../firebase/firebaseFirestore";
import { updateDoc, deleteDoc, getDoc, doc } from "firebase/firestore";

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

export const getUserById = async (id) => {
  const user = doc(db, "users", id);
  return getDoc(user);
};

export const updateUser = (id, updatedUser) => {
  const user = doc(db, "users", id);
  return updateDoc(user, updatedUser);
};

export const deleteUserFirestore = (id) => {
  const user = doc(db, "users", id);
  return deleteDoc(user);
};

export const deleteUserFromAuth = (user) => {
  return deleteUser(user);
};
