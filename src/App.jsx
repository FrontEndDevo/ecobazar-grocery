import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const homeRouter = (
  <>
    <Navbar />
    <Header />
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
