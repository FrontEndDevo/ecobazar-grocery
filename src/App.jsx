/* eslint-disable no-undef */
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import PageNotFound from "./pages/PageNotFound";
import RestaurantsPage from "./pages/RestaurantsPage";
import ShopPage from "./pages/ShopPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
