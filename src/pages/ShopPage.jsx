import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { mealsActions } from "../redux/slices/mealsSlice";
import Shop from "../components/Shop";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const ShopPage = () => {
  const [mealsError, setMealsError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllMealsWithAllLetters = async () => {
      alphabet.split("").map(async (letter) => {
        await axios
          .get(`${import.meta.env.VITE_MEALS_BY_FIRST_LETTER}=${letter}`)
          .then((res) => {
            dispatch(
              mealsActions.addNewMealType({
                letter,
                meals: res.data.meals || [],
              })
            );
          })
          .catch((err) => {
            setMealsError(`Something went wrong! Error:${err}`);
          });
      });
    };
    fetchAllMealsWithAllLetters();
  }, []);

  return (
    <>
      <Navbar />
      <Shop error={mealsError} />
      <Footer />
    </>
  );
};

export default ShopPage;
