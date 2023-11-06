import { Link } from "react-router-dom";

const kindsOfProducts = [
  "vegetable",
  "fruit",
  "meat & fish",
  "drinks",
  "view all",
];
const AllProducts = () => {
  const allKindsOfProducts = (
    <ul className="flex items-center justify-center gap-10">
      {kindsOfProducts.map((item, i) => (
        <li
          key={i}
          className="text-lg capitalize duration-300 text-main-100 hover:text-green-700"
        >
          <Link>{item}</Link>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="py-20 bg-green-50">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-10 font-bold capitalize text-7xl">
            Introducing our products
          </h2>
          {allKindsOfProducts}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
