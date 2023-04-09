import styles from "./Details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faHandHoldingHeart,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import ExerciseModal from "../../ExerciseModal/ExerciseModal";
import { WorkoutContext } from "../../../contexts/WorkoutContext";
import { ExerciseFormContext } from "../../../contexts/ExerciseFormContext";

const Details = ({
  id,
  bodyPart,
  gifUrl,
  name,
  target,
  equipment,
  mode,
  index,
}) => {
  const [modalState, setModalState] = useState(false);

  const { workoutData } = useContext(WorkoutContext);
  const { modeState } = useContext(ExerciseFormContext);

  console.log(modeState);
  const showModal = () => {
    setModalState(true);
  };

  const modalClass = modalState ? "container" : "hide";

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
        {mode === "Preview" ? (
          <div className={styles["btn-container"]}>
            <Link
              to={`/workouts/details/${workoutData.workoutId}`}
              className={styles["btn"]}
              type="button"
            >
              Back
            </Link>
          </div>
        ) : (
          <div className={styles["btn-container"]}>
            <Link
              to={`/workout/${modeState}`}
              className={styles["btn"]}
              type="button"
            >
              Back
            </Link>
            <button className={styles["btn"]} type="button" onClick={showModal}>
              {mode} Exercise
            </button>
          </div>
        )}

        <ExerciseModal
          index={index}
          className={modalClass}
          exercise={{ id, name }}
          mode={mode}
          setModalState={setModalState}
        />
      </div>
    </div>
  );
};

export default Details;
