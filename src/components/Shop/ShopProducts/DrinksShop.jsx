import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const DrinksShop = ({ paginationIndices }) => {
  // Get (drinks) from Redux store.
  const drinks = [];
  const storedDrinks = useSelector((state) => state.drinks);
  storedDrinks.allDrinks.forEach((e) =>
    e.drinks.forEach((ele) => drinks.push(ele))
  );

  const drinksError = useSelector((state) => state.errors.allErrors).filter(
    (item) => item.errorType == "drinks"
  )[0];

  // Render all drinks:
  const renderedDrinks = (
    <ul className="flex flex-wrap items-center justify-center gap-6">
      {drinks
        .slice(paginationIndices.start, paginationIndices.end)
        .map((drink, index) => {
          const drinkName =
            drink.strDrink.length > 20
              ? drink.strDrink.slice(0, 20) + "..."
              : drink.strDrink;

          return (
            <li
              key={index}
              className="relative w-[300px] h-fit border-2 rounded-lg duration-200 hover:border-2 hover:border-primary-500"
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full rounded-t-lg h-2/3"
              />
              <div className="flex justify-between gap-2 px-2 py-2">
                <div>
                  <div>
                    <h3 className="mb-4 text-lg font-bold">{drinkName}</h3>
                    <h4 className="text-base text-orange-600">
                      {drink.strCategory}
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-bold text-green-800">
                    ${drink.price}
                  </span>
                  <button className="px-3 py-1 text-2xl text-white duration-100 bg-green-500 rounded-full hover:-translate-y-2">
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );

  return (
    <section>
      <div>
        {drinksError && (
          <p className="text-xl font-bold text-center text-red-600">
            {drinksError.errorMessage}
          </p>
        )}

        {drinks.length == 0 && !drinksError && (
          <p className="flex items-center justify-center gap-4 text-xl font-bold text-green-600">
            <FontAwesomeIcon icon={faSpinner} spinPulse /> Loading Drinks...
          </p>
        )}

        {drinks.length != 0 && !drinksError && (
          <div>
            <p className="mb-4 text-base italic font-bold text-main-700">
              Available drinks &lt;
              <span className="text-xl text-orange-600"> {drinks.length} </span>
              &gt;
            </p>
          </div>
        )}
      </div>
      {renderedDrinks}
    </section>
  );
};

export default DrinksShop;
