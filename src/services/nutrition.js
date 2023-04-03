import { db } from "../firebase/firebaseFirestore";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const collectionRef = collection(db, "nutrition");

export const addNutrition = (receipt) => {
  return addDoc(collectionRef, receipt);
};

export const deleteNutrition = (id) => {
  const nutrition = doc(db, "nutrition", id);
  return deleteDoc(nutrition);
};

export const getAllNutritions = () => {
  return getDocs(collectionRef);
};

export const getNutrition = (id) => {
  const nutrition = doc(db, "nutrition", id);
  return getDoc(nutrition);
};
