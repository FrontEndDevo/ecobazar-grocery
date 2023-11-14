import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fruitsActions } from "../redux/slices/fruitsSlice";
import { vegetablesActions } from "../redux/slices/vegetablesSlice";
import { useEffect } from "react";
import { db } from "../config/firebase";

const kindsOfProducts = [
  "vegetable",
  "fruit",
  "meat & fish",
  "drinks",
  "view all",
];
const AllProducts = () => {
  const fruits = useSelector((state) => state.fruits);
  const vegetables = useSelector((state) => state.vegetables);

  const dispatch = useDispatch();

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

  const allKindsOfProducts = (
    <ul className="flex items-center justify-center gap-10">
      {kindsOfProducts.map((item, i) => (
        <li key={i}>
          <button className="text-lg capitalize duration-300 text-main-100 hover:text-green-700">
            {item}
          </button>
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
