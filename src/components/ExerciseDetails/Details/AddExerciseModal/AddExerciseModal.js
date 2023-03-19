import { useState, useContext } from "react";
import { ExerciseFormContext } from "../../../../context/ExerciseFormContext";
import styles from "./AddExerciseModal.module.css";
import { useNavigate } from "react-router-dom";

const AddExerciseModal = ({ className, exercise, setModalState }) => {
  const navigate = useNavigate();

  const [exerciseInfo, setExerciseInfo] = useState({
    id: exercise.id,
    name: exercise.name,
    sets: "",
    reps: "",
  });

  const { setExercisesForm } = useContext(ExerciseFormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExerciseInfo({ ...exerciseInfo, [name]: value });
    console.log(exerciseInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExercisesForm((state) => [...state, { ...exerciseInfo }]);
    navigate("/create");
  };

  const closeModal = (e) => {
    setModalState(false);
  };

  return (
    <div className={styles[className]}>
      <div>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <h5>{exercise.name}</h5>
          <div className={styles["input-field"]}>
            <input
              type="number"
              placeholder="Sets"
              name="sets"
              onChange={handleChange}
            />
          </div>
          <div className={styles["input-field"]}>
            <input
              type="number"
              placeholder="Reps"
              name="reps"
              onChange={handleChange}
            />
          </div>
          <div className={styles["btn-container"]}>
            <input
              className={styles["add-btn"]}
              type="submit"
              value="Add Exercise"
            />
            <input type="button" value="Cancel" onClick={closeModal} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExerciseModal;
