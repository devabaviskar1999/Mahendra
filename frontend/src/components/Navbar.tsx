import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className=" relative p-2 w-full flex flex-row justify-between items-center lg:p-6 md:pl-4 sm:pl-3 xl:pl-[7vw] xl:pr-[7vw] border-b-pink-600 border-2 xl:items-center">
      <div>
        <Link
          to={"/"}
          className="font-bold text-[1rem] flex-col flex sm:flex-row sm:text-[1.3rem] md:text-2xl"
        >
          Hotel Mahendra
          <span className="pl-1 text-pink-600">Jalgaon</span>
        </Link>
      </div>

      {/*Here will be hamburger menu will be added */}
      <button
        className="relative z-20 w-8 h-8 flex flex-col justify-between items-center lg:hidden"
        onClick={() => setToggle(!toggle)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-1 w-full bg-black transition-transform duration-300 ${
            toggle ? "rotate-45 translate-y-3" : ""
          }`}
        />
        <span
          className={`block h-1 w-full bg-black transition-opacity duration-300 ${
            toggle ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-1 w-full bg-black transition-transform duration-300 ${
            toggle ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </button>

      <ul
        className={`${
          toggle ? "flex" : "hidden"
        } absolute top-[100%] left-0 w-full flex-col items-center justify-center gap-4 py-4 bg-white
lg:relative lg:flex lg:flex-row lg:items-center lg:justify-start lg:w-fit lg:gap-[2vw]
sm:text-1xl md:text-1xl lg:text-1xl xl:text-1xl`}
      >
        <li>
          <Link
            to={"/360-walk-through"}
            className="hover:text-pink-600 active:scale-95 transition-transform duration-100 ease-in-out"
            onClick={() => setToggle(false)}
          >
            360 Walk-Through
          </Link>
        </li>
        <li>
          <Link
            to={"/rooms"}
            className="hover:text-pink-600 active:scale-95 transition-transform duration-100 ease-in-out"
            onClick={() => setToggle(false)}
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            to={"/restaurant"}
            className="hover:text-pink-600 active:scale-95 transition-transform duration-100 ease-in-out"
            onClick={() => setToggle(false)}
          >
            Restaurant
          </Link>
        </li>
        <li>
          <Link
            to={"/nearby-places"}
            className="hover:text-pink-600 active:scale-95 transition-transform duration-100 ease-in-out"
            onClick={() => setToggle(false)}
          >
            Place nearby
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className="hover:text-pink-600 active:scale-95 transition-transform duration-100 ease-in-out"
            onClick={() => setToggle(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
