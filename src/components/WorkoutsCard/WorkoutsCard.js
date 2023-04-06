import styles from "./WorkoutsCard.module.css";

const WorkoutsCard = ({ title, imageUrl, createdBy, className }) => {
  const style = className ? `${styles[className]}` : `${styles["card"]}`;

  return (
    <div className={style}>
      <h3>{title}</h3>
      <div className={styles["img"]}>
        <img src={imageUrl} alt="some image" />
      </div>
      <div className={styles["bonus"]}>
        <p>createdBy: {createdBy}</p>
      </div>
    </div>
  );
};

export default WorkoutsCard;
