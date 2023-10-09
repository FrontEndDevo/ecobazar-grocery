import axios from "axios";
import { useState, useEffect } from "react";

const LatestMeals = () => {
  const [mealsCategories, setMealsCategories] = useState([]);
  useEffect(() => {
    const fetchMealsCategories = async () => {
      await axios
        .get(import.meta.env.VITE_LATEST_MEALS_CATEGORIES)
        .then((data) => {
          setMealsCategories(data?.data.categories);
        })
        .catch((err) => {
          console.log(`Something went wrong! ${err}`);
        });
    };
    fetchMealsCategories();
  }, []);

  console.log(mealsCategories);

  return <div>mealsCategories</div>;
};

export default LatestMeals;
