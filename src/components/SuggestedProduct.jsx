import tempImg from "../assets/images/home_page/suggested_product.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const SuggestedProduct = () => {
  return (
    <div className="relative px-8 py-4 text-center duration-300 bg-white cursor-pointer animate-bounce lg:px-8 lg:pt-8 lg:pb-12 rounded-xl hover:animate-none">
      <img
        src={tempImg}
        alt="temp image"
        className="w-20 h-20 mx-auto lg:w-28 lg:h-28"
      />
      <div>
        <h4 className="py-2 my-2 text-xs font-bold border-b-2 border-orange-500 text-main-700">
          Fresh Orenge
        </h4>
        <div className="my-4">
          <span className="text-lg font-bold lg:text-2xl">$44.60</span>
          <p className="text-xs text-main-500">Free Shipping</p>
        </div>
        <FontAwesomeIcon
          icon={faCartPlus}
          className="absolute w-10 p-2 text-white duration-200 rounded-lg lg:p-4 -bottom-4 lg:-bottom-6 lg:w-14 bg-gradient-to-b from-primary-100 to-primary-500 hover:to-primary-700 left-1/4"
        />
      </div>
    </div>
  );
};

export default SuggestedProduct;
