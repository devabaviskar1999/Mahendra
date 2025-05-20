import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FoodType from "./FoodType";
const RestaurentPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // delay gives React time to mount the element
    }
  }, [location]);
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-black text-white text-center mb-[-20px]">
      <FoodType
        id="veg"
        title="veg"
        targetId="chinese"
        heading="Our signatures Vegetarian Dishes"
      />
      <FoodType
        id="non-veg"
        title="non-veg"
        targetId="fish"
        heading="For The Meal Loversss"
      />
      <FoodType
        id="chinese"
        title="chinese"
        targetId="veg"
        heading="Experience Chinese Flavour At Our Table"
      />
      <FoodType
        id="fish"
        title="fish"
        targetId="non-veg"
        heading="Fresh Fish, Perfectly Prepared"
      />
    </div>
  );
};

export default RestaurentPage;
