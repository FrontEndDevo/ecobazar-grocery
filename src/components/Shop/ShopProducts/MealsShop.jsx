import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import ShopPagination from "../ShopPagination";
import { useState } from "react";

const MealsShop = () => {
  const [paginationIndices, setPaginationIndices] = useState({
    start: 0,
    end: 10,
  });

  // Get (meals) from Redux store.
  const meals = [];
  const storedMeals = useSelector((state) => state.meals);
  storedMeals.allMeals.forEach((e) =>
    e.meals.forEach((ele) => meals.push(ele))
  );

  const mealsError = useSelector((state) => state.errors.allErrors).filter(
    (item) => item.errorType == "meals"
  )[0];

  // Render all meals:
  const renderedMeals = (
    <ul className="flex flex-wrap items-center justify-center gap-6">
      {meals
        .slice(paginationIndices.start, paginationIndices.end)
        .map((meal, index) => {
          const mealName =
            meal.strMeal.length > 20
              ? meal.strMeal.slice(0, 20) + "..."
              : meal.strMeal;

          return (
            <li
              key={index}
              className="relative w-[300px] h-fit border-2 rounded-lg duration-200 hover:border-2 hover:border-primary-500"
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
                    <h4 className="text-base text-orange-600">
                      {meal.strArea}
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-bold text-green-800">
                    ${meal.price}
                  </span>
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

  const getCurrentPageHandler = (cur, productsPerPage) => {
    // Calc the first and last product index that should be rendered.
    const startIndex = (cur - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    setPaginationIndices({ start: startIndex, end: endIndex });
  };

  return (
    <section>
      <div>
        {mealsError && (
          <p className="text-xl font-bold text-center text-red-600">
            {mealsError.errorMessage}
          </p>
        )}

        {meals.length == 0 && !mealsError && (
          <p className="flex items-center justify-center gap-4 text-xl font-bold text-green-600">
            <FontAwesomeIcon icon={faSpinner} spinPulse /> Loading Meals...
          </p>
        )}

        {meals.length != 0 && !mealsError && (
          <div>
            <p className="mb-4 text-base italic font-bold text-main-700">
              Available meals &lt;
              <span className="text-xl text-orange-600"> {meals.length} </span>
              &gt;
            </p>
          </div>
        )}
      </div>

      {renderedMeals}

      <ShopPagination
        products={meals}
        getCurrentPage={getCurrentPageHandler}
        paginationIndices={paginationIndices}
      />
    </section>
  );
};

export default MealsShop;