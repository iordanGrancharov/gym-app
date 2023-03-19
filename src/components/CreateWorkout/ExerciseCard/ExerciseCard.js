import styles from "./ExerciseCard.module.css";
import { Link } from "react-router-dom";

const ExerciseCard = ({ bodyPart, gifUrl, id, name, target }) => {
  return (
    <Link to={`/details/add/${id}`} className={styles["card"]}>
      <div className={styles["gif-container"]}>
        <img src={gifUrl} alt={name} loading="lazy" />
      </div>
      <div className={styles["exercise-info"]}>
        <p className={`${styles["info"]} ${styles["bodypart"]}`}>{bodyPart}</p>
        <p className={`${styles["info"]} ${styles["target"]}`}>{target}</p>
      </div>
      <div className={styles["title"]}>
        <h6>{name}</h6>
      </div>
    </Link>
  );
};

export default ExerciseCard;
