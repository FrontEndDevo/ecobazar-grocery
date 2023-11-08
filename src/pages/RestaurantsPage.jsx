import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestaurantsList from "../components/RestaurantsList";
const RestaurantsPage = () => {
  return (
    <>
      <Navbar />
      <main className="pb-20 pt-60 lg:pt-28 lg:pb-12 bg-slate-50">
        <RestaurantsList />
      </main>
      ;
      <Footer />
    </>
  );
};

export default RestaurantsPage;
