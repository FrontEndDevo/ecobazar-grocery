import { useSelector } from "react-redux";
import { alphabet } from "../../pages/HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useReducer, useState } from "react";

const filterReducer = {
  openLetters: false,
  openAreas: false,
  openCategories: false,
  letters: [],
  areas: [],
  categories: [],
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

    case "LETTERS":
      return {
        ...state,
        letters: action.array,
      };

    case "AREAS":
      return {
        ...state,
        areas: action.array,
      };

    case "CATEGORIES":
      return {
        ...state,
        categories: action.array,
      };

    case "RESET":
      return {
        openLetters: false,
        openAreas: false,
        openCategories: false,
        letters: [],
        areas: [],
        categories: [],
      };
  }
};

const ShopFilter = ({ getFilters }) => {
  const [filters, dispatch] = useReducer(filterReducerFn, filterReducer);
  const [filtersError, setFiltersError] = useState(false);
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

  // Track if a (letter || area || category) checkbox is checked or not.
  const checkingTheCheckboxes = (filterArray, checkboxVal, dispatchKeyword) => {
    const isChecked = filterArray.includes(checkboxVal);

    // Here we send new array with/without the checked item:
    if (isChecked) {
      const array = filterArray.filter((item) => item != checkboxVal);
      dispatch({ type: dispatchKeyword, array });
    } else {
      const array = filterArray;
      array.push(checkboxVal);
      dispatch({ type: dispatchKeyword, array });
    }
  };

  // Render all filter arrays:
  const ShopFilterByLetters = (
    <ul className="grid grid-cols-5 mt-4 md:grid-cols-2">
      {filtersOptions.letters.split("").map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input
            type="checkbox"
            name="checkbox"
            id="letter-checkbox"
            checked={filters.letters.includes(item)}
            onChange={() =>
              checkingTheCheckboxes(filters.letters, item, "LETTERS")
            }
          />
          <label htmlFor="letter-checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  const ShopFilterByAreas = (
    <ul className="grid grid-cols-2 mt-4 md:grid-cols-1">
      {filtersOptions.areas.map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input
            type="checkbox"
            name="checkbox"
            id="area-checkbox"
            checked={filters.areas.includes(item)}
            onChange={() => checkingTheCheckboxes(filters.areas, item, "AREAS")}
          />
          <label htmlFor="area-checkbox">{item}</label>
        </li>
      ))}
    </ul>
  );

  const ShopFilterByCategories = (
    <ul className="grid grid-cols-2 mt-4 md:grid-cols-1">
      {filtersOptions.categories.map((item, i) => (
        <li key={i} className="flex items-center gap-2 my-1">
          <input
            type="checkbox"
            name="checkbox"
            id="category-checkbox"
            checked={filters.categories.includes(item)}
            onChange={() =>
              checkingTheCheckboxes(filters.categories, item, "CATEGORIES")
            }
          />
          <label htmlFor="category-checkbox">{item}</label>
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

  // Send selected filters to parent component (Shop) to filter the meals:
  const applyShopFiltersHandler = () => {
    if (
      filters.letters.length != 0 ||
      filters.areas.length != 0 ||
      filters.categories.length != 0
    ) {
      setFiltersError(false);
      getFilters({
        letters: filters.letters,
        areas: filters.areas,
        categories: filters.categories,
      });
    } else {
      setFiltersError(true);
    }

    // Reset all filters:
    dispatch({ type: "RESET" });
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

      <button
        onClick={applyShopFiltersHandler}
        className="w-full p-2 mt-4 text-xl font-bold duration-300 border-2 border-blue-900 rounded-full hover:text-white hover:bg-blue-900 text-main-700"
      >
        Apply
      </button>

      {filtersError && (
        <p className="mt-4 text-sm font-bold text-red-700">
          Please select some filters.
        </p>
      )}
    </aside>
  );
};

export default ShopFilter;
