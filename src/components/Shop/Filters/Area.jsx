import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../redux/slices/filtersSlice";

const Area = ({ productId }) => {
  const [openAreas, setOpenAreas] = useState(false);

  const dispatch = useDispatch();
  const areas = useSelector((state) => state.filters.areas);

  const correctProducts = useSelector((state) =>
    productId == 2 ? state.meals.allMeals : null
  );

  const productAreas = [];
  correctProducts.forEach((prod) => {
    // Meals:
    prod.meals.forEach((item) => {
      if (!productAreas.includes(item.strArea)) {
        productAreas.push(item.strArea);
      }
    });
  });

  const chooseCategoryHandler = (cat) => {
    // Check if the category is exist in the redux array or not to add/remove it.
    areas.includes(cat)
      ? dispatch(filtersActions.setAreas(areas.filter((item) => item != cat)))
      : dispatch(filtersActions.setAreas([...areas, cat]));
  };

  // This block of code to close the list if user clicked anywhere outside of the list.
  const listRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setOpenAreas(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listRef]);

  return (
    <div className="relative z-20">
      <div
        onClick={() => setOpenAreas((prevState) => !prevState)}
        className={`flex items-center hover:text-main-700 justify-between w-48 px-3 py-2 duration-300 border-2 rounded-lg outline-none cursor-pointer bg-white ${
          openAreas ? "text-main-700 border-primary-700" : "text-neutral-500"
        }`}
      >
        <button>Select Area</button>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={` duration-300 ${openAreas ? "rotate-180" : ""}`}
        />
      </div>
      {openAreas && (
        <ul
          ref={listRef}
          className="absolute w-48 p-1 overflow-hidden overflow-y-auto duration-200 bg-white border rounded-lg h-60 top-12"
        >
          {productAreas.map((category, i) => (
            <li
              key={i}
              className={`px-2 py-1 my-1 duration-200 cursor-pointer hover:bg-primary-100 text-main-700 ${
                areas.includes(category) && "bg-primary-100"
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

export default Area;
