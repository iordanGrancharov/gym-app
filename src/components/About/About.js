import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["img-container-two"]}></div>
      <div className={styles["img-container"]}></div>

      <div className={styles["info-section"]}>
        <h2>About us</h2>
        <div className={styles["section-one"]}>
          <p>
            Pain And Gain is a gym web application, that helps you being more
            healthy and organised with your life.
          </p>
        </div>
        <div className={styles["section-two"]}>
          <p>
            You can browse workouts created by our community or get a bunch of
            ideas about your daily healthy recipes.
          </p>
        </div>
        <div className={styles["section-three"]}>
          <p>
            Become a part of our community and you will be able to create
            workouts by yourself and help others who are struggling with it.
          </p>
        </div>
        <div className={styles["section-four"]}>
          <p>
            Some people want it to happen, some wish it would happen, others
            make it happen... Time is limited, start today...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
