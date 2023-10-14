import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { mealsActions } from "../redux/slices/mealsSlice";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const ShopPage = () => {
  const dispatch = useDispatch();

  const fetchedData = useSelector((state) => state.meals);
  console.log(fetchedData);

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
            throw new Error(`Something went wrong! Error:${err}`);
          });
      });
    };
    fetchAllMealsWithAllLetters();
  }, []);

  return (
    <>
      <Navbar />

      <Footer />
    </>
  );
};

export default ShopPage;
