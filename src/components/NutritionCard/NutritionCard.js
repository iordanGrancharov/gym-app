import styles from "./NutritionCard.module.css";
import { Link } from "react-router-dom";

const NutritionCard = ({
  id,
  recipe,
  image,
  difficulty,
  calories,
  className,
}) => {
  const style = className ? `${styles[className]}` : `${styles["card"]}`;

  return (
    <div className={style}>
      <h5>{recipe}</h5>

      <div className={styles["img-container"]}>
        <Link to={`/nutrition/details/${id}`}>
          <img src={image} alt={recipe} />
        </Link>
      </div>

      <div className={styles["bonus"]}>
        <p>{difficulty}</p>
        <p>calories/100g: {calories}</p>
      </div>
    </div>
  );
};

export default NutritionCard;