import { createContext, useState } from "react";

export const ExerciseFormContext = createContext([]);

export const ExerciseFormProvider = ({ children }) => {
  const [exercisesForm, setExercisesForm] = useState([]);
  const [workoutInfo, setWorkoutInfo] = useState({});
  const [imageUploadState, setImageUploadState] = useState(true);
  const [image, setImage] = useState(null);
  const [modeState, setModeState] = useState("");

  const context = {
    modeState,
    setModeState,
    imageUploadState,
    setImageUploadState,
    exercisesForm,
    setExercisesForm,
    workoutInfo,
    setWorkoutInfo,
    image,
    setImage,
  };
  return (
    <ExerciseFormContext.Provider value={context}>
      {children}
    </ExerciseFormContext.Provider>
  );
};
