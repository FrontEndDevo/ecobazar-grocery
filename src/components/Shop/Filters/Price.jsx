import { useState } from "react";

const Price = () => {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(200);

  const chooseMinPriceHandler = (e) => {
    setMinPrice(+e.target.value);
  };

  const chooseMaxPriceHandler = (e) => {
    setMaxPrice(+e.target.value);
  };

  const submitPriceFormHandler = (e) => {
    e.preventDefault();
    if (!minPrice || !maxPrice || minPrice > maxPrice) {
      // Handle validation errors
      console.error("Invalid price range!");
      return;
    }
    // Submit price range data
    console.log(`Price range: ${minPrice} - ${maxPrice}`);
  };

  return (
    <div className="text-center">
      <h2 className="mb-2 text-2xl text-indigo-600">Price</h2>
      <form
        onSubmit={submitPriceFormHandler}
        className="px-2 border-indigo-500 rounded-lg border-x-2"
      >
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
              className="w-20 h-10 px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder={minPrice}
              min="1"
              max="200"
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
              className="w-20 h-10 px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder={maxPrice}
              min="1"
              max="200"
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
