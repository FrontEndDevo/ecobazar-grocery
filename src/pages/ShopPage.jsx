import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { mealsActions } from "../redux/slices/mealsSlice";
import Shop from "../components/Shop";
export const alphabet = "abcdefghijklmnopqrstuvwxyz";
const ShopPage = () => {
  const [mealsError, setMealsError] = useState(null);

  const reduxMeals = useSelector((state) => state.meals);

  const dispatch = useDispatch();

  useEffect(() => {
    // Check first if there are meals in redux store so not to send request in vain.
    if (reduxMeals.totalNumOfMeals == 0) {
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
    }
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
