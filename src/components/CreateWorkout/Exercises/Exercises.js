import { useState /*useEffect*/ } from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import styles from "./Exercises.module.css";

// import { exerciseDbOptions, fetchData } from "../../../utils/fetchData";
import { Pagination } from "@mui/material";

const Exercises = ({ classname, exercises, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfLFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfLFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <div id="exercises" className={classname}>
      <h4 className={styles["results-title"]}>Exercises:</h4>
      <div className={styles["exercises-container"]}>
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} {...exercise} />
        ))}
      </div>
      <div className={styles["pagination"]}>
        {exercises.length > exercisesPerPage && (
          <Pagination
            className={styles["custom"]}
            color={"primary"}
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
