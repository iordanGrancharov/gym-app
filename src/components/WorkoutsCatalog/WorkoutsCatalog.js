import { useEffect, useState } from "react";
import { getAllWorkouts } from "../../services/workouts";
import { Link, useNavigate } from "react-router-dom";

import WorkoutsCard from "./WorkoutsCard/WorkoutsCard";

import { CircularProgress } from "@mui/material";
import styles from "./WorkoutsCatalog.module.css";

const WorkoutsCatalog = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        setIsLoading(true);
        const data = await getAllWorkouts();

        setWorkouts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsLoading(false);
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
          {isLoading ? (
            <CircularProgress
              style={{ color: "white" }}
              size={"4rem"}
              className={styles["loader"]}
            />
          ) : (
            workouts.map((workout) => (
              <Link to={`/workouts/details/${workout.id}`} key={workout._id}>
                <WorkoutsCard {...workout} />
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkoutsCatalog;
