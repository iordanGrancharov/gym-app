import { db } from "../firebase/firebaseFirestore";
import {
  collection,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const collectionRef = collection(db, "nutrition");

export const nutrition = async (id, data) => {
  const nutrition = doc(db, "nutrition", id);

  try {
    const receipe = await getDoc(nutrition);

    if (!receipe.exists()) {
      console.log(receipe.exists());
      return setDoc(nutrition, data);
    } else {
      console.log(receipe.exists());
      return updateDoc(nutrition, data);
    }
  } catch (e) {
    throw e.message;
  }
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

export const getSavedNutrition = async (id) => {
  const q = query(collectionRef, where("users", "array-contains", id));
  const res = await getDocs(q);
  const data = [];

  res.docs.forEach((document) => data.push(document.data()));
  return data;
};
