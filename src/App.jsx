import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Benefits from "./components/Benefits";

const homeRouter = (
  <>
    <Navbar />
    <Header />
    <Benefits />
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
