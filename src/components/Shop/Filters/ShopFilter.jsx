import Letter from "./Letter";
import Price from "./Price";
import Category from "./Category";
import Area from "./Area";

const ShopFilter = (props) => {
  return (
    <section className="py-6 my-6 bg-neutral-100">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Letter />
          {props.productId != 0 && <Category productId={props.productId} />}
          {props.productId == 2 && <Area productId={props.productId} />}
        </div>
        <div>
          <Price />
        </div>
      </div>
    </section>
  );
};

export default ShopFilter;
