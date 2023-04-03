import { useState, useEffect } from "react";
import { fetchData, ketoDbOptions } from "../../utils/fetchData";
import { Link } from "react-router-dom";

import NutritionCard from "./NutritionCard/NutritionCard";

import styles from "./NutritionCatalog.module.css";
import { CircularProgress } from "@mui/material";

const NutritionCatalog = () => {
  const [filter, setFilter] = useState({
    less: "",
    greater: "",
  });
  const [receipts, setReceipts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const check = value < 0 ? 0 : value;
    setFilter({ ...filter, [name]: check });
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    if (filter) {
      setIsLoading(true);
      try {
        const data = await fetchData(
          `https://keto-diet.p.rapidapi.com/?calories__lt=${filter.less}&calories__gt=${filter.greater}`,
          ketoDbOptions
        );
        const randomIndexes = new Set();
        while (randomIndexes.size < 3) {
          const index = Math.floor(Math.random() * data.length);
          randomIndexes.add(index);
        }

        const randomReceipts = Array.from(randomIndexes).map(
          (index) => data[index]
        );
        console.log(randomReceipts);
        setReceipts(randomReceipts);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
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
        const randomIndexes = new Set();
        while (randomIndexes.size < 3) {
          const index = Math.floor(Math.random() * data.length);
          randomIndexes.add(index);
        }

        const randomReceipts = Array.from(randomIndexes).map(
          (index) => data[index]
        );
        console.log(randomReceipts);
        setReceipts(randomReceipts);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchNutrition();
  }, []);

  return (
    <section className={styles["container"]}>
      <div className={styles["receipts-section"]}>
        <h2>Nutrition</h2>
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
              style={{ color: "white" }}
              size={"4rem"}
              className={styles["loader"]}
            />
          ) : (
            receipts.map((receipt) => (
              <NutritionCard {...receipt} key={receipt.id} />
            ))
          )}
        </div>
      </div>

      <div className={styles["img-section"]}></div>
    </section>
  );
};

export default NutritionCatalog;
