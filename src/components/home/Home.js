import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["container"]}>
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
        <p>Try out our free workouts and diet plans</p>
        <div className={styles["btn-container"]}>
          <a
            href="#"
            className={`${styles["nutrition-btn"]} ${styles["anchor-btn"]}`}
          >
            Nutrition
          </a>
          <a
            href="#"
            className={`${styles["workouts-btn"]} ${styles["anchor-btn"]}`}
          >
            Workouts
          </a>
        </div>
      </div>
      <div className={styles["section-three"]}>
        <h1>
          <span className={styles["learn"]}>Learn more</span>
          <span className={styles["about"]}>
            <a href="#">about</a>
          </span>

          <span className={styles["ourapp"]}>our application</span>
        </h1>
        {/* <a
          href="#"
          className={`${styles["about-btn"]} ${styles["anchor-btn"]}`}
        >
          About
        </a> */}
      </div>
    </div>
  );
};

export default Home;

// <div className={styles["container-quotes"]}>
//   <h1>Pain is temporary...</h1>
// </div>;
