import { faClose, faPencil } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ExerciseFormContext } from "../../../contexts/ExerciseFormContext";
import { addWorkout } from "../../../services/workouts";

import styles from "./CreateForm.module.css";

const CreateForm = ({ className }) => {
  const navigate = useNavigate();

  const { exercisesForm, setExercisesForm, workoutInfo, setWorkoutInfo } =
    useContext(ExerciseFormContext);

  const { user } = useContext(AuthContext);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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

  const validateForm = (data, exercises) => {
    const errors = {};

    if (!data.title) {
      errors.title = "Title is requred!";
    }

    if (!data.description) {
      errors.description = "Description is requred!";
    }

    if (exercises.length === 0) {
      errors.exercises = "You need at least one exercise!";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validateForm(workoutInfo, exercisesForm));
    setIsSubmit(true);
  };

  useEffect(() => {
    async function submitForm() {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        const workoutData = {
          ...workoutInfo,
          exercises: [...exercisesForm],
          _ownerId: user._id,
        };

        try {
          await addWorkout(workoutData);

          setWorkoutInfo({
            title: "",
            imageUrl: "",
            description: "",
            level: "Beginner",
            exercises: [],
          });
          setExercisesForm([]);
          navigate("/");
        } catch (e) {
          console.log(e.message);
          navigate("/error");
        }
      }
    }
    submitForm();
  }, [
    formErrors,
    exercisesForm,
    setExercisesForm,
    isSubmit,
    navigate,
    user._id,
    workoutInfo,
    setWorkoutInfo,
  ]);

  return (
    <div className={className}>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <h3>Workout Info:</h3>
        <div className={styles["input-field"]}>
          <p className={styles["error"]}>{formErrors.title}</p>
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
          <p className={styles["error"]}>{formErrors.description}</p>
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
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className={styles["exercises"]}>
          <p>Exercises:</p>
          {formErrors.exercises && (
            <p className={styles["error"]}>{formErrors.exercises}</p>
          )}
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
