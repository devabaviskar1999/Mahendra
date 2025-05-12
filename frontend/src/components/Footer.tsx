import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className="w-full relative text-sm flex min-h-auto rounded-t-3xl border-t-2 border-yellow-700 bg-gray-300 flex-col md:justify-evenly font-serif">
      <div className="flex relative flex-row justify-around pt-4 md:justify-evenly ">
        <div className="">
          <ul>
            <li>
              <Link
                to={"/360-walk-through"}
                className="hover:text-red-600 active:scale-95 transition duration-100 underline"
              >
                360 Walk-Through
              </Link>
            </li>
            <li>
              <Link
                to={"/rooms"}
                className="hover:text-red-600 active:scale-95 transition duration-100 underline"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to={"/restaurant-and-bar"}
                className="hover:text-red-600 active:scale-95 transition duration-100 underline"
              >
                Restaurant & Bar
              </Link>
            </li>
            <li>
              <Link
                to={"/nearby-places"}
                className="hover:text-red-600 active:scale-95 transition duration-100 underline"
              >
                Place Nearby
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:text-red-600 active:scale-95 transition duration-100 underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className=" block border-dashed border-r-2 pl-8 border-black md:hidden"></div>
        <div className="flex flex-col items-start ">
          <p className="flex flex-row gap-x-1 items-center">
            <FaPhoneAlt className="text-sm" /> +91 257 222 2470
          </p>
          <p className="flex flex-row gap-x-1 items-center">
            <MdEmail className="text-sm" /> Hotelmahendra@gmail.com
          </p>
          <p>Address: Ajintha chauck, jalgaon</p>
          <p>Pin code: 425001</p>
          <div className="ml-2 flex flex-row gap-x-2">
            <a
              href="https://facebook.com/hotelmahendra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 text-xl lg:hover:text-blue-800 lg:transition lg:duration-300" />
            </a>
            <a
              href="https://instagram.com/hotelmahendra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 text-xl lg:hover:text-blue-800 lg:transition lg:duration-300" />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <h4>Map</h4>
        </div>
      </div>
      <div className="flex flex-col items-center font-sans">
        <p>
          © {new Date().getFullYear()} Hotel mahendra jalgaon. All rights
          reserved.
        </p>
        <div className="flex flex-col items-center font-sans">
          <span className="">
            Created by -
            <span className="font-semibold text-red-600">
              Devendra Baviskar
            </span>
          </span>
          <span> Profession - Self taught web developer</span>
          <div className="font-mono flex flex-row items-center gap-x-1">
            <span className="tracking-tighter">Follow me on</span>
            <a
              href="https://instagram.com/dev_22kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 lg:hover:text-blue-800 lg:transition lg:duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
