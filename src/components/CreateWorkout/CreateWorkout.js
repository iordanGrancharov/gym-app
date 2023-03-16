import styles from "./CreateWorkout.module.css";
import { useEffect, useState } from "react";
import { fetchData, exerciseDbOptions } from "../../utils/fetchData";
import Exercises from "./Exercises/Exercises";

import CreateForm from "./CreateForm/CreateForm";

const CreateWorkout = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseDbOptions
      );
      const data = await response.json();
      setExercises(data);
    };
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearchClick = async (e) => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseDbOptions
      );

      const searchedExercised = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercised);
    }
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["exercises-section"]}>
        <div className={styles["search-section"]}>
          <input
            type="search"
            name="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search Exercises"
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <Exercises
          className={styles["exercises"]}
          exercises={exercises}
          setExercises={setExercises}
        />
      </div>
      <CreateForm className={styles["create-form"]} />
    </section>
  );
};

export default CreateWorkout;
