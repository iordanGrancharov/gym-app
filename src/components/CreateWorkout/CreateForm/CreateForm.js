import { faClose, faPencil } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ExerciseFormContext } from "../../../context/ExerciseFormContext";

import styles from "./CreateForm.module.css";

const CreateForm = ({ className }) => {
  const { exercisesForm, setExercisesForm } = useContext(ExerciseFormContext);

  console.log(exercisesForm);
  const removeExercise = (index) => {
    const items = exercisesForm.filter((x, i) => i !== index);
    setExercisesForm(items);
    console.log(exercisesForm);
  };

  return (
    <div className={className}>
      <form className={styles["form"]}>
        <div className={styles["input-field"]}>
          <label htmlFor="title">Workout Title:</label>
          <input
            className={styles["field"]}
            id="title"
            type="text"
            name="title"
            placeholder="Workout Title"
          />
        </div>
        <div className={styles["input-field"]}>
          <p>Exercises:</p>
          <ul>
            {exercisesForm.map((exercise, index) => (
              <li key={index}>
                <div className={styles["ex-container"]}>
                  {exercise.name}
                  <div className={styles["icon-container"]}>
                    <FontAwesomeIcon
                      icon={faClose}
                      className={styles["icon"]}
                      onClick={() => removeExercise(index)}
                    />
                    <FontAwesomeIcon
                      icon={faPencil}
                      className={styles["icon"]}
                    />
                  </div>
                </div>

                <div className={styles["sets-reps"]}>
                  <span className={styles["text"]}>Sets:</span>
                  <span className={styles["amount"]}>{exercise.sets}</span>{" "}
                  <span className={styles["text"]}>Reps:</span>
                  <span className={styles["amount"]}>{exercise.reps}</span>
                </div>
              </li>
            ))}

            {/* <li>
              Romanian Single Leg Dumbell Deadlift
              <FontAwesomeIcon icon={faClose} className={styles["icon"]} />
            </li>
            <li>
              Barbell Squat{" "}
              <FontAwesomeIcon icon={faClose} className={styles["icon"]} />
            </li> */}
          </ul>
          <input
            type="submit"
            className={styles["btn-submit"]}
            value="Create Workout"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
