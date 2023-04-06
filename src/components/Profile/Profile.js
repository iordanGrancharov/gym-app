import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  getCreatedByUserWorkouts,
  getSavedWorkout,
} from "../../services/workouts";
import WorkoutsCard from "../WorkoutsCard/WorkoutsCard";

import { CircularProgress } from "@mui/material";
import styles from "./Profile.module.css";
import NutritionCard from "../NutritionCard/NutritionCard";
import { getSavedNutrition } from "../../services/nutrition";
import { Link } from "react-router-dom";

const Profile = () => {
  const [workoutToDisplay, setWorkoutsToDisplay] = useState(null);
  const [nutritionToDisplay, setNutritionToDisplay] = useState(null);
  const [workoutsWanted, setWorkoutsWanted] = useState(false);
  const [nutritionWanted, setNutritionWanted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const getCreated = async () => {
    try {
      setIsLoading(true);
      const workouts = await getCreatedByUserWorkouts(user._id);

      if (workouts.length > 0) {
        setWorkoutsToDisplay(workouts);
      } else {
        setWorkoutsToDisplay(null);
      }
      setNutritionWanted(false);
      setWorkoutsWanted(true);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getSaved = async () => {
    try {
      setIsLoading(true);
      const workouts = await getSavedWorkout(user._id);
      console.log(workouts);
      if (workouts.length > 0) {
        setWorkoutsToDisplay(workouts);
      } else {
        setWorkoutsToDisplay(null);
      }
      setNutritionWanted(false);
      setWorkoutsWanted(true);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getMyNutrition = async () => {
    try {
      setIsLoading(true);
      const nutriotions = await getSavedNutrition(user._id);
      console.log(nutriotions);
      if (nutriotions.length > 0) {
        setNutritionToDisplay(nutriotions);
      } else {
        setNutritionToDisplay(null);
      }

      setNutritionWanted(true);
      setWorkoutsWanted(false);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  // MAKE THE FILTER LOGIC
  // WRITE THE QUERIES
  return (
    <section className={styles["container"]}>
      <div className={styles["profile"]}>
        <div className={styles["info"]}>
          <div className={styles["img-container"]}>
            <img
              src={user.personalInfo.avatar}
              alt={user.personalInfo.username}
            />
          </div>
          <div className={styles["user-info"]}>
            <h4>
              {user.personalInfo.username
                ? user.personalInfo.username
                : "Йордан Грънчаров"}
            </h4>
            <h6>{user.email}</h6>

            <h5>
              Gym Type:{" "}
              <span>
                {user.personalInfo.gymType ? user.personal.info : "Bodybuilder"}
              </span>
            </h5>
            <h6>Age: {user.personalInfo.age ? user.personalInfo.age : "23"}</h6>

            <div className={styles["weight-height"]}>
              <p>
                weight:{" "}
                <span>
                  {user.personalInfo.weight ? user.personalInfo.weight : "80"}kg
                </span>
              </p>
              <p>
                height:{" "}
                <span>
                  {user.personalInfo.weight ? user.personalInfo.weight : "180"}
                  cm
                </span>
              </p>
            </div>
            <p className={styles["exp"]}>
              Gym Experience:{" "}
              <span>
                {user.personalInfo.experience
                  ? user.personalInfo.experience
                  : "6 years"}
              </span>
            </p>
            <button className={styles["update-btn"]}>Update Profile</button>
            <div className={styles["since"]}>
              <p>
                User since: <span>{user.createdAt}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles["options"]}>
          <div className={styles["btn-container"]}>
            <button onClick={getCreated}>Created Workouts</button>
            <button onClick={getMyNutrition}>My Nutrition</button>
            <button onClick={getSaved}>Saved Workouts</button>
          </div>
          <hr />
          <h4 className={styles["header"]}>
            {workoutsWanted ? "Workouts:" : nutritionWanted ? "Nutrition:" : ""}
          </h4>
          <div className={styles["card-container"]}>
            {!isLoading && !workoutsWanted && !nutritionWanted ? (
              <div className={styles["else"]}>
                <img
                  src="https://i.pinimg.com/564x/b7/21/54/b72154aacb4b6eeb4f7386dca2bd9f32.jpg"
                  alt="some"
                />
              </div>
            ) : null}
            {isLoading ? (
              <CircularProgress
                style={{ color: "#d83e59" }}
                size={"4rem"}
                className={styles["loader"]}
              />
            ) : null}
            {!isLoading && !nutritionWanted && workoutsWanted ? (
              workoutToDisplay ? (
                workoutToDisplay.map((x) => (
                  <WorkoutsCard className={"card-profile"} {...x} key={x._id} />
                ))
              ) : (
                <div>
                  <p className={styles["no"]}>No Workouts to be displayed</p>
                  <div className={styles["btn-workouts"]}>
                    <p className={styles["addition"]}>
                      You can see all avaliable workouts here:
                    </p>
                    <Link to="/workouts">
                      <p className={styles["p"]}>Browse Workouts</p>
                    </Link>
                  </div>
                  <div className={styles["btn-workouts"]}>
                    <p className={styles["addition"]}>
                      or create one by yourself:
                    </p>
                    <Link to="/workout/create">
                      <p className={styles["p"]}>Create Workout</p>
                    </Link>
                  </div>
                </div>
              )
            ) : null}
            {!isLoading && nutritionWanted && !workoutsWanted ? (
              nutritionToDisplay ? (
                nutritionToDisplay.map((x) => (
                  <NutritionCard
                    {...x}
                    key={x._id}
                    className={"card-profile"}
                  />
                ))
              ) : (
                <div>
                  <p className={styles["no"]}>No Nutrition to be displayed</p>
                  <div className={styles["btn-workouts"]}>
                    <p className={styles["addition"]}>
                      You can see all avaliable nutrition here:
                    </p>
                    <Link to="/nutrition">
                      <p className={styles["p"]}>Browse Nutrition</p>
                    </Link>
                  </div>
                </div>
              )
            ) : null}

            {/* {!isLoading && workoutToDisplay ? (
              workoutToDisplay.map((x) => <WorkoutsCard {...x} key={x._id} />)
            ) : (
              <p className={styles["no"]}>No Workouts to be displayed</p>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
