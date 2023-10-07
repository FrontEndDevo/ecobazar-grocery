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
  useEffect(() => {
    // Store the Restaurants.
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "restaurants"));
      const arr = [];

      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });

      console.log(arr);
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
