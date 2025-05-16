import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const location = useLocation();
  const isRestaurantPage = location.pathname === "/restaurant-and-bar";
  return (
    // 🔧 Set high z-index and background to keep navbar above all content
    <div
      className={`fixed top-0 left-0 z-50 w-full ${
        isRestaurantPage
          ? "bg-black border-b-2 border-white"
          : "bg-white border-b-2 border-black"
      }  pl-4 p-2 lg:p-2 md:pl-4 sm:pl-3 xl:pl-[7vw] xl:pr-[7vw] flex justify-between items-center`}
    >
      {/* Brand Name */}
      <div>
        <Link
          to={"/"}
          className={`font-bold ${
            isRestaurantPage ? "text-white" : "text-black"
          } leading-tight font-serif text-[1rem] flex-col flex sm:flex-row sm:text-[1.3rem] md:text-2xl`}
        >
          Hotel Mahendra
          <span className="pl-1 text-red-600">Jalgaon</span>
        </Link>
      </div>

      {/* 🔧 Hamburger Button with z-50 so it stays above dropdown menu */}
      {/* 🔧 Hamburger Button */}
      <button
        className="relative z-50 w-8 h-8 flex flex-col justify-between items-center xl:hidden cursor-pointer"
        onClick={() => setToggle(!toggle)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-1 w-full transition-transform duration-300 ${
            toggle ? "rotate-45 translate-y-3" : ""
          } ${isRestaurantPage ? "bg-white" : "bg-black"}`}
        />
        <span
          className={`block h-1 w-full transition-opacity duration-300 ${
            toggle ? "opacity-0" : ""
          } ${isRestaurantPage ? "bg-white" : "bg-black"}`}
        />
        <span
          className={`block h-1 w-full transition-transform duration-300 ${
            toggle ? "-rotate-45 -translate-y-3" : ""
          } ${isRestaurantPage ? "bg-white" : "bg-black"}`}
        />
      </button>

      {/* 🔧 Toggleable Menu with z-40 and background to ensure visibility */}
      <ul
        className={`${toggle ? "flex" : "hidden"} ${
          isRestaurantPage ? "bg-black text-white  " : "bg-white text-black"
        }  xl:flex xl:relative xl:flex-row xl:items-center xl:justify-start xl:w-fit xl:gap-[2vw] absolute top-full left-0 z-40 w-full flex-col items-center justify-center py-4 gap-4 font-medium sm:text-lg md:text-lg`}
      >
        <li>
          <Link
            to={"/360-walk-through"}
            className="hover:text-red-600 active:scale-95 transition duration-100"
            onClick={() => setToggle(false)}
          >
            360 Walk-Through
          </Link>
        </li>
        <li>
          <Link
            to={"/rooms"}
            className="hover:text-red-600 active:scale-95 transition duration-100"
            onClick={() => setToggle(false)}
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            to={"/restaurant-and-bar"}
            className="hover:text-red-600 active:scale-95 transition duration-100"
            onClick={() => setToggle(false)}
          >
            Restaurant & Bar
          </Link>
        </li>
        <li>
          <Link
            to={"/hall"}
            className="hover:text-red-600 active:scale-95 transition duration-100"
            onClick={() => setToggle(false)}
          >
            Hall
          </Link>
        </li>
        <li>
          <Link
            to={"/nearby-places"}
            className="hover:text-red-600 active:scale-95 transition duration-100"
            onClick={() => setToggle(false)}
          >
            Place Nearby
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className="hover:text-red-600 active:scale-95 transition duration-100"
            onClick={() => setToggle(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to={"/gallery"}
            className="hover:text-red-600 active:scale-95 transition duration-100"
            onClick={() => setToggle(false)}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
}
