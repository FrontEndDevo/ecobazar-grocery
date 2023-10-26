import { useSelector } from "react-redux";
import { alphabet } from "../pages/ShopPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ShopFilter = () => {
  const [letters, setLetters] = useState(false);
  const [areas, setAreas] = useState(false);
  const [categories, setCategories] = useState(false);

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
    <ul className="grid grid-cols-5 mt-4 md:grid-cols-2">
      {filters.letters.split("").map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input type="checkbox" name="input-Checkbox" id="checkbox" />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  const ShopFilterByAreas = (
    <ul className="grid grid-cols-2 mt-4 md:grid-cols-1">
      {filters.areas.map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input type="checkbox" name="input-Checkbox" id="checkbox" />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  const ShopFilterByCategories = (
    <ul className="grid grid-cols-2 mt-4 md:grid-cols-1">
      {filters.categories.map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input type="checkbox" name="input-Checkbox" id="checkbox" />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  // Btns to control toggling filters:
  const toggleLetterHandler = () => {
    setLetters((prevState) => !prevState);
  };

  const toggleAreaHandler = () => {
    setAreas((prevState) => !prevState);
  };

  const toggleCategoryHandler = () => {
    setCategories((prevState) => !prevState);
  };

  const keywordClasses =
    "flex gap-4 items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-2xl font-bold duration-300 border-b-2 text-main-700";

  return (
    <aside className="mx-4 md:mx-0">
      <div className="p-2 mb-2">
        <span onClick={toggleLetterHandler} className={keywordClasses}>
          Letter
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xl duration-300 text-main-500 ${
              letters && "-rotate-180"
            }`}
          />
        </span>
        {letters && ShopFilterByLetters}
      </div>

      <div className="p-2 mb-2">
        <span onClick={toggleAreaHandler} className={keywordClasses}>
          Area
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xl duration-300 text-main-500 ${
              areas && "-rotate-180"
            }`}
          />
        </span>
        {areas && ShopFilterByAreas}
      </div>

      <div className="p-2 mb-2">
        <span onClick={toggleCategoryHandler} className={keywordClasses}>
          Category
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xl duration-300 text-main-500 ${
              categories && "-rotate-180"
            }`}
          />
        </span>
        {categories && ShopFilterByCategories}
      </div>

      <button className="w-full p-2 mt-4 text-xl font-bold duration-300 border-2 border-blue-900 rounded-full hover:text-white hover:bg-blue-900 text-main-700">
        Apply
      </button>
    </aside>
  );
};

export default ShopFilter;
