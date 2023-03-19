import styles from "./Details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faHandHoldingHeart,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import AddExerciseModal from "./AddExerciseModal/AddExerciseModal";

const Details = ({ bodyPart, gifUrl, name, target, equipment }) => {
  return (
    <div className={styles["details-container"]}>
      <div className={styles["gif-container"]}>
        <img src={gifUrl} alt={name} />
      </div>
      <div className={styles["details-section"]}>
        <h1>{name}</h1>
        <div className={styles["aditional"]}>
          <p>
            Exercises keep you strong and healthy. {name} is one of the best
            exercises to target your {target}. It will help you once and for all
            achieve your goals.
          </p>
          <div className={styles["icons"]}>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faCrosshairs}
                  className={styles["icon"]}
                />
                <label>{target}</label>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  className={styles["icon"]}
                />
                <label>{bodyPart}</label>
              </li>
              <li>
                <FontAwesomeIcon icon={faDumbbell} className={styles["icon"]} />
                <label>{equipment}</label>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["btn-container"]}>
          <Link to="/create" className={styles["btn"]} type="button">
            Back
          </Link>
          <button className={styles["btn"]} type="button">
            Add Exercise
          </button>
          <AddExerciseModal exercise={{ name: "Deadlift" }} isShown={true} />
        </div>
      </div>
    </div>
  );
};

export default Details;
