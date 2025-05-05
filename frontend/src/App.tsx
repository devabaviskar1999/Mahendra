import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import View from "./pages/view";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import Nearby from "./pages/Nearby";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/360-walk=through" element={<View />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="/nearby-places" element={<Nearby />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
