import { useContext, useEffect, useState } from "react";
import { fetchData, ketoDbOptions } from "../../utils/fetchData";
import { useParams, useNavigate } from "react-router-dom";
import { prepareData } from "../../utils/nutritionDetailsData";
import {
  deleteNutrition,
  getNutrition,
  nutrition,
} from "../../services/nutrition";
import { AuthContext } from "../../contexts/AuthContext";

import styles from "./NutritionDetails.module.css";

const NutritionDetails = ({ mode }) => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const { nutritionId } = useParams();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleBack = () => {
    if (mode === "fromCatalog") {
      navigate("/nutrition");
    }

    if (mode === "fromProfile") {
      navigate(`/profile/${user._id}`);
    }
  };

  const handleSave = async () => {
    try {
      const ref = await getNutrition(nutritionId);

      if (ref.exists()) {
        const data = {
          ...ref.data(),
          users: [...ref.data().users, user._id],
        };

        await nutrition(nutritionId, data);
      } else {
        const prepared = {};

        Object.entries(recipe)
          .filter(([a, b]) => b !== null)
          .forEach(([a, b]) => {
            return (prepared[a] = b);
          });

        const usersArr = recipe.users ? [...recipe.users] : [];
        const data = { ...prepared, users: [...usersArr, user._id] };

        await nutrition(nutritionId, data);
      }
      navigate(`/profile/${user._id}`);
    } catch (e) {
      navigate("/error");
      console.log(e.message);
    }
  };

  const handleRemove = async () => {
    const users = [...recipe.users].filter((x) => x !== user._id);
    const updatedNutrition = { ...recipe, users: [...users] };

    try {
      await nutrition(nutritionId, updatedNutrition);
      if (users.length === 0) {
        await deleteNutrition(nutritionId);
      }

      navigate(`/profile/${user._id}`);
    } catch (e) {
      navigate(`/error`);
    }
  };

  useEffect(() => {
    const fetchNutrition = async () => {
      try {
        let data = null;
        if (mode === "fromCatalog") {
          data = await fetchData(
            `https://keto-diet.p.rapidapi.com/?id=${nutritionId}`,
            ketoDbOptions
          );
        }

        if (mode === "fromProfile") {
          const res = await getNutrition(nutritionId);
          data = [{ ...res.data() }];
        }

        const { stepsArr, ingredients } = prepareData(data);

        setSteps(stepsArr);
        setIngredients(ingredients);
        setRecipe(data[0]);
      } catch (e) {
        console.log(e.message);
        // navigate("/error");
      }
    };
    fetchNutrition();
  }, [mode, nutritionId, navigate]);

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
              {ingredients.map((x, i) => (
                <p key={i}>{x}</p>
              ))}
            </div>
          </div>
          <div className={styles["section-two"]}>
            <h5>Steps:</h5>
            {steps.map((x, i) => (
              <p key={i}>
                {i + 1}.{x.b}
              </p>
            ))}

            <div className={styles["btn-container"]}>
              <button onClick={handleBack}>Back</button>
              {user ? (
                recipe.users ? (
                  !recipe.users.find((x) => x === user._id) ? (
                    <button onClick={handleSave}>Save</button>
                  ) : (
                    <button onClick={handleRemove}>Remove</button>
                  )
                ) : (
                  <button onClick={handleSave}>Save</button>
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionDetails;
