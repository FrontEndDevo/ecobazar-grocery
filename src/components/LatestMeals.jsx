import axios from "axios";
import { useState, useEffect } from "react";

const LatestMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      await axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((data) => {
          setMeals(data?.data);
        })
        .catch((err) => {
          console.log(`Something went wrong! ${err}`);
        });
    };
    fetchMeals();
  }, []);

  console.log(meals);

  return <div>LatestMeals</div>;
};

export default LatestMeals;
