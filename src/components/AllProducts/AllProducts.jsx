import { useState } from "react";
import RenderedProducts from "./RenderedProducts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const [currentKindOfProducts, setCurrentKindOfProducts] = useState(1);

  const fruits = useSelector((state) => state.fruits.fruits);

  const vegetables = useSelector((state) => state.vegetables.vegetables);

  // Extract all (meals & drinks) with all letters into single array:
  const reduxMeals = useSelector((state) => state.meals.allMeals);
  const meals = [];
  reduxMeals.forEach((e) => e.meals.forEach((ele) => meals.push(ele)));

  const reduxDrinks = useSelector((state) => state.drinks.allDrinks);
  const drinks = [];
  reduxDrinks.forEach((e) => e.drinks.forEach((ele) => drinks.push(ele)));

  const chooseTypeOfProductsHandler = (id) => {
    setCurrentKindOfProducts(id);
  };

  // Prepare each kind of products (fruits, meals, ...etc):
  const kindsOfProducts = [
    {
      id: 1,
      type: "vegetable",
      target: vegetables,
    },
    {
      id: 2,
      type: "fruit",
      target: fruits,
    },
    {
      id: 3,
      type: "meat & fish",
      target: meals, // because these will be fetched on this page.
    },
    {
      id: 4,
      type: "drinks",
      target: drinks.reverse(), // better products ^ - ^
    },
  ];

  const productsTypeClasses =
    "text-base capitalize duration-300 font-bold hover:text-green-700";

  const allKindsOfProducts = (
    <ul className="flex flex-wrap items-center justify-center gap-10">
      {kindsOfProducts.map((item, i) => (
        <li key={i} onClick={() => chooseTypeOfProductsHandler(item.id)}>
          <button
            className={`${productsTypeClasses} ${
              item.id == currentKindOfProducts
                ? "text-green-700"
                : "text-main-100"
            }`}
          >
            {item.type}
          </button>
        </li>
      ))}
      <Link to="/shop" className={`${productsTypeClasses} text-main-100`}>
        view all
      </Link>
    </ul>
  );

  // Still fetching Drinks and find a solution for fruits array (no images).
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-10 text-3xl font-bold capitalize lg:text-7xl">
            Introducing our products
          </h2>
          {allKindsOfProducts}
        </div>
        <RenderedProducts
          productType={
            kindsOfProducts.filter((obj) => obj.id == currentKindOfProducts)[0]
          }
        />
      </div>
    </section>
  );
};

export default AllProducts;
