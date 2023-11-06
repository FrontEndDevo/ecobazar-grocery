import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Benefits from "../components/Benefits";
import WhyChooseUs from "../components/WhyChooseUs";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import MealsCategories from "../components/MealsCategories";
import Statistics from "../components/Statistics";
import OrganicFoodFeature from "../components/OrganicFoodFeature";
import FoodProducts from "../components/FoodProducts";
import DeliciousMeals from "../components/DeliciousMeals";
import AllProducts from "../components/AllProducts";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AllProducts />
      <Benefits />
      <DeliciousMeals />
      <WhyChooseUs />
      <Delivery />
      <MealsCategories />
      <Statistics />
      <OrganicFoodFeature />
      <FoodProducts />
      <Footer />
    </>
  );
};

export default HomePage;
