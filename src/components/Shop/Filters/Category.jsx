import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../redux/slices/filtersSlice";
const Category = ({ productId }) => {
  const [openCategories, setOpenCategories] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filters.categories);

  const correctProducts = useSelector((state) =>
    productId == 1
      ? state.drinks.allDrinks
      : productId == 2
      ? state.meals.allMeals
      : null
  );

  const productCategories = [];
  correctProducts.forEach((prod) => {
    const productsArray =
      productId == 1 ? prod.drinks : productId == 2 ? prod.meals : [];
    // Drinks
    productsArray.forEach((item) => {
      if (!productCategories.includes(item.strCategory))
        productCategories.push(item.strCategory);
    });

    // Meals:
    productsArray.forEach((item) => {
      if (!productCategories.includes(item.strCategory))
        productCategories.push(item.strCategory);
    });
  });

  const chooseCategoryHandler = (cat) => {
    // Check if the category is exist in the redux array or not to add/remove it.
    categories.includes(cat)
      ? dispatch(
          filtersActions.setCategories(categories.filter((item) => item != cat))
        )
      : dispatch(filtersActions.setCategories([...categories, cat]));
  };

  // This block of code to close the list if user clicked anywhere outside of the list.
  const listRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setOpenCategories(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listRef]);

  return (
    <div className="relative z-30">
      <div
        onClick={() => setOpenCategories((prevState) => !prevState)}
        className={`flex items-center hover:text-main-700 justify-between w-48 px-3 py-2 duration-300  border-2 rounded-lg outline-none cursor-pointer bg-white ${
          openCategories
            ? "text-main-700 border-primary-700"
            : "text-neutral-500"
        }`}
      >
        <button>Select Category</button>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={` duration-300 ${openCategories ? "rotate-180" : ""}`}
        />
      </div>
      {openCategories && (
        <ul
          ref={listRef}
          className="absolute w-48 p-1 overflow-hidden overflow-y-auto duration-200 bg-white border rounded-lg h-60 top-12"
        >
          {productCategories.map((category, i) => (
            <li
              key={i}
              className={`px-2 py-1 my-1 duration-200 cursor-pointer hover:bg-primary-100 text-main-700 ${
                categories.includes(category) && "bg-primary-100"
              }`}
              onClick={() => chooseCategoryHandler(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;
