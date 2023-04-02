import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>Something Went Wrong...</h1>
        <div className={styles["img"]}></div>
        <h1 className={styles["title"]}>Please Try again...</h1>
      </div>
    </div>
  );
};

export default Error;
