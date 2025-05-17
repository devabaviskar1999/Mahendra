import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FoodType from './FoodType';
const RestaurentPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the element when the hash changes
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-black text-white text-center">
       <FoodType id='veg' title='veg' targetId='chinese' heading='Our signatures Vegetarian Dishes'/>
       <FoodType id='non-veg' title='non-veg' targetId='fish' heading='For The Meal Loversss'/>
       <FoodType id='chinese' title='chinese' targetId='veg' heading='Experience Chinese Flavour At Our Table'/>
       <FoodType id='fish' title='fish' targetId='non-veg' heading='Fresh Fish, Perfectly Prepared'/>
        </div>
    );
}

export default RestaurentPage;
