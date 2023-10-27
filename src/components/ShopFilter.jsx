import { useSelector } from "react-redux";
import { alphabet } from "../pages/ShopPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";

const filterReducer = {
  openLetters: false,
  openAreas: false,
  openCategories: false,
};

const filterReducerFn = (state, action) => {
  switch (action.type) {
    case "OPEN_LETTERS":
      return {
        ...state,
        openLetters: !state.openLetters,
      };
    case "OPEN_AREAS":
      return {
        ...state,
        openAreas: !state.openAreas,
      };
    case "OPEN_CATEGORIES":
      return {
        ...state,
        openCategories: !state.openCategories,
      };

    default:
      return { ...state };
  }
};

const ShopFilter = () => {
  const [filters, dispatch] = useReducer(filterReducerFn, filterReducer);

  const filtersOptions = {
    letters: alphabet,
    categories: [],
    areas: [],
  };
  // We're gonna get all available meal categories & areas to filter with them.
  const allMeals = useSelector((state) => state.meals.allMeals);
  allMeals.forEach((mealArr) => {
    mealArr.meals.forEach((meal) => {
      // Get areas.
      if (!filtersOptions.areas.includes(meal.strArea)) {
        filtersOptions.areas.push(meal.strArea);
      }

      // Get categories.
      if (!filtersOptions.categories.includes(meal.strCategory)) {
        filtersOptions.categories.push(meal.strCategory);
      }
    });
  });

  // Track if a checkbox is checked or not.
  const changeLetterCheckboxHandler = (val) => {
    console.log(val);
  };

  // Render all filter arrays:
  const ShopFilterByLetters = (
    <ul className="grid grid-cols-5 mt-4 md:grid-cols-2">
      {filtersOptions.letters.split("").map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input
            type="checkbox"
            name="input-Checkbox"
            id="checkbox"
            onChange={() => changeLetterCheckboxHandler(item)}
          />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  const ShopFilterByAreas = (
    <ul className="grid grid-cols-2 mt-4 md:grid-cols-1">
      {filtersOptions.areas.map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input type="checkbox" name="input-Checkbox" id="checkbox" />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  const ShopFilterByCategories = (
    <ul className="grid grid-cols-2 mt-4 md:grid-cols-1">
      {filtersOptions.categories.map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input type="checkbox" name="input-Checkbox" id="checkbox" />
          <label htmlFor="checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  // Btns to control toggling filters:
  const toggleLetterHandler = () => {
    dispatch({ type: "OPEN_LETTERS" });
  };

  const toggleAreaHandler = () => {
    dispatch({ type: "OPEN_AREAS" });
  };

  const toggleCategoryHandler = () => {
    dispatch({ type: "OPEN_CATEGORIES" });
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
              filters.openLetters && "-rotate-180"
            }`}
          />
        </span>
        {filters.openLetters && ShopFilterByLetters}
      </div>

      <div className="p-2 mb-2">
        <span onClick={toggleAreaHandler} className={keywordClasses}>
          Area
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xl duration-300 text-main-500 ${
              filters.openAreas && "-rotate-180"
            }`}
          />
        </span>
        {filters.openAreas && ShopFilterByAreas}
      </div>

      <div className="p-2 mb-2">
        <span onClick={toggleCategoryHandler} className={keywordClasses}>
          Category
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xl duration-300 text-main-500 ${
              filters.openCategories && "-rotate-180"
            }`}
          />
        </span>
        {filters.openCategories && ShopFilterByCategories}
      </div>

      <button className="w-full p-2 mt-4 text-xl font-bold duration-300 border-2 border-blue-900 rounded-full hover:text-white hover:bg-blue-900 text-main-700">
        Apply
      </button>
    </aside>
  );
};

export default ShopFilter;
