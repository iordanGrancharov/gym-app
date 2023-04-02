import { createContext, useState } from "react";

export const WorkoutContext = createContext({});

export const WorkoutProvider = ({ children }) => {
  const [workoutData, setWorkoutData] = useState({});

  const context = { workoutData, setWorkoutData };
  return (
    <WorkoutContext.Provider value={context}>
      {children}
    </WorkoutContext.Provider>
  );
};
