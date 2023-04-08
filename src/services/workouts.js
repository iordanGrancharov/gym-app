import { db } from "../firebase/firebaseFirestore";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const collectionRef = collection(db, "workouts");

export const addWorkout = (workoutData) => {
  return addDoc(collectionRef, workoutData);
};

export const updateWorkout = (id, updatedWorkout) => {
  const workout = doc(db, "workouts", id);
  return updateDoc(workout, updatedWorkout);
};

export const deleteWorkout = (id) => {
  const workout = doc(db, "workouts", id);
  return deleteDoc(workout);
};

export const getAllWorkouts = () => {
  return getDocs(collectionRef);
};

export const getWorkout = (id) => {
  const workout = doc(db, "workouts", id);
  return getDoc(workout);
};

export const getCreatedByUserWorkouts = async (id) => {
  const q = query(collectionRef, where("_ownerId", "==", id));
  const res = await getDocs(q);
  const data = [];

  res.docs.forEach((document) =>
    data.push({ ...document.data(), doc_id: document.id })
  );
  return data;
};

export const getSavedWorkout = async (id) => {
  const q = query(collectionRef, where("users", "array-contains", id));
  const res = await getDocs(q);
  const data = [];

  res.docs.forEach((document) =>
    data.push({ ...document.data(), doc_id: document.id })
  );
  return data;
};
