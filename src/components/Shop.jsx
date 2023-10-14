import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Shop = () => {
  const meals = [];
  const data = useSelector((state) => state.meals).allMeals.forEach((e) =>
    e.meals.forEach((ele) => meals.push(ele))
  );

  const allRenderedMeals = (
    <ul className="flex flex-wrap gap-10">
      {meals.map((meal) => {
        const mealName =
          meal.strMeal.length > 25
            ? meal.strMeal.slice(0, 25) + "..."
            : meal.strMeal;

        const randomMealPrice = (Math.random() * 100).toFixed(2);

        return (
          <li key={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-60 w-60"
            />
            <h5>{meal.strCategory}</h5>
            <div>
              <div>
                <div>
                  <h3>{mealName}</h3>
                  <h4>{meal.strArea}</h4>
                </div>
                <span>{randomMealPrice}</span>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="py-20">
      <div>
        <h2>Featured Meals</h2>
        {allRenderedMeals}
      </div>
    </section>
  );
};

export default Shop;
