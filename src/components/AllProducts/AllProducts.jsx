import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { fruitsActions } from "../../redux/slices/fruitsSlice";
import { vegetablesActions } from "../../redux/slices/vegetablesSlice";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import RenderedProducts from "./RenderedProducts";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [currentKindOfProducts, setCurrentKindOfProducts] = useState(3);

  const fruits = useSelector((state) => state.fruits.fruits);
  const vegetables = useSelector((state) => state.vegetables.vegetables);
  const deliciousMeals = useSelector(
    (state) => state.deliciousMeals.deliciousMeals
  );
  const reduxMeals = useSelector((state) => state.meals.allMeals);
  const meals = [];
  reduxMeals.forEach((e) => e.meals.forEach((ele) => meals.push(ele)));

  const dispatch = useDispatch();

  // Fetching all products if don't exist.
  useEffect(() => {
    if (fruits.length == 0) {
      // Fetch "Fruits collection" from Firebase DB then store it in Redux store.
      const fetchFruits = async () => {
        const querySnapshot = await getDocs(collection(db, "fruits"));
        querySnapshot.forEach((doc) => {
          // Store the fruits in a redux slice.
          dispatch(
            fruitsActions.addNewFruit({
              fruitName: doc.data().name,
              fruitDetails: doc.data(),
            })
          );
        });
      };

      fetchFruits();
    }

    if (vegetables.length == 0) {
      // Fetch "Vegetables collection" from Firebase DB then store it in Redux store.
      const fetchVegetables = async () => {
        const querySnapshot = await getDocs(collection(db, "vegetables"));
        querySnapshot.forEach((doc) => {
          // Store the vegetables in a redux slice.
          dispatch(
            vegetablesActions.addNewVegetable({
              vegetablesName: doc.data().name,
              vegetablesDetails: doc.data(),
            })
          );
        });
      };

      fetchVegetables();
    }
  }, []);

  const chooseTypeOfProductsHandler = (id) => {
    setCurrentKindOfProducts(id);
  };

  // Prepare each kind of products (fruits, meals, ...etc):
  const kindsOfProducts = [
    {
      id: 1,
      type: "vegetable",
      target: vegetables,
    },
    {
      id: 2,
      type: "fruit",
      target: fruits,
    },
    {
      id: 3,
      type: "meat & fish",
      target: [...deliciousMeals], // because these will be fetched on this page.
    },
    {
      id: 4,
      type: "drinks",
      target: [],
    },
  ];

  const productsTypeClasses =
    "text-base capitalize duration-300 font-bold hover:text-green-700";

  const allKindsOfProducts = (
    <ul className="flex flex-wrap items-center justify-center gap-10">
      {kindsOfProducts.map((item, i) => (
        <li key={i} onClick={() => chooseTypeOfProductsHandler(item.id)}>
          <button
            className={`${productsTypeClasses} ${
              item.id == currentKindOfProducts
                ? "text-green-700"
                : "text-main-100"
            }`}
          >
            {item.type}
          </button>
        </li>
      ))}
      <Link to="/shop" className={`${productsTypeClasses} text-main-100`}>
        view all
      </Link>
    </ul>
  );

  // Still fetching Drinks and find a solution for fruits array (no images).
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-10 text-3xl font-bold capitalize lg:text-7xl">
            Introducing our products
          </h2>
          {allKindsOfProducts}
        </div>
        <RenderedProducts
          productType={
            kindsOfProducts.filter((obj) => obj.id == currentKindOfProducts)[0]
          }
        />
      </div>
    </section>
  );
};

export default AllProducts;
