import ecobazarImg from "../assets/images/ezobazar_grocery.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navbarLinks = ["home", "restaurants", "shop", "about", "contact"];
const Navbar = () => {
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  const navbarLists = navbarLinks.map((item, index) => (
    <li
      key={index}
      className={`text-base duration-200 hover:text-primary-500 font-bold capitalize ${
        item == location.pathname.slice(1) ? "text-primary-500" : ""
      } ${index == 0 && location.pathname == "/" ? "text-primary-500" : ""}`}
    >
      <Link to={`/${index == 0 ? "" : item}`}>{item}</Link>
    </li>
  ));

  return (
    <nav className="fixed z-50 w-full py-4 text-white lg:py-0 bg-main-700">
      <div className="container relative flex flex-col items-center justify-between lg:flex-row">
        <div>
          <Link
            to="/"
            className="flex flex-row-reverse items-center justify-center gap-2 my-4 lg:flex-row lg:justify-start"
          >
            <img src={ecobazarImg} alt="Ecobazar logo" />
            <h1 className="text-4xl font-bold">Ecobazar</h1>
          </Link>
        </div>

        <div className="absolute right-0 z-50 flex flex-col items-end px-4 lg:relative gap-7 top-8 lg:top-0">
          <div
            onClick={showMenuHandler}
            className={`flex duration-700 ease-in-out gap-2 cursor-pointer lg:hidden ${
              showMenu ? "-rotate-[450deg]" : ""
            }`}
          >
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
          </div>
          <ul
            className={`flex flex-col items-center px-20 py-4 before:w-8 relative before:absolute before:right-4 before:-top-2 before:h-8 lg:before:hidden before:bg-main-700 before:rotate-45 duration-200 bg-main-700 shadow-lg lg:shadow-none shadow-primary-100 rounded-xl text-start lg:bg-transparent gap-14 lg:flex-row lg:scale-100 lg:translate-y-0 ${
              showMenu ? "scale-100 translate-y-4" : "scale-0 -translate-y-8"
            }`}
          >
            {navbarLists}
          </ul>
        </div>

        <div className="relative mt-4 lg:mt-0">
          <input
            type="text"
            name="search"
            id="search"
            className="w-[94vw] py-4 pl-10 pr-16 outline-none lg:w-full rounded-xl text-main-700 placeholder:text-main-700"
            placeholder="Search"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute w-4 text-main-500 left-4 top-1/3"
          />
          <button className="absolute w-10 px-1 text-2xl border-l right-4 text-main-700 top-1/4">
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
          <span className="absolute px-3 py-1 text-white rounded-full shadow-lg bg-primary-700 -right-2 -top-2 shadow-primary-100">
            2
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
