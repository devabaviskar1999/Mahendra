import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// Lazy loading components

const Home = lazy(() => import("../pages/homeComponent/Home"));
const View = lazy(() => import("../pages/View"));
const Rooms = lazy(() => import("../pages/rooms/Rooms"));
const Restaurant = lazy(() => import("../pages/Restaurant"));
const Nearby = lazy(() => import("../pages/Nearby"));
const Contact = lazy(() => import("../pages/Contact"));
const Gallery = lazy(() => import("../pages/Gallery"));
export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/360-walk-through" element={<View />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="restaurant-and-bar" element={<Restaurant />} />
      <Route path="/nearby-places" element={<Nearby />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
