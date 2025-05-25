import { useEffect, useState } from "react";
import ChildBarType from "./ChildBarType";

import ScotchData from "./Scotch";
import RumData from "./Rum";
import BeerData from "./Beer";
import VodkaData from "./Vodka";

interface BarTypeProps {
  id: string;
  title: string;
  targetId: string;
}

interface FoodDataType {
  imgUrl: string;
  name: string;
  qtyRate: {
    qty: string;
    rate: number;
  }[];
}

const BarType = ({ id, title, targetId }: BarTypeProps) => {
  const [data, setData] = useState<FoodDataType[]>([]);

  const handleScroll = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    switch (title.toLowerCase()) {
      case "scotch":
        setData(ScotchData);
        break;
      case "rum":
        setData(RumData);
        break;
      case "beer":
        setData(BeerData);
        break;
      case "vodka":
        setData(VodkaData);
        break;
    }
  }, [title]);

  return (
    <div
      id={id}
      className="w-full min-h-screen scroll-mt-16 lg:scroll-mt-24 flex flex-col items-center px-4 sm:px-6 md:px-12 py-8 bg-black text-white text-center"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 capitalize">
        {title}
      </h1>

      <div className="w-full flex flex-col gap-6">
        {data.map((item, index) => (
          <ChildBarType
            key={index}
            imgUrl={item.imgUrl}
            itemName={item.name}
            qtyRate={item.qtyRate}
          />
        ))}
      </div>

      <button
        onClick={() => handleScroll(targetId)}
        className="mt-8 px-4 py-2 border bg-yellow-500 border-white text-black rounded-lg lg:rounded-md lg:border-yellow-500 lg:bg-black lg:text-yellow-500 lg:hover:bg-yellow-500 lg:hover:text-black transition lg:hover:cursor-pointer duration-300 ease-in-out"
      >
        Scroll to {targetId}
      </button>
    </div>
  );
};

export default BarType;
