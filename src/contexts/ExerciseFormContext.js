import { createContext, useState } from "react";

export const ExerciseFormContext = createContext([]);

export const ExerciseFormProvider = ({ children }) => {
  const [exercisesForm, setExercisesForm] = useState([]);

  const [workoutInfo, setWorkoutInfo] = useState({
    title: "",
    imageUrl: "",
    description: "",
    level: "",
    exercises: [],
  });

  const context = {
    exercisesForm,
    setExercisesForm,
    workoutInfo,
    setWorkoutInfo,
  };
  return (
    <ExerciseFormContext.Provider value={context}>
      {children}
    </ExerciseFormContext.Provider>
  );
};
