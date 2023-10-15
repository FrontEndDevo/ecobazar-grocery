import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Shop = ({ error }) => {
  const meals = [];
  const data = useSelector((state) => state.meals).allMeals.forEach((e) =>
    e.meals.forEach((ele) => meals.push(ele))
  );

  const allRenderedMeals = (
    <ul className="flex flex-wrap items-center justify-center gap-10">
      {meals.map((meal) => {
        const mealName =
          meal.strMeal.length > 20
            ? meal.strMeal.slice(0, 20) + "..."
            : meal.strMeal;

        const randomMealPrice = (Math.random() * 100).toFixed(2);

        return (
          <li
            key={meal.idMeal}
            className="relative w-[300px] h-fit border-2 rounded-lg border-blue-300"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full rounded-lg h-2/3"
            />
            <h5 className="absolute left-0 p-1 text-xl italic font-bold text-white border-2 border-l-0 rounded border-primary-100 top-[60%]">
              {meal.strCategory}
            </h5>
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <div>
                  <h3 className="mb-4 text-lg font-bold">{mealName}</h3>
                  <h4 className="text-base text-orange-600">{meal.strArea}</h4>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="font-bold text-green-800">
                  ${randomMealPrice}
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

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="pb-4 mx-auto mb-10 text-5xl font-bold border-b-4 rounded-xl border-primary-500 w-fit text-main-700">
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
        {allRenderedMeals}
      </div>
    </section>
  );
};

export default Shop;
