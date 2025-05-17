import  { useEffect, useRef } from 'react';
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
       <FoodType id='veg' title='veg' targetId='non-veg'/>
       <FoodType id='non-veg' title='non-veg' targetId='veg'/>
       <FoodType id='chinese' title='chinese' targetId='non-veg'/>
       <FoodType id='fish' title='fish' targetId='veg'/>
        </div>
    );
}

export default RestaurentPage;
