import { db } from "../firebase/firebaseFirestore";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
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

export const getAll = () => {
  return getDocs(collectionRef);
};

export const getWorkout = (id) => {
  const workout = doc(db, "workouts", id);
  return getDoc(workout);
};
