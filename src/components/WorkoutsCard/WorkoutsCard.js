import { Link } from "react-router-dom";
import styles from "./WorkoutsCard.module.css";

const WorkoutsCard = ({
  title,
  imageUrl,
  createdBy,
  className,
  doc_id,
  mode,
}) => {
  const style = className ? `${styles[className]}` : `${styles["card"]}`;

  return (
    <Link
      to={
        mode === "fromCatalog"
          ? `/workouts/details/${doc_id}`
          : `/profile/workouts/details/${doc_id}`
      }
    >
      <div className={style}>
        <h3>{title}</h3>

        <div className={styles["img"]}>
          <img src={imageUrl} alt={title} />
        </div>

        <div className={styles["bonus"]}>
          <p>createdBy: {createdBy}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutsCard;
