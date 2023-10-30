import { Link } from "react-router-dom";
import meals from "../assets/images/home_page/FoodProducts/meals.webp";
import rests from "../assets/images/home_page/FoodProducts/restaurants.webp";
import drinks from "../assets/images/home_page/FoodProducts/drinks.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const FoodProducts = () => {
  // Create variables for classes to keep JSX lean as possible (in order of structure of JSX).
  const divContainerClasses = "relative font-bold rounded-lg";

  const imageClasses = "w-full rounded-lg";

  const textContentClasses = "absolute left-8 top-2";

  const mainText =
    "my-1 text-2xl capitalize md:text-6xl lg:text-3xl md:my-4 xl:text-5xl";

  const secondaryText = "text-base uppercase md:text-xl";

  const buttonClasses =
    "flex items-center text-xs md:text-base justify-center gap-4 px-4 md:px-8 py-2 font-bold text-green-500 duration-200 bg-white rounded-full hover:animate-pulse w-fit absolute";

  return (
    <section className="flex flex-col-reverse flex-wrap gap-6 px-4 py-10 lg:grid lg:grid-cols-3 text-main-700">
      <div className={divContainerClasses}>
        <img src={meals} alt="Meals background" className={imageClasses} />
        <div className={textContentClasses}>
          <h6 className={secondaryText}>100% Organic</h6>
          <h2 className={mainText}>Delicious Meals</h2>
        </div>
        <Link
          to="/shop"
          className={`${buttonClasses} bottom-4 right-4 lg:left-4`}
        >
          Shop Now <FontAwesomeIcon icon={faArrowRight} beat />
        </Link>
      </div>

      <div className={divContainerClasses}>
        <img src={rests} alt="Restaurant background" className={imageClasses} />
        <div className={`${textContentClasses} md:text-center`}>
          <h2 className={mainText}>best restaurants</h2>
          <h6 className={secondaryText}>in the world</h6>
        </div>
        <Link to="/restaurants" className={`${buttonClasses} bottom-4 right-4`}>
          Explore Now <FontAwesomeIcon icon={faArrowRight} beat />
        </Link>
      </div>

      <div className={`${divContainerClasses} text-white`}>
        <img src={drinks} alt="Drinks background" className={imageClasses} />
        <div
          className={`${textContentClasses} pr-0 tracking-wide lg:pr-40 2xl:pr-80`}
        >
          <h6 className={secondaryText}>drink sale</h6>
          <h2 className={mainText}>Water & Soft Drink</h2>
        </div>
        <Link to="/shop" className={`${buttonClasses} bottom-6 right-4`}>
          Shop Now <FontAwesomeIcon icon={faArrowRight} beat />
        </Link>
      </div>
    </section>
  );
};

export default FoodProducts;
