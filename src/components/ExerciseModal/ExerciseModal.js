import { useState, useContext } from "react";
import { ExerciseFormContext } from "../../context/ExerciseFormContext";
import styles from "./ExerciseModal.module.css";
import { useNavigate } from "react-router-dom";

const AddExerciseModal = ({
  className,
  exercise,
  mode,
  setModalState,
  index,
}) => {
  const navigate = useNavigate();

  const { exercisesForm, setExercisesForm } = useContext(ExerciseFormContext);

  const [exerciseInfo, setExerciseInfo] = useState({
    index: index,
    id: exercise.id,
    name: exercise.name,
    sets: index ? Number(exercisesForm[index].sets) : 1,
    reps: index ? Number(exercisesForm[index].reps) : 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (mode === "Add") {
      setExerciseInfo({ ...exerciseInfo, [name]: value });
    }
    if (mode === "Edit") {
      setExerciseInfo({ ...exercisesForm[index], [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "Add") {
      console.log(exerciseInfo);
      setExercisesForm((state) => [...state, { ...exerciseInfo }]);
    }

    if (mode === "Edit") {
      let items = [...exercisesForm];
      let item = {
        ...items[index],
        sets: exerciseInfo.sets,
        reps: exerciseInfo.reps,
      };
      items[index] = item;
      setExercisesForm([...items]);
    }

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
            <label htmlFor="sets">Sets:</label>
            <input
              type="number"
              placeholder="Sets"
              name="sets"
              onChange={handleChange}
              value={exerciseInfo.sets}
            />
          </div>
          <div className={styles["input-field"]}>
            <label htmlFor="sets">Reps:</label>
            <input
              type="number"
              placeholder="Reps"
              name="reps"
              onChange={handleChange}
              value={exerciseInfo.reps}
            />
          </div>
          <div className={styles["btn-container"]}>
            <input
              className={styles["add-btn"]}
              type="submit"
              value={`${mode} Exercise`}
            />
            <input type="button" value="Cancel" onClick={closeModal} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExerciseModal;
