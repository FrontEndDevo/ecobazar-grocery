import { useSelector } from "react-redux";
import { alphabet } from "../pages/ShopPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const ShopFilter = () => {
  const filters = {
    letters: alphabet,
    categories: [],
    areas: [],
  };
  // We're gonna get all available meal categories & areas to filter with them.
  const allMeals = useSelector((state) => state.meals.allMeals);
  allMeals.forEach((mealArr) => {
    mealArr.meals.forEach((meal) => {
      // Get areas.
      if (!filters.areas.includes(meal.strArea)) {
        filters.areas.push(meal.strArea);
      }

      // Get categories.
      if (!filters.categories.includes(meal.strCategory)) {
        filters.categories.push(meal.strCategory);
      }
    });
  });

  // Render all filter arrays:
  const ShopFilterByLetters = (
    <ul>
      {filters.letters.split("").map((item, i) => (
        <li key={i}>
          <input type="checkbox" name="input-Checkbox" id="checkbox" />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  const ShopFilterByAreas = (
    <ul>
      {filters.areas.map((item, i) => (
        <li key={i}>
          <input type="checkbox" name="input-Checkbox" id="checkbox" />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  const ShopFilterByCategories = (
    <ul>
      {filters.categories.map((item, i) => (
        <li key={i}>
          <input type="checkbox" name="input-Checkbox" id="checkbox" />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  return (
    <aside>
      <h2>
        <FontAwesomeIcon icon={faFilter} /> Filters
      </h2>

      <div>
        <div>
          <span>Letter</span>
          {ShopFilterByLetters}
        </div>

        <div>
          <span>Area</span>
          {ShopFilterByAreas}
        </div>

        <div>
          <span>Category</span>
          {ShopFilterByCategories}
        </div>
      </div>
    </aside>
  );
};

export default ShopFilter;
