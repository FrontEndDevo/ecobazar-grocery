import Letter from "./Letter";
import Price from "./Price";
import Category from "./Category";

const ShopFilter = () => {
  return (
    <section className="pt-6 pb-24 bg-neutral-100">
      <div className="container flex items-center justify-between gap-20">
        <div className="flex items-center gap-10">
          <Letter />
        </div>
        <div>
          <Price />
        </div>
      </div>
    </section>
  );
};

export default ShopFilter;
