import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const location = useLocation();

  // Route checks
  const path = location.pathname;
  const isRestaurantAndBar = path.startsWith("/restaurant-and-bar");
  const isSeparateRestaurantOrBar =
    path.startsWith("/restaurant") || path.startsWith("/bar");

  // Styling based on route
  const navbarBg = isRestaurantAndBar
    ? "bg-black border-white"
    : isSeparateRestaurantOrBar
    ? "bg-yellow-500 border-black"
    : "bg-white border-black";

  const textColor = isRestaurantAndBar
    ? "text-white"
    : isSeparateRestaurantOrBar
    ? "text-black"
    : "text-black";

  const menuBg = isRestaurantAndBar
    ? "bg-black text-white"
    : isSeparateRestaurantOrBar
    ? "bg-yellow-500 text-black"
    : "bg-white text-black";

  const hamburgerLineColor = isRestaurantAndBar
    ? "bg-white"
    : isSeparateRestaurantOrBar
    ? "bg-black"
    : "bg-black";

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b-2 ${navbarBg} pl-4 p-2 lg:p-2 md:pl-4 sm:pl-3 xl:pl-[7vw] xl:pr-[7vw] flex justify-between items-center`}
    >
      {/* Brand Name */}
      <div>
        <Link
          to="/"
          className={`font-bold ${textColor} leading-tight font-serif text-[1rem] flex-col flex sm:flex-row sm:text-[1.3rem] md:text-2xl`}
        >
          Hotel Mahendra
          <span className="pl-1 text-red-600">Jalgaon</span>
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className="relative z-50 w-8 h-8 flex flex-col justify-between items-center xl:hidden cursor-pointer"
        onClick={() => setToggle(!toggle)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-1 w-full transition-transform duration-300 ${
            toggle ? "rotate-45 translate-y-3" : ""
          } ${hamburgerLineColor}`}
        />
        <span
          className={`block h-1 w-full transition-opacity duration-300 ${
            toggle ? "opacity-0" : ""
          } ${hamburgerLineColor}`}
        />
        <span
          className={`block h-1 w-full transition-transform duration-300 ${
            toggle ? "-rotate-45 -translate-y-3" : ""
          } ${hamburgerLineColor}`}
        />
      </button>

      {/* Toggleable Menu */}
      <ul
        className={`${toggle ? "flex" : "hidden"} ${menuBg} xl:flex xl:relative xl:flex-row xl:items-center xl:justify-start xl:w-fit xl:gap-[2vw] absolute top-full left-0 z-40 w-full flex-col items-center justify-center py-4 gap-4 font-medium sm:text-lg md:text-lg`}
      >
        {[
          { to: "/", label: "Home", hiddenOnXL: true },
          { to: "/360-walk-through", label: "360 Walk-Through" },
          { to: "/rooms", label: "Rooms" },
          { to: "/restaurant-and-bar", label: "Restaurant & Bar" },
         
          { to: "/hall", label: "Hall" },
          { to: "/nearby-places", label: "Place Nearby" },
          { to: "/contact", label: "Contact" },
          { to: "/gallery", label: "Gallery" },
        ].map(({ to, label, hiddenOnXL }) => (
          <li key={to} className={hiddenOnXL ? "lg:hidden block" : ""}>
            <Link
              to={to}
              className="hover:text-red-600 active:scale-95 transition duration-100"
              onClick={() => setToggle(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
