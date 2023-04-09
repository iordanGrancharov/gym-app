import { useState, useEffect } from "react";
import { fetchData, ketoDbOptions } from "../../utils/fetchData";
import { useNavigate } from "react-router-dom";

import NutritionCard from "../NutritionCard/NutritionCard";

import styles from "./NutritionCatalog.module.css";
import { CircularProgress } from "@mui/material";
import { generateRandomElements } from "../../utils/generateRandomElements";

const NutritionCatalog = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState({
    less: "",
    greater: "",
  });
  const [receipts, setReceipts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const resetForm = () => {
    setFilter({
      less: "",
      greater: "",
    });
    setError(null);
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    if (filter) {
      setIsLoading(true);
      try {
        // API isnt working good with a difference smaller than 5
        if (
          Number(filter.less) === Number(filter.greater) &&
          filter.less &&
          filter.greater
        ) {
          throw new Error("LessThan and GreaterThan can't be equal");
        }

        if (
          Number(filter.less) < Number(filter.greater) &&
          filter.less &&
          filter.greater
        ) {
          throw new Error("LessThan must be bigger than GreaterThan");
        }

        if (
          Number(filter.less) - Number(filter.greater) < 20 &&
          filter.less &&
          filter.greater
        ) {
          throw new Error(
            "LessThan must be at least 20 bigger than GreaterThan"
          );
        }

        if (
          Number(filter.less) < 0 ||
          (Number(filter.greater) < 0 && filter.less && filter.greater)
        ) {
          throw new Error("Values can't be negative");
        }

        setError(null);

        const data = await fetchData(
          `https://keto-diet.p.rapidapi.com/?calories__lt=${filter.less}&calories__gt=${filter.greater}`,
          ketoDbOptions
        );
        const randomReceipts = generateRandomElements(data);

        setReceipts(randomReceipts);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
      }
    }
  };

  useEffect(() => {
    const fetchNutrition = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(
          "https://keto-diet.p.rapidapi.com/",
          ketoDbOptions
        );

        const randomReceipts = generateRandomElements(data);

        setReceipts(randomReceipts);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
        navigate("/error");
      }
    };
    fetchNutrition();

    return resetForm;
  }, [navigate]);

  return (
    <section className={styles["container"]}>
      <div className={styles["receipts-section"]}>
        <h2>Nutrition</h2>
        {error && <p className={styles["error"]}>{error}</p>}
        <form className={styles["form"]}>
          <h5>Filter by Calories</h5>
          <div className={styles["input-container"]}>
            <input
              type="number"
              name="less"
              id="less"
              placeholder="Less Than ... Calories"
              value={filter.less}
              onChange={handleChange}
            />
            <input
              type="number"
              name="greater"
              id="greater"
              placeholder="Greater Than ... Calories"
              value={filter.greater}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleFilter}>Filter</button>
        </form>
        <div className={styles["card-container"]}>
          {isLoading ? (
            <CircularProgress
              style={{ color: "#d83e59" }}
              size={"4rem"}
              className={styles["loader"]}
            />
          ) : (
            receipts.map((receipt) => (
              <NutritionCard {...receipt} key={receipt.id} mode="fromCatalog" />
            ))
          )}
        </div>
      </div>

      <div className={styles["img-section"]}></div>
    </section>
  );
};

export default NutritionCatalog;
