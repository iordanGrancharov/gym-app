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

const ExerciseDetails = ({ mode }) => {
  const [exercise, setExercise] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [similarTargetExercises, setSimilarTargetExercises] = useState([]);

  const { exerciseId, index } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      setIsLoading(true);
      const exerciseAPIUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeAPIUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      try {
        const exerciseDbResponse = await fetchData(
          `${exerciseAPIUrl}/exercises/exercise/${exerciseId}`,
          exerciseDbOptions
        );

        const exerciseVideos = await fetchData(
          `${youtubeAPIUrl}/search?query=${exerciseDbResponse.name}`,
          youtubeDbOptions
        );

        const similarExercises = await fetchData(
          `${exerciseAPIUrl}/exercises/target/${exerciseDbResponse.target}`,
          exerciseDbOptions
        );

        setSimilarTargetExercises(similarExercises);
        setExercise(exerciseDbResponse);
        setVideos(exerciseVideos.contents);

        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchExerciseData();
  }, [exerciseId]);
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        {isLoading ? (
          <CircularProgress
            style={{ color: "white" }}
            size={"4rem"}
            className={styles["loader"]}
          />
        ) : (
          <>
            <Details {...exercise} mode={mode} index={index} />
            <ExerciseVideos videos={videos} name={exercise.name} />
            {mode === "Add" && (
              <SimilarExercise
                similarTargetExercises={similarTargetExercises}
                target={exercise.target}
                exerciseId={exercise.id}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExerciseDetails;
