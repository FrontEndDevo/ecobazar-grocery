import { faFilter, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import ShopFilter from "./ShopFilter";
import { useState } from "react";

const Shop = ({ error }) => {
  const [openFilters, setOpenFilters] = useState(false);

  const meals = [];
  const storedMeals = useSelector((state) => state.meals);
  storedMeals.allMeals.forEach((e) =>
    e.meals.forEach((ele) => meals.push(ele))
  );

  const allRenderedMeals = (
    <ul className="flex flex-wrap items-center justify-center gap-6">
      {meals.map((meal) => {
        const mealName =
          meal.strMeal.length > 20
            ? meal.strMeal.slice(0, 20) + "..."
            : meal.strMeal;

        return (
          <li
            key={meal.idMeal}
            className="relative w-[300px] h-fit border-2 rounded-lg"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full rounded-t-lg h-2/3"
            />
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <div>
                  <h3 className="mb-4 text-lg font-bold">{mealName}</h3>
                  <h4 className="text-base text-orange-600">{meal.strArea}</h4>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="font-bold text-green-800">${meal.price}</span>
                <button className="px-3 py-1 text-2xl text-white duration-100 bg-green-500 rounded-full hover:-translate-y-2">
                  +
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  const toggleFiltersHandler = () => {
    setOpenFilters((prevState) => !prevState);
  };

  return (
    <section className="text-center lg:text-start py-60 lg:py-24">
      <div className="container">
        <h2 className="pb-4 mx-auto mb-10 text-3xl font-bold border-b-4 lg:text-5xl rounded-xl border-primary-500 w-fit text-main-700">
          Featured Meals
        </h2>

        {error && (
          <p className="text-xl font-bold text-center text-red-600">
            oops..Something went wrong!
          </p>
        )}

        {meals.length == 0 && !error && (
          <p className="flex items-center justify-center gap-4 text-xl font-bold text-green-600">
            <FontAwesomeIcon icon={faSpinner} spinPulse /> Loading Meals...
          </p>
        )}

        {meals.length != 0 && !error && (
          <div>
            <p className="mb-4 text-base italic font-bold text-main-700">
              Available meals &lt;
              <span className="text-xl text-orange-600">
                {" "}
                {storedMeals.totalNumOfMeals}{" "}
              </span>
              &gt;
            </p>
            <h2
              onClick={toggleFiltersHandler}
              className="flex items-center gap-2 p-2 mb-4 text-xl font-bold duration-200 border border-l-0 border-black rounded cursor-pointer lg:p-4 lg:border-l lg:text-3xl w-fit hover:bg-gray-100 text-main-700"
            >
              <FontAwesomeIcon icon={faFilter} /> Filter
            </h2>
            <div className="flex flex-col gap-4 md:flex-row">
              {openFilters && <ShopFilter />}
              {allRenderedMeals}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
