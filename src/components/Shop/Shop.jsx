import { faArrowRight, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShopFilter from "./ShopFilter";
import { useState } from "react";
import shopBackground from "../../assets/images/shop/shop_background.webp";
import Advantages from "../Advantages";
import { Link } from "react-router-dom";
import MealsShop from "./ShopProducts/MealsShop";
import DrinksShop from "./ShopProducts/DrinksShop";
import DeliciousMealsShop from "./ShopProducts/DeliciousMealsShop";

const Shop = () => {
  const [currentProductsId, setCurrentProductsId] = useState(1); // 0 || 1 || 2
  const [openFilters, setOpenFilters] = useState(false);
  const [filteredMeals, setFilteredMeals] = useState([]);

  const meals = [];

  // Get filters obj when user click "apply" btn and filter all meals.
  const getUserFiltersHandler = (filters) => {
    const filteredMeals = [];
    // Get all meals with (letters) filter.
    filters.letters.forEach((letter) => {
      const mealsArrByLetter = meals.filter(
        (meal) => meal.strMeal.charAt(0).toLowerCase() == letter
      );
      filteredMeals.push(...mealsArrByLetter);
    });

    // Get all meals with (areas) filter.
    filters.areas.forEach((area) => {
      const mealsArrByArea = meals.filter((meal) => meal.strArea == area);
      filteredMeals.push(...mealsArrByArea);
    });

    // Get all meals with (categories) filter.
    filters.categories.forEach((category) => {
      const mealsArrByCategory = meals.filter(
        (meal) => meal.strCategory == category
      );
      filteredMeals.push(...mealsArrByCategory);
    });

    setFilteredMeals(filteredMeals);
  };

  // Render all meals from Redux store OR render all filtered meals:
  const neededMeals = filteredMeals.length != 0 ? filteredMeals : meals;

  const toggleFiltersHandler = () => {
    setOpenFilters((prevState) => !prevState);
  };

  const resetFilteredMealsHandler = () => {
    setFilteredMeals([]);
  };

  const chooseDeliciousMealsHandler = () => {
    setCurrentProductsId(0);
  };

  const chooseDrinksHandler = () => {
    setCurrentProductsId(1);
  };

  const chooseMealsHandler = () => {
    setCurrentProductsId(2);
  };

  return (
    <section className="py-48 text-center lg:text-start lg:py-24">
      <div className="container">
        <div className="relative mb-20 text-start">
          <img
            src={shopBackground}
            alt="Fresh and Healthy Food"
            className="w-full rounded-xl h-96 lg:h-screen"
          />
          <div className="absolute top-0 left-0 p-4 lg:w-1/2 lg:left-20 lg:top-1/4">
            <h6 className="mb-4 font-bold text-green-600 uppercase">
              Welcome to Ezobazar shop
            </h6>
            <h2 className="text-lg font-bold text-main-700 lg:text-5xl xl:text-7xl">
              Fresh & Healthy Organic Food
            </h2>
            <p className="relative my-6 mb-32 text-base uppercase lg:pr-4 lg:my-12 lg:text-4xl text-main-700">
              Sale up to <span className="text-orange-600">30% OFF</span>
            </p>
            <p className="mb-4 lg:mb-10 text-main-500 xl:text-main-100">
              Free shipping on all your order. we deliver, you enjoy
            </p>
            <Link
              to="/shop"
              className="flex items-center justify-center gap-4 px-6 py-4 text-white duration-200 rounded-full w-fit lg:px-12 bg-primary-500 hover:bg-primary-700"
            >
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <Advantages />
        </div>

        <div className="mb-12">
          <h2 className="pb-4 mx-auto mb-2 text-3xl font-bold lg:text-5xl rounded-xl w-fit text-main-700">
            Featured Products
          </h2>
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={chooseDeliciousMealsHandler}
              data-mark="delicious-meals"
              className={`w-10 h-2 rounded-lg duration-300 bg-primary-100 hover:bg-primary-500 ${
                currentProductsId == 0 && "bg-primary-500 w-20"
              }`}
            ></button>
            <button
              onClick={chooseDrinksHandler}
              data-mark="drinks"
              className={`w-10 h-2 rounded-lg duration-300 bg-primary-100 hover:bg-primary-500 ${
                currentProductsId == 1 && "bg-primary-500 w-20"
              }`}
            ></button>
            <button
              onClick={chooseMealsHandler}
              data-mark="meals"
              className={`w-10 h-2 rounded-lg duration-300 bg-primary-100 hover:bg-primary-500 ${
                currentProductsId == 2 && "bg-primary-500 w-20"
              }`}
            ></button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2
              onClick={toggleFiltersHandler}
              className="flex items-center gap-2 p-2 mb-4 text-xl font-bold duration-200 border border-l-0 border-black rounded cursor-pointer lg:p-4 lg:border-l lg:text-3xl w-fit hover:bg-gray-100 text-main-700"
            >
              <FontAwesomeIcon icon={faFilter} /> Filter
            </h2>
            <button
              onClick={resetFilteredMealsHandler}
              className="p-1 text-sm font-bold text-white duration-200 bg-red-600 rounded-sm hover:bg-red-800"
            >
              Reset
            </button>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            {openFilters && <ShopFilter getFilters={getUserFiltersHandler} />}

            {currentProductsId == 0 && <DeliciousMealsShop />}
            {currentProductsId == 2 && <MealsShop />}
            {currentProductsId == 1 && <DrinksShop />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
