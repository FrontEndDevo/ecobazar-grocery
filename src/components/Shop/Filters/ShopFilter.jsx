import Letter from "./Letter";
import Price from "./Price";
import Category from "./Category";
import Area from "./Area";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../../redux/slices/filtersSlice";
import ActiveFilters from "./ActiveFilters";

const ShopFilter = (props) => {
  const dispatch = useDispatch();
  const resetFiltersHandler = () => {
    dispatch(filtersActions.resetFilters());
  };

  return (
    <section className="relative py-6 my-6 bg-neutral-100">
      <div className="container flex flex-col items-center justify-between lg:items-center lg:flex-row">
        <div className="flex flex-wrap items-center gap-8 mx-4 mb-8 lg:mb-0">
          <Letter />
          {props.productId != 0 && <Category productId={props.productId} />}
          {props.productId == 2 && <Area productId={props.productId} />}
        </div>
        <div className="px-4">
          <Price />
        </div>
      </div>

      <div
        className="absolute cursor-pointer top-4 right-4"
        onClick={resetFiltersHandler}
      >
        <span class="relative flex h-5 w-5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
        </span>
      </div>
      <div className="mx-4 lg:mx-0">
        <ActiveFilters />
      </div>
    </section>
  );
};

export default ShopFilter;
