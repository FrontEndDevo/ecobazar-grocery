/* eslint-disable no-undef */
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Benefits from "./components/Benefits";
import WhyChooseUs from "./components/WhyChooseUs";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restaurantsActions } from "./redux/slices/restaurantsSlice.js";
const homeRouter = (
  <>
    <Navbar />
    <Header />
    <Benefits />
    <WhyChooseUs />
    <Delivery />
    <Footer />
  </>
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Store the Restaurants.
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "restaurants"));

      querySnapshot.forEach((doc) => {
        dispatch(
          restaurantsActions.addRestaurant({
            restaurant: doc.data().restaurant,
            foodItems: doc.data().foodItems,
          })
        );
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={homeRouter} />
      </Routes>
    </>
  );
};

export default App;
