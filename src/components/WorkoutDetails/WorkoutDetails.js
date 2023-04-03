import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deleteWorkout, getWorkout } from "../../services/workouts";
import { WorkoutContext } from "../../contexts/WorkoutContext";
import { AuthContext } from "../../contexts/AuthContext";

import { CircularProgress } from "@mui/material";
import styles from "./WorkoutDetails.module.css";
import { updateUser } from "../../services/users";

const WorkoutDetails = () => {
  const navigate = useNavigate();
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState({});
  const { setWorkoutData } = useContext(WorkoutContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getWorkout(workoutId);
        setWorkout(data.data());
        setWorkoutData({ ...data.data(), workoutId: workoutId });
      } catch (e) {
        navigate("/error");
      }
    };
    getData();
  }, [workoutId, navigate, setWorkoutData]);

  const deleteHandler = async () => {
    try {
      await deleteWorkout(workoutId);
      navigate("/workouts");
    } catch (e) {
      navigate("/error");
    }
  };

  const editHandler = () => {
    navigate("/workout/update");
  };

  const handleBack = () => {
    navigate("/workouts");
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["image-container"]}>
        <img src={workout.imageUrl} alt="not valid" />
      </div>
      <div className={styles["workout-info"]}>
        <h1>{workout.title}</h1>
        <div className={styles["owner"]}>
          <p>createdBy:</p>
          <h5>{workout.createdBy}</h5>
        </div>
        <p className={styles["desc"]}>Description: {workout.description}</p>
        <table className={styles["table"]}>
          <tbody>
            <tr className={styles["table-headers"]}>
              <td className={styles["special"]}>Exercise:</td>
              <td>Sets:</td>
              <td>Reps:</td>
              <td>Weight:</td>
            </tr>
            {!workout.exercises ? (
              <CircularProgress
                style={{ color: "white" }}
                size={"4rem"}
                className={styles["loader"]}
              />
            ) : (
              workout?.exercises.map((exercise) => (
                <tr key={exercise.id}>
                  <td className={styles["special"]}>
                    <Link to={`/details/exercise/${exercise.id}`}>
                      {exercise.name}
                    </Link>
                  </td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                  <td>{exercise.weight}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {user._id === workout._ownerId && (
          <div className={styles["btn-container"]}>
            <button onClick={handleBack}>Back</button>
            <div className={styles["btn-workout"]}>
              <button onClick={deleteHandler}>Delete Workout</button>
              <button onClick={editHandler}>Edit Workout</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutDetails;
