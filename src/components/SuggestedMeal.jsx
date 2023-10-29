import tempMeal from "../assets/images/home_page/header/temp_meal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const SuggestedMeal = () => {
  return (
    <div className="relative px-4 py-6 text-center duration-300 bg-white cursor-pointer lg:px-8 animate-bounce hover:animate-none rounded-xl">
      <div className="capitalize">
        <h3 className="mb-2 text-lg font-bold text-main-700">Melting Cheese</h3>
        <h6 className="text-xs text-main-500">Red Stovery</h6>
      </div>
      <img
        src={tempMeal}
        alt="temp meal"
        className="w-20 h-20 mx-auto my-4 lg:w-28 lg:h-28"
      />
      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="flex items-center gap-1 text-base">
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-400" />
            3.8
          </span>
          <span className="text-2xl font-bold">$49.66</span>
        </div>
        <button className="w-12 px-3 py-1 text-2xl text-white duration-200 rounded-lg bg-gradient-to-b from-primary-100 to-primary-500 hover:to-primary-700">
          +
        </button>
      </div>
    </div>
  );
};

export default SuggestedMeal;
