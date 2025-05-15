import { FaInstagram } from "react-icons/fa";
const Instagram = () => {
  return (
    <a
      href="https://instagram.com/dev_22kr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram
        size={55}
        className="fixed  bg-white rounded-full z-50 right-3 bottom-38 p-1 text-pink-500 items-center md:relative md:flex md:right-0 md:bottom-0 md:z-0 md:hover:shadow-2xl md:shadow-pink-500"
      />
    </a>
  );
};

export default Instagram;
