import { useState } from "react";
import Drinks from "../imageStore/MainViewImage/Drinks.jpg";
export default function Offer() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      className={`fixed z-50 font-sans ${
        toggle ? "hidden" : "flex"
      }  flex-row right-3 p-2 rounded-xl gap-3 bottom-3 bg-black text-white w-52 h-auto md:w-auto md:items-center md:justify-evenly md:p-4`}
    >
      <div className="relative flex flex-col items-center">
        <span className="text-red-600 font-bold">OFFERS</span>
        <span>Buy 2 Get 1 Free</span>
        <span>On Cocktails</span>
      </div>
      <div className="flex items-center">
        <img
          src={Drinks}
          alt="Drinks image"
          className="h-15 w-15 rounded-lg md:h-20 md:w-25"
          loading="lazy"
        />
      </div>
      <button
        className="absolute right-0 top-[-15px] text-red-600 font-extrabold text-3xl md:hover:cursor-pointer md:hover:text-4xl"
        onClick={() => setToggle(!toggle)}
      >
        x
      </button>
    </div>
  );
}
