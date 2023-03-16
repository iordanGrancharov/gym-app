import styles from "./ExerciseVideos.module.css";
import { Link } from "react-router-dom";

const ExerciseVideos = ({ videos, name }) => {
  return (
    <div className={styles["container"]}>
      <h3>
        Watch <span>{name}</span> exercise videos
      </h3>
      <div className={styles["links-container"]}>
        {videos.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            to={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
