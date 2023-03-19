import styles from "./AddExerciseModal.module.css";

const AddExerciseModal = ({ exercise, isShown }) => {
  return (
    <div className={styles["container"]}>
      <div className={isShown ? styles["show"] : styles["hide"]}>
        <form>
          <h4>{exercise.name}</h4>
          <div className={styles["input-field"]}>
            <label htmlFor="sets">Sets:</label>
            <input type="number" min={1} placeholder="Sets" name="sets" />
          </div>
          <div className={styles["input-field"]}>
            <label htmlFor="reps">Reps:</label>
            <input type="number" min={1} placeholder="Reps" name="reps" />
          </div>
          <input
            className={styles["add-btn"]}
            type="submit"
            value="Add Exercise"
          />
        </form>
      </div>
    </div>
  );
};

export default AddExerciseModal;
