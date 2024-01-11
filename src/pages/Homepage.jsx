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
import { drinksActions } from "../redux/slices/drinksSlice";
import { collection, getDocs } from "firebase/firestore";
import { fruitsActions } from "../redux/slices/fruitsSlice";
import { vegetablesActions } from "../redux/slices/vegetablesSlice";
import { db } from "../config/firebase";
import { errorsActions } from "../redux/slices/errorsSlice";

export const alphabet = "abcdefghijklmnopqrstuvwxyz";

const Homepage = () => {
  const dispatch = useDispatch();

  const fruits = useSelector((state) => state.fruits.fruits);
  const vegetables = useSelector((state) => state.vegetables.vegetables);
  const reduxMeals = useSelector((state) => state.meals);
  const reduxDrinks = useSelector((state) => state.drinks);

  // Fetch all products from either Firebase or API:
  useEffect(() => {
    // Fetch fruits from Firebase DB:
    if (fruits.length === 0) {
      const fetchFruits = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "fruits"));
          querySnapshot.forEach((doc) => {
            dispatch(
              fruitsActions.addNewFruit({
                fruitName: doc.data().name,
                fruitDetails: doc.data(),
              })
            );
          });
        } catch (error) {
          dispatch(
            errorsActions.addError({
              errorType: "fruits",
              errorMessage: `Something went wrong! Error: ${error}`,
            })
          );
        }
      };

      fetchFruits();
    }

    // Fetch vegetables from Firebase DB:
    if (vegetables.length === 0) {
      const fetchVegetables = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "vegetables"));
          querySnapshot.forEach((doc) => {
            dispatch(
              vegetablesActions.addNewVegetable({
                vegetablesName: doc.data().name,
                vegetablesDetails: doc.data(),
              })
            );
          });
        } catch (error) {
          dispatch(
            errorsActions.addError({
              errorType: "vegetables",
              errorMessage: `Something went wrong! Error: ${error}`,
            })
          );
        }
      };

      fetchVegetables();
    }

    // Check first if there are (meals) in redux store so not to send request in vain.
    if (reduxMeals.totalNumOfMeals === 0) {
      const fetchAllMealsWithAllLetters = async () => {
        try {
          await Promise.all(
            alphabet.split("").map(async (letter) => {
              const response = await axios.get(
                `${import.meta.env.VITE_MEALS_BY_FIRST_LETTER}=${letter}`
              );
              dispatch(
                mealsActions.addNewMealType({
                  letter,
                  meals: response.data.meals || [],
                })
              );
            })
          );
        } catch (error) {
          dispatch(
            errorsActions.addError({
              errorType: "meals",
              errorMessage: `Something went wrong! Error: ${error}`,
            })
          );
        }
      };
      fetchAllMealsWithAllLetters();
    }

    // Check first if there are (drinks) in redux store.
    if (reduxDrinks.totalNumOfDrinks === 0) {
      const fetchAllDrinksWithAllLetters = async () => {
        try {
          await Promise.all(
            alphabet.split("").map(async (letter) => {
              const response = await axios.get(
                `${import.meta.env.VITE_DRINKS_BY_FIRST_LETTER}=${letter}`
              );
              dispatch(
                drinksActions.addNewDrinkType({
                  letter,
                  drinks: response.data.drinks || [],
                })
              );
            })
          );
        } catch (error) {
          dispatch(
            errorsActions.addError({
              errorType: "drinks",
              errorMessage: `Something went wrong! Error: ${error}`,
            })
          );
        }
      };
      fetchAllDrinksWithAllLetters();
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

export default Homepage;
