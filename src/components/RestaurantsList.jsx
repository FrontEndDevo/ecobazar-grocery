import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import rest_bg from "../assets/images/restaurants/restaurants_list.webp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Advantages from "./Advantages";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect } from "react";
import { restaurantsActions } from "../redux/slices/restaurantsSlice";

const restaurantsSettings = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 16,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
};

const RestaurantsList = () => {
  const restaurants = useSelector((state) => state.restaurants.restaurants);

  const dispatch = useDispatch();

  // Fetch "Restaurants collection" from Firebase DB then store it in Redux store.
  useEffect(() => {
    const fetchRestaurants = async () => {
      const querySnapshot = await getDocs(collection(db, "restaurants"));

      querySnapshot.forEach((doc) => {
        // Store the restaurants in a redux slice.
        dispatch(
          restaurantsActions.addRestaurant({
            restaurant: doc.data().restaurant,
            foodItems: doc.data().foodItems,
          })
        );
      });
    };

    fetchRestaurants();
  }, []);

  const groverRestaurants = (
    <ul className="grid grid-cols-1 gap-2 lg:flex-col lg:flex">
      <Slider {...restaurantsSettings}>
        {restaurants.map((rest, index) => (
          <Link
            key={index}
            className={`p-3 text-center lg:text-start text-2xl duration-300 lg:bg-white text-main-700 lg:text-main-700 lg:hover:text-white lg:hover:bg-primary-500 ${
              index % 2 == 0
                ? "bg-primary-500 hover:bg-white hover:text-main-700 text-white"
                : "bg-white hover:bg-primary-500 hover:text-white text-main-700"
            }`}
            to={rest.restaurantName.toLowerCase().replace(" ", "-")}
          >
            {rest.restaurantName}
          </Link>
        ))}
      </Slider>
    </ul>
  );

  return (
    <div className="mx-6 lg:mx-8">
      <div className="flex flex-col gap-8 lg:flex-row-reverse">
        <div
          className={`relative ${
            restaurants.length != 0 ? "basis-5/6" : "basis-full"
          }`}
        >
          <img
            src={rest_bg}
            alt="Fresh & Health Organic Food Image"
            className="w-full h-96 lg:h-screen"
          />
          <div className="absolute w-1/2 bottom-4 left-4 lg:top-1/4 lg:left-12">
            <h2 className="text-xl font-bold text-white lg:text-7xl">
              Fresh & Healthy Organic Food
            </h2>
            <p className="relative px-4 my-6 lg:my-12 text-xl lg:text-4xl uppercase text-main-100 before:absolute before:bg-green-400 before:top-0 before:left-0 before:w-1 before:rounded-full before:h-[130%]">
              Sale Up to <span className="text-white">48%</span> off
            </p>
            <Link
              to="/shop"
              className="flex items-center justify-center gap-4 px-6 py-4 text-white duration-200 rounded-full w-fit lg:px-12 bg-primary-500 hover:bg-primary-700"
            >
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        {restaurants.length != 0 && (
          <aside className="bg-white border-2 basis-1/6">
            {groverRestaurants}
          </aside>
        )}
      </div>
      <Advantages />
    </div>
  );
};

export default RestaurantsList;
