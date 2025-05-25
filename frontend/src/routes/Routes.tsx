import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import RestaurentPage from "../pages/restaurantPage/RestaurentPage";
import BarPage from "../pages/barPage/BarPage";
// Lazy loading components

const Home = lazy(() => import("../pages/homeComponent/Home"));
const View = lazy(() => import("../pages/View"));
const Rooms = lazy(() => import("../pages/rooms/Rooms"));
const Restaurant = lazy(() => import("../pages/restaurant-bar/RestaurantBar"));
const Nearby = lazy(() => import("../pages/nearby/Nearby"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const Hall = lazy(() => import("../pages/hall/Hall"));
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
      <Route path="/hall" element={<Hall />} />
      <Route path="/restaurant" element={<RestaurentPage />} />
      <Route path="/bar" element={<BarPage />} />
      <Route
        path="*"
        element={
          <h1 className="text-3xl font-semibold text-black text-center w-full mt-10">
            Page is not found
          </h1>
        }
      />
    </Routes>
  );
}
