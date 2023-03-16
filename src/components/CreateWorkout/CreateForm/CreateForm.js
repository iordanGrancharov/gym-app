import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./CreateForm.module.css";

const CreateForm = ({ className }) => {
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
            <li>
              Bench Press
              <FontAwesomeIcon icon={faClose} className={styles["icon"]} />
            </li>
            <li>
              Romanian Single Leg Dumbell Deadlift
              <FontAwesomeIcon icon={faClose} className={styles["icon"]} />
            </li>
            <li>
              Barbell Squat{" "}
              <FontAwesomeIcon icon={faClose} className={styles["icon"]} />
            </li>
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
