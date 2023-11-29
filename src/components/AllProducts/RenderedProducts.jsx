import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const RenderedProducts = ({ productType }) => {
  const [hoverdProductId, setHoverdProductId] = useState(null);

  const enterProductHandler = (id) => {
    setHoverdProductId(id);
  };

  const leaveProductHandler = () => {
    setHoverdProductId(null);
  };

  // Render all products (vegetables, fruits, ...etc):
  const renderedProducts = productType.target.slice(0, 9).map((item, i) => {
    // Detect the kind of products(vegetables, fruits, meals,...etc), to render correct title & img:
    const title =
      productType.id == 1 // Vegetables
        ? item.vegetablesDetails.name
        : productType.id == 2 // Fruits
        ? item.fruitDetails.fruitName
        : productType.id == 3 // Meals
        ? item.strMeal
        : productType.id == 4 // Drinks
        ? item.strDrink
        : null;

    const img =
      productType.id == 1 // Vegetables
        ? item.vegetablesDetails.photo_url
        : productType.id == 2 // Fruits
        ? item.fruitDetails.img
        : productType.id == 3 // Meals
        ? item.strMealThumb
        : productType.id == 4 // Drinks
        ? item.strDrinkThumb
        : null;

    const price =
      productType.id == 1 // Vegetables
        ? item.vegetablesDetails.price
        : productType.id == 2 // Fruits
        ? item.fruitDetails.price
        : productType.id == 3 // Meals
        ? item.price
        : productType.id == 4 // Drinks
        ? item.price
        : null;

    return (
      <li
        key={i}
        className="relative overflow-hidden rounded-lg flex duration-200 items-center w-full gap-10 p-3 bg-white border-2 h-44  hover:border-green-500"
        onMouseEnter={() => enterProductHandler(i)}
        onMouseLeave={leaveProductHandler}
      >
        <img src={img} alt={title} className="w-1/3 h-full" />

        <div className="font-bold">
          <h4 className="mb-2 text-2xl text-main-700">{title}</h4>
          <span>${price}</span>
          <div className="flex gap-1 mt-2">
            {[...Array(4)].map((e, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-sm text-yellow-500"
              />
            ))}
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className="text-sm text-main-100"
            />
          </div>
        </div>

        <div className="absolute flex items-end gap-4 text-xl lg:text-2xl bottom-4 right-4">
          <FontAwesomeIcon
            icon={faBagShopping}
            className={`mt-4 text-green-400 duration-200 cursor-pointer hover:text-green-800 hover:-translate-y-3 opacity-0 -translate-x-12 ${
              hoverdProductId == i && "translate-x-0 opacity-100"
            }`}
          />
          <FontAwesomeIcon
            icon={faEye}
            className={`text-blue-400 duration-200 cursor-pointer hover:text-blue-800 hover:-translate-y-3 opacity-0 translate-y-12 ${
              hoverdProductId == i && "translate-y-0 opacity-100"
            }`}
          />
          <FontAwesomeIcon
            icon={faHeart}
            className={`text-red-400 duration-200 cursor-pointer opacity-0 translate-x-12 hover:text-red-800 hover:-translate-y-3 ${
              hoverdProductId == i && "translate-x-0  opacity-100"
            }`}
          />
        </div>
      </li>
    );
  });

  return (
    <ul className="grid gap-2 mt-10 sm:grid-cols-1 md:gap-10 xl:grid-cols-3 md:grid-cols-2">
      {renderedProducts}
    </ul>
  );
};

export default RenderedProducts;
