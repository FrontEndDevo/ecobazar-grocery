import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { deliciousMealsActions } from "../redux/slices/deliciousMealsSlice";
import { errorsActions } from "../redux/slices/errorsSlice";
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "-300px",
  slidesToShow: 3,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 1500,
  rows: 2,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "100px",
        slidesToShow: 2,
        rows: 2,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: "90px",
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
      },
    },
  ],
};

const DeliciousMeals = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const deliciousMealsFromReduxStore = useSelector(
    (state) => state.deliciousMeals.deliciousMeals
  );

  useEffect(() => {
    // Check first if the (Delicious Meals) are exist or not.
    if (deliciousMealsFromReduxStore.length == 0) {
      const fetchDeliciousMeals = async () => {
        await axios
          .get(import.meta.env.VITE_DELICIOUS_MEALS)
          .then((data) => {
            dispatch(deliciousMealsActions.addDeliciousMeals(data.data.meals));
            setError(false);
          })
          .catch((err) => {
            setError(true);
            dispatch(
              errorsActions.addError({
                errorType: "deliciousMeals",
                errorMessage: `Something went wrong! Error:${err}`,
              })
            );
          });
      };
      fetchDeliciousMeals();
    }
  }, [deliciousMealsFromReduxStore]);

  const renderAllDeliciousMeals = (
    <ul>
      <Slider {...settings}>
        {deliciousMealsFromReduxStore.map((meal, i) => (
          <li
            key={i}
            className="text-center bg-white border-2 rounded-t-lg outline-none border-primary-100"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-t-lg"
            />
            <div className="py-2 font-bold">
              <h2 className="mb-2 text-lg lg:text-2xl text-main-700">
                {meal.strMeal}
              </h2>
              <p className="text-sm">
                ID:
                <span className="text-teal-800">{meal.idMeal}</span>
              </p>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );

  return (
    <section className="bg-slate-50">
      <div className="container py-20">
        <div className="px-10 text-center capitalize xl:px-96">
          <p className="text-sm font-bold lg:text-lg text-primary-500">
            Shop for
          </p>
          <h2 className="mb-6 text-3xl font-bold lg:text-5xl text-main-700">
            delicious meals
          </h2>
        </div>
        {error && (
          <p className="text-xl font-bold text-center text-red-600">
            oops..Something went wrong!
          </p>
        )}
        {deliciousMealsFromReduxStore.length == 0 && !error && (
          <p className="flex items-center justify-center gap-4 text-xl font-bold text-green-600">
            <FontAwesomeIcon icon={faSpinner} spinPulse /> Loading...
          </p>
        )}
        <div className="flex justify-center animate-pulse md:animate-none md:justify-end">
          <Link
            to="/shop"
            className="px-6 py-2 mb-10 text-xl duration-300 bg-transparent border-2 border-primary-500 text-primary-500 hover:text-white lg:w-fit rounded-xl hover:bg-primary-500"
          >
            shop now
          </Link>
        </div>
        {!error &&
          deliciousMealsFromReduxStore.length != 0 &&
          renderAllDeliciousMeals}
      </div>
    </section>
  );
};

export default DeliciousMeals;
