import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  const isRestaurantPage = location.pathname === "/restaurant-and-bar";
  return (
    <div className={`w-full relative text-sm lg:text-lg flex mt-5 min-h-auto rounded-t-3xl border-t-2 ${isRestaurantPage ? "border-white bg-black text-white" : "border-yellow-700 bg-gray-300 text-black" } flex-col md:justify-evenly font-serif`}>
      <div className="flex relative flex-row justify-around items-center pt-4 md:justify-evenly border-dashed border-b-2 border-gray-600 pb-2 lg:pb-2 lg:pt-0">
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
        <div className="flex border-dotted border-l-2 border-gray-700 pl-2 lg:p-0 lg:border-none flex-col items-start ">
          <p className="flex flex-row gap-x-1 items-center">
            <FaPhoneAlt className="text-sm" /> +91 257 222 2470
          </p>
          <p className="flex flex-row gap-x-1 items-center">
            <MdEmail className="text-sm" /> hotelmahendra@gmail.com
          </p>
          <p>Address: Ajintha chauck, jalgaon</p>
          <div className="ml-2 lg:ml-0 flex flex-row gap-x-2">
            <a
              href="https://facebook.com/hotelmahendra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 text-xl lg:text-3xl lg:hover:text-blue-800 lg:transition lg:duration-300" />
            </a>
            <a
              href="https://instagram.com/hotelmahendra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 text-xl lg:text-3xl lg:hover:text-pink-800 lg:transition lg:duration-300" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block mt-6">
          <div className="w-full h-55  overflow-hidden rounded-2xl shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.748864250867!2d75.5740160112649!3d21.002701680559337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f00d1553029%3A0xc4524288e1678c68!2sHotel%20Mahendra!5e0!3m2!1sen!2sin!4v1747204550698!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center font-sans pt-2">
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
