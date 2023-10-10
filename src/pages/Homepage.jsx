import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Benefits from "../components/Benefits";
import WhyChooseUs from "../components/WhyChooseUs";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import MealsCategories from "../components/MealsCategories";
import Statistics from "../components/Statistics";
import OrganicFoodFeature from "../components/OrganicFoodFeature";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Benefits />
      <WhyChooseUs />
      <Delivery />
      <MealsCategories />
      <Statistics />
      <OrganicFoodFeature />
      <Footer />
    </>
  );
};

export default HomePage;
