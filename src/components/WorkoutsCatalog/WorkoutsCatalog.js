import styles from "./WorkoutsCatalog.module.css";

import WorkoutsCard from "./WorkoutsCard/WorkoutsCard";
import { useEffect, useState } from "react";
import { getAllWorkouts } from "../../services/workouts";
import { Link, useNavigate } from "react-router-dom";

const WorkoutsCatalog = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const data = await getAllWorkouts();

        setWorkouts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (e) {
        navigate("/error");
      }
    };
    getWorkouts();
  }, [navigate]);
  return (
    <section className={styles["container"]}>
      <div className={styles["workouts-container"]}>
        <h1 className={styles["title"]}>Workouts</h1>
        <hr />
        <div className={styles["workoutsCard-container"]}>
          {workouts.map((workout) => (
            <Link to={`/workouts/details/${workout.id}`} key={workout._id}>
              <WorkoutsCard {...workout} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutsCatalog;
