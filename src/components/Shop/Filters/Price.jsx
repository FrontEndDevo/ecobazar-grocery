import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../redux/slices/filtersSlice";

const Price = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.filters.priceRange.min);
  const maxPrice = useSelector((state) => state.filters.priceRange.max);

  const chooseMinPriceHandler = (e) => {
    dispatch(filtersActions.setMinPrice(+e.target.value));
  };

  const chooseMaxPriceHandler = (e) => {
    dispatch(filtersActions.setMaxPrice(+e.target.value));
  };

  return (
    <div className="text-center">
      <h2 className="mb-2 text-2xl text-indigo-600">Price</h2>
      <form className="px-2 border-indigo-500 rounded-lg border-x-2">
        <div className="flex justify-center gap-6 my-2">
          <div>
            <label
              htmlFor="minPrice"
              className="mr-2 text-sm font-medium text-gray-700"
            >
              Min:
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              className="w-20 h-10 px-3 py-2 text-gray-400 border border-gray-300 rounded-md shadow-sm focus:text-main-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder={minPrice}
              min="1"
              max="200"
              value={minPrice}
              onChange={chooseMinPriceHandler}
            />
          </div>

          <div>
            <label
              htmlFor="maxPrice"
              className="mr-2 text-sm font-medium text-gray-700"
            >
              Max:
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              className="w-20 h-10 px-3 py-2 text-gray-400 border border-gray-300 rounded-md shadow-sm focus:text-main-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder={maxPrice}
              min="1"
              max="200"
              value={maxPrice}
              onChange={chooseMaxPriceHandler}
            />
          </div>
        </div>

        {minPrice > maxPrice && (
          <p className="mt-2 text-sm text-red-500">
            Max price cannot be less than min price.
          </p>
        )}
      </form>
    </div>
  );
};

export default Price;
