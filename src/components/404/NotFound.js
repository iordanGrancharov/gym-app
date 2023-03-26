import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>Oooops...</h1>
        <div className={styles["img"]}></div>
        <h1 className={styles["title"]}>PAGE NOT FOUND</h1>
      </div>
    </div>
  );
};

export default NotFound;
