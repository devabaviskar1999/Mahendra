import { useEffect, useState } from "react";
import ChildFoodType from "./ChildFoodType";
import Fish from "./Fish";
import Chinese from "./Chinese";
import NonVeg from "./NonVeg";
import Veg from "./Veg";

interface FoodTypeProps {
  heading: string;
  title: string;
  id: string;
  targetId: string;
}
interface FoodDataType {
  imgUrl: string;
  itemName: string;
  qty: string;
  rate: string;
  ingredients: string;
  description: string;
  rating: number;
  reviews: number;
}

const FoodType = ({ title, id, targetId, heading }: FoodTypeProps) => {
  const [data, setData] = useState<FoodDataType[]>([]);
  useEffect(() => {
    if (title === "fish") {
      setData(Fish);
    } else if (title === "chinese") {
      setData(Chinese);
    } else if (title === "non-veg") {
      setData(NonVeg);
    } else {
      setData(Veg);
    }
  }, []);
 console.log("data", data);
  const handleScroll = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id={id}
      className="w-full min-h-screen scroll-mt-16 lg:scroll-mt-24 flex flex-col items-center bg-black text-white text-center p-2 lg:p-4"
    >
      <h1 className="text-3xl font-bold mb-6">{`${heading}(${title})`}</h1>

      {/* Add example ChildFoodType entries */}

      {data.map((item, index) => (
        <ChildFoodType
          key={index}
          imgUrl={item.imgUrl}
          itemName={item.itemName}
          qty={item.qty}
          rate={item.rate}
          ingredients={item.ingredients}
          description={item.description}
          rating={item.rating}
          reviews={item.reviews}
        />
      ))}

      <button
        onClick={() => handleScroll(targetId)}
        className="mt-8 px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition hover:cursor-pointer delay-100 ease-in-out"
      >
        Scroll to {targetId}
      </button>
    </div>
  );
};

export default FoodType;
