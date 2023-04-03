import { useEffect, useState } from "react";
import { fetchData, ketoDbOptions } from "../../utils/fetchData";

import styles from "./NutritionDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";

const NutritionDetails = () => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const { nutritionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNutrition = async () => {
      try {
        const data = await fetchData(
          `https://keto-diet.p.rapidapi.com/?id=${nutritionId}`,
          ketoDbOptions
        );

        const myData = Object.entries(data[0]);

        const stepsArr = myData
          .filter((x) => {
            const [a, b] = x;
            if (a.includes("directions") && b != null) {
              return true;
            }
            return false;
          })
          .map(([a, b]) => {
            if (b === null) {
              return false;
            }
            return { b };
          });

        const measurement = myData
          .filter((x) => {
            const [a, b] = x;
            if (a.includes("measurement") && b != null) {
              return true;
            }
            return false;
          })
          .map(([a, b]) => {
            return b;
          });

        let ingredients = myData
          .filter((x) => {
            const [a, b] = x;
            if (a.includes("ingredient") && b !== null) {
              return true;
            }
            return false;
          })
          .map(([a, b]) => {
            if (b === null) {
              return false;
            }
            return { b };
          });

        ingredients = measurement.map(
          (x, i) =>
            `${!x ? "" : x} ${!ingredients[i].b ? "" : ingredients[i].b}`
        );

        ingredients = ingredients.filter((x) => x !== " ");

        setSteps(stepsArr);
        setIngredients(ingredients);
        setRecipe(data[0]);
      } catch (e) {
        console.log(e.message);
        navigate("/error");
      }
    };
    fetchNutrition();
  }, [nutritionId, navigate]);

  return (
    <section className={styles["container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["img-container"]}>
            <img src={recipe.image} alt={recipe.recipe} />
          </div>
          <div className={styles["info"]}>
            <h1>{recipe.recipe}</h1>
            <p>Preparation Time: {recipe.prep_time_in_minutes} minutes</p>
            <p>Difficulty Level: {recipe.difficulty}</p>
          </div>
        </div>
        <div className={styles["section-container"]}>
          <div className={styles["section-one"]}>
            <div className={styles["micro"]}>
              <p>
                Calories per 100g: <span>{recipe.calories}kcal</span>
              </p>
              <p>
                Carbohydrates: <span>{recipe.carbohydrates_in_grams}g</span>
              </p>
              <p>
                Fats: <span>{recipe.fat_in_grams}g</span>
              </p>
              <p>
                Protein: <span>{recipe.protein_in_grams}g</span>
              </p>
            </div>
            <div className={styles["micro"]}>
              <p>
                <span>Ingredients: </span>
              </p>
              {ingredients.map((x) => (
                <p>{x}</p>
              ))}
            </div>
          </div>
          <div className={styles["section-two"]}>
            <h5>Steps:</h5>
            {steps.map((x, i) => (
              <p>
                {i + 1}.{x.b}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionDetails;
