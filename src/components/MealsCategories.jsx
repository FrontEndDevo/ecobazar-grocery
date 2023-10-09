import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";

const MealsCategories = () => {
  const [mealsCategories, setMealsCategories] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMealsCategories = async () => {
      await axios
        .get(import.meta.env.VITE_LATEST_MEALS_CATEGORIES)
        .then((data) => {
          setMealsCategories(data?.data.categories);
          setError(false);
        })
        .catch((err) => {
          setError(true);
        });
    };
    fetchMealsCategories();
  }, []);

  console.log(mealsCategories);

  return (
    <section className="py-20 bg-slate-50">
      <h2 className="mb-12 text-5xl font-bold text-center capitalize text-main-700">
        latest categories of meals
      </h2>
      {error && (
        <p className="text-xl font-bold text-center text-red-600">
          oops..Something went wrong!
        </p>
      )}
      {mealsCategories.length == 0 && !error && (
        <p className="flex items-center justify-center gap-4 text-xl font-bold text-green-600">
          <FontAwesomeIcon icon={faSpinner} spinPulse /> Loading...
        </p>
      )}
      {mealsCategories.length != 0 && !error && (
        <div className="container grid grid-cols-4 gap-12">
          {mealsCategories.map((cat, i) => (
            <div key={cat.i} className="bg-white rounded-lg">
              <img
                src={cat.strCategoryThumb}
                alt={cat.strCategory}
                className="w-full"
              />
              <div className="p-4">
                <h4 className="px-4 mx-auto font-bold border-b-2 border-red-500 rounded w-fit text-main-700">
                  {cat.strCategory}
                </h4>
                <p className="my-4 text-justify">
                  {cat.strCategoryDescription.length <= 200
                    ? cat.strCategoryDescription
                    : cat.strCategoryDescription.slice(0, 200) + "..."}
                </p>
                <button className="flex items-center justify-center w-full gap-4 p-2 font-bold duration-200 text-primary-500 hover:text-primary-700 hover:bg-primary-100 rounded-xl lg:w-fit">
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MealsCategories;
