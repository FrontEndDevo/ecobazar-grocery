import header from "../assets/images/home_page/header/header.webp";
import temp_header from "../assets/images/home_page/header/temp_header_image_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import SuggestedMeal from "./SuggestedMeal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [applyEffect, setApplyEffect] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setApplyEffect((prevState) => !prevState);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header className="py-40 bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-32 lg:flex-row-reverse">
        <div className="relative basis-1/3">
          <img src={header} alt="header chef" className="w-full" />
          <div className="absolute -bottom-24 left-2 lg:-left-36 lg:bottom-44">
            <SuggestedMeal />
          </div>
          <div className="absolute top-0 flex gap-4 px-4 py-2 bg-white rounded-lg cursor-progress animate-pulse right-2 md:top-24 md:-right-8 lg:-right-8 xl:-right-4 lg:top-16 xl:top-24">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className="w-10 text-primary-500"
            />
            <div>
              <p className="font-bold text-main-500">Delivary</p>
              <span className="text-main-100">30 Min</span>
            </div>
          </div>
        </div>

        <div className="basis-1/2">
          <button
            className={`flex items-center justify-center gap-2 px-6 py-2 mx-auto duration-1000 rounded-full text-main-500 lg:m-0 ${
              applyEffect ? "bg-primary-700" : "bg-primary-100"
            }`}
          >
            More than Faster
            <img src={temp_header} alt="More than Faster" className="w-8" />
          </button>

          <div className="my-8">
            <h2 className="text-2xl font-bold text-center text-main-700 lg:text-5xl lg:text-start xl:text-7xl">
              Groceries delivered in as little as{" "}
              <span className="text-primary-500">2 hours</span>
            </h2>
            <p className="my-4 text-base text-center lg:text-start lg:text-lg">
              Grocen atssures fresh grocery every morning to your family without
              getting out in this pandemic.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 mx-4 lg:gap-20 lg:flex-row">
            <Link
              to="/shop"
              className="w-full px-8 py-4 text-center text-white duration-200 bg-primary-500 rounded-xl hover:bg-primary-700"
            >
              Order Now
            </Link>
            <button className="flex flex-row-reverse items-center justify-center w-full gap-6 p-2 font-bold duration-300 border border-yellow-400 border-solid rounded-lg lg:border-transparent hover:border-yellow-400">
              Order Process
              <div className="p-6 bg-white rounded-full">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="w-6 h-6 text-yellow-400 p-106"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
