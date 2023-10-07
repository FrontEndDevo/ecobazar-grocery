import { Link } from "react-router-dom";
import ezobazarImg from "../assets/images/ezobazar_grocery.webp";
const footerCompanyLinks = [
  "Contact",
  "About",
  "Blog",
  "All Products",
  "Locations Map",
];

const footerServicesLinks = [
  "Order tracking",
  "Wish List",
  "Account",
  "Terms Conditions",
];
const Footer = () => {
  const footerCompanyLists = footerCompanyLinks.map((item, index) => (
    <li key={index} className="py-2 text-base duration-200 hover:underline">
      <Link to={`/${item.toLocaleLowerCase().replace(" ", "-")}`}>{item}</Link>
    </li>
  ));

  const footerServicesLists = footerServicesLinks.map((item, index) => (
    <li key={index} className="py-2 text-base duration-200 hover:underline">
      <Link to={`/${item.toLocaleLowerCase().replace(" ", "-")}`}>{item}</Link>
    </li>
  ));

  return (
    <footer className="text-white bg-main-700">
      <div className="container">
        <div className="flex flex-col gap-20 py-10 text-center lg:text-start xl:flex-row lg:gap-60">
          <div className="basis-1/2">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 my-4 lg:justify-start"
            >
              <img src={ezobazarImg} alt="Ecobazar logo" />
              <h1 className="text-4xl font-bold ">Ecobazar</h1>
            </Link>
            <p className="px-2 text-base">
              Fast delivery, which is active all over the world, serves with
              many transportation vehicles.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-xl font-bold ">Company</h4>
              <ul>{footerCompanyLists}</ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold ">Services</h4>
              <ul>{footerServicesLists}</ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold ">Get in Touch</h4>
              <p className="text-base">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 py-6 border-t-2 md:flex-row">
          <p>
            All Rights Reserved &copy;{" "}
            <Link to="https://github.com/FrontEndDevo" target="_blank">
              FrontEndDevo 2023
            </Link>
          </p>
          <div className="flex gap-4">
            <Link
              to="/terms-and-conditions"
              className="py-2 text-base duration-200 hover:underline"
            >
              Terms Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="py-2 text-base duration-200 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
