import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import shopBackground from "../../assets/images/shop/shop_background.webp";
import Advantages from "../Advantages";
import { Link } from "react-router-dom";
import MealsShop from "./ShopProducts/MealsShop";
import DrinksShop from "./ShopProducts/DrinksShop";
import DeliciousMealsShop from "./ShopProducts/DeliciousMealsShop";
import ShopFilter from "../Shop/Filters/ShopFilter";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../redux/slices/filtersSlice";

const Shop = () => {
  const [currentProductsId, setCurrentProductsId] = useState(1); // 0 || 1 || 2
  const dispatch = useDispatch();

  const chooseDeliciousMealsHandler = () => {
    setCurrentProductsId(0);
    dispatch(filtersActions.resetFilters());
  };

  const chooseDrinksHandler = () => {
    setCurrentProductsId(1);
    dispatch(filtersActions.resetFilters());
  };

  const chooseMealsHandler = () => {
    setCurrentProductsId(2);
    dispatch(filtersActions.resetFilters());
  };

  return (
    <section className="py-48 text-center lg:text-start lg:py-24">
      <div className="">
        <div className="container relative mb-20 text-start">
          <img
            src={shopBackground}
            alt="Fresh and Healthy Food"
            className="w-full rounded-xl h-96 lg:h-screen"
          />
          <div className="absolute top-0 left-0 p-4 lg:w-1/2 lg:left-20 lg:top-1/4">
            <h6 className="mb-4 font-bold text-green-600 uppercase">
              Welcome to Ezobazar shop
            </h6>
            <h2 className="text-lg font-bold text-main-700 lg:text-5xl xl:text-7xl">
              Fresh & Healthy Organic Food
            </h2>
            <p className="relative my-6 mb-32 text-base uppercase lg:pr-4 lg:my-12 lg:text-4xl text-main-700">
              Sale up to <span className="text-orange-600">30% OFF</span>
            </p>
            <p className="mb-4 lg:mb-10 text-main-500 xl:text-main-100">
              Free shipping on all your order. we deliver, you enjoy
            </p>
            <Link
              to="/shop"
              className="flex items-center justify-center gap-4 px-6 py-4 text-white duration-200 rounded-full w-fit lg:px-12 bg-primary-500 hover:bg-primary-700"
            >
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <Advantages />
        </div>

        <div className="container mb-12">
          <h2 className="pb-4 mx-auto mb-2 text-3xl font-bold lg:text-5xl rounded-xl w-fit text-main-700">
            Featured Products
          </h2>
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={chooseDeliciousMealsHandler}
              data-mark="delicious-meals"
              className={`w-10 h-2 rounded-lg duration-300 bg-primary-100 hover:bg-primary-500 ${
                currentProductsId == 0 && "bg-primary-500 w-20"
              }`}
            ></button>
            <button
              onClick={chooseDrinksHandler}
              data-mark="drinks"
              className={`w-10 h-2 rounded-lg duration-300 bg-primary-100 hover:bg-primary-500 ${
                currentProductsId == 1 && "bg-primary-500 w-20"
              }`}
            ></button>
            <button
              onClick={chooseMealsHandler}
              data-mark="meals"
              className={`w-10 h-2 rounded-lg duration-300 bg-primary-100 hover:bg-primary-500 ${
                currentProductsId == 2 && "bg-primary-500 w-20"
              }`}
            ></button>
          </div>
        </div>

        <ShopFilter productId={currentProductsId} />

        <div className="container flex flex-col justify-center gap-4 md:flex-row">
          {currentProductsId == 0 && <DeliciousMealsShop />}
          {currentProductsId == 2 && <MealsShop />}
          {currentProductsId == 1 && <DrinksShop />}
        </div>
      </div>
    </section>
  );
};

export default Shop;
