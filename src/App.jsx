import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Benefits from "./components/Benefits";
import WhyChooseUs from "./components/WhyChooseUs";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";

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

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={homeRouter} />
      </Routes>
    </>
  );
}
