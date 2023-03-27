import { faClose, faPencil } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ExerciseFormContext } from "../../../contexts/ExerciseFormContext";

import styles from "./CreateForm.module.css";

const CreateForm = ({ className }) => {
  const { exercisesForm, setExercisesForm, workoutInfo, setWorkoutInfo } =
    useContext(ExerciseFormContext);

  const { user } = useContext(AuthContext);

  const removeExercise = (index) => {
    if (
      window.confirm(
        `Are u sure u want to delete ${exercisesForm[index].name}?`
      )
    ) {
      const items = exercisesForm.filter((x, i) => i !== index);
      setExercisesForm(items);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutInfo({
      ...workoutInfo,
      [name]: value,
    });
    // setWorkoutInfo({ ...workoutInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const workoutData = {
      ...workoutInfo,
      exercises: [...exercisesForm],
      _ownerId: user.uid,
    };

    console.log(workoutData);
  };

  return (
    <div className={className}>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <h3>Workout Info:</h3>
        <div className={styles["input-field"]}>
          <input
            className={styles["field"]}
            id="title"
            type="text"
            name="title"
            placeholder="Workout Title"
            onChange={handleChange}
            value={workoutInfo.title}
          />
        </div>
        <div className={styles["input-field"]}>
          <input
            className={styles["field"]}
            id="imageUrl"
            type="text"
            name="imageUrl"
            placeholder="ImageURL"
            onChange={handleChange}
            value={workoutInfo.imageUrl}
          />
        </div>
        <div className={styles["input-field"]}>
          <textarea
            className={styles["field"]}
            id="description"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={workoutInfo.description}
          />
        </div>
        <div className={styles["input-field"]}>
          <select
            name="level"
            className={styles["field"]}
            placeholder="Select level:"
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className={styles["exercises"]}>
          <p>Exercises:</p>
          <ul>
            {exercisesForm.map((exercise, index) => (
              <li key={index}>
                <div className={styles["ex-container"]}>
                  <div className={styles["sets-reps"]}>
                    {exercise.name}
                    <div>
                      <span className={styles["text"]}>Sets:</span>
                      <span className={styles["amount"]}>
                        {exercise.sets}
                      </span>{" "}
                      <span className={styles["text"]}>Reps:</span>
                      <span className={styles["amount"]}>{exercise.reps}</span>
                    </div>
                  </div>
                  <div className={styles["icon-container"]}>
                    <FontAwesomeIcon
                      icon={faClose}
                      className={styles["icon"]}
                      onClick={() => removeExercise(index)}
                    />
                    <Link to={`/details/edit/${exercise.id}/${index}`}>
                      <FontAwesomeIcon
                        icon={faPencil}
                        className={styles["icon"]}
                      />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
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
