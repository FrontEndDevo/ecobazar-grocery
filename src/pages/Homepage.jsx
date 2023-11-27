import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Benefits from "../components/Benefits";
import WhyChooseUs from "../components/WhyChooseUs";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import MealsCategories from "../components/MealsCategories";
import Statistics from "../components/Statistics";
import OrganicFoodFeature from "../components/OrganicFoodFeature";
import FoodProducts from "../components/FoodProducts";
import DeliciousMeals from "../components/DeliciousMeals";
import AllProducts from "../components/AllProducts/AllProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mealsActions } from "../redux/slices/mealsSlice";
import axios from "axios";

export const alphabet = "abcdefghijklmnopqrstuvwxyz";

const HomePage = () => {
  const dispatch = useDispatch();

  const reduxMeals = useSelector((state) => state.meals);

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
              dispatch(
                errorsActions.addError({
                  errorType: "meals",
                  errorMessage: `Something went wrong! Error:${err}`,
                })
              );
            });
        });
      };
      fetchAllMealsWithAllLetters();
    }
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <AllProducts />
      <Benefits />
      <DeliciousMeals />
      <WhyChooseUs />
      <Delivery />
      <MealsCategories />
      <Statistics />
      <OrganicFoodFeature />
      <FoodProducts />
      <Footer />
    </>
  );
};

export default HomePage;
