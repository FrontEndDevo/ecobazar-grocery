import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import error from "../assets/images/404/error.webp";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <main className="container flex flex-col items-center justify-center px-4 pb-20 text-center pt-60 lg:py-40 lg:text-start">
        <img
          src={error}
          alt="Not Found image"
          className="lg:h-[30rem] lg:w-[40rem]"
        />
        <h2 className="mt-10 text-2xl font-bold capitalize lg:text-5xl text-main-700">
          Oops! page not found
        </h2>
        <p className="my-10 text-sm lg:text-lg text-main-100">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </p>
        <Link
          to="/"
          className="w-full px-8 py-4 text-white duration-200 lg:w-fit bg-primary-500 rounded-xl hover:bg-primary-700"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default PageNotFound;
