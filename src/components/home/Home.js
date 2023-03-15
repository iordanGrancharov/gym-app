import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["section-one"]}>
        <div className={`${styles["slide"]} ${styles["slide-1"]}`}></div>
        <div className={`${styles["slide"]} ${styles["slide-2"]}`}></div>
        <div className={`${styles["slide"]} ${styles["slide-3"]}`}></div>
      </div>
      <div className={styles["section-two"]}>
        <h1>
          You've always wanted to change your lifestyle, but don't know where to
          start?
        </h1>
        <p>Try out our free workouts and healthy recipes!</p>
        <div className={styles["btn-container"]}>
          <Link
            to="/nutrition"
            className={`${styles["nutrition-btn"]} ${styles["anchor-btn"]}`}
          >
            Nutrition
          </Link>
          <Link
            to="/workouts"
            className={`${styles["workouts-btn"]} ${styles["anchor-btn"]}`}
          >
            Workouts
          </Link>
        </div>
      </div>
      <div className={styles["section-three"]}>
        <h1>
          <span className={styles["learn"]}>Learn more</span>
          <span className={styles["about"]}>
            <Link to="/about">about</Link>
          </span>

          <span className={styles["ourapp"]}>our application</span>
        </h1>
      </div>
    </section>
  );
};

export default Home;
