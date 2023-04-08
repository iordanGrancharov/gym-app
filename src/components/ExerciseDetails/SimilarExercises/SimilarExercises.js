import ExerciseCard from "../../CreateWorkout/ExerciseCard/ExerciseCard";
import styles from "./SimilarExercises.module.css";

const SimilarExercise = ({
  similarTargetExercises,
  target,
  exerciseId,
  mode,
}) => {
  return (
    <div className={styles["container"]}>
      <h3>Similar Exercises Targeting {target}</h3>
      <div className={styles["cards-container"]}>
        {similarTargetExercises
          ?.filter((x) => x !== exerciseId)
          .slice(0, 3)
          .map((item) => (
            <ExerciseCard key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default SimilarExercise;
