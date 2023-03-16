import styles from "./ExerciseDetails.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import Details from "./Details/Details";
import ExerciseVideos from "./ExerciseVideos/ExerciseVideos";
import SimilarExercise from "./SimilarExercises/SimilarExercises";

import {
  youtubeDbOptions,
  exerciseDbOptions,
  fetchData,
} from "../../utils/fetchData";

const ExerciseDetails = () => {
  const [exercise, setExercise] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { exerciseId } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      setIsLoading(true);
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeDbUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDbResponse = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${exerciseId}`,
        exerciseDbOptions
      );

      setExercise(exerciseDbResponse);
      setIsLoading(false);
    };
    fetchExerciseData();
  }, [exerciseId]);
  return (
    <div className={styles["container"]}>
      {isLoading ? (
        <CircularProgress
          style={{ color: "white" }}
          size={"4rem"}
          className={styles["loader"]}
        />
      ) : (
        <Details {...exercise} />
      )}

      {/* {isLoading ? (
        <CircularProgress
          style={{ color: "white" }}
          size={"4rem"}
          className={styles["loader"]}
        />
      ) : (
        <ExerciseVideos />
      )}
      {isLoading ? (
        <CircularProgress
          style={{ color: "white" }}
          size={"4rem"}
          className={styles["loader"]}
        />
      ) : (
        <SimilarExercise />
      )} */}
    </div>
  );
};

export default ExerciseDetails;
