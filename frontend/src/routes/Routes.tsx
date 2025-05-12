import { Suspense, lazy } from "react";
import Skeleton from "react-loading-skeleton";
import { Routes, Route } from "react-router-dom";
// Lazy loading components

const Home = lazy(() => import("../pages/homeComponent/Home"));
const View = lazy(() => import("../pages/View"));
const Rooms = lazy(() => import("../pages/Rooms"));
const Restaurant = lazy(() => import("../pages/Restaurant"));
const Nearby = lazy(() => import("../pages/Nearby"));
const Contact = lazy(() => import("../pages/Contact"));
export default function AppRoutes() {
  return (
    <Suspense fallback={<Skeleton count={5} />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/360-walk-through" element={<View />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="restaurant-and-bar" element={<Restaurant />} />
        <Route path="/nearby-places" element={<Nearby />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
