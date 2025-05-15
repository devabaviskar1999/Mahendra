import { FaFacebook } from "react-icons/fa";

export default function Facebook() {
  return (
    <a
      href="https://facebook.com/dev_22kr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook
        size={55}
        className="fixed  bg-white rounded-full z-50 right-3 bottom-54 p-1 text-blue-500 md:relative md:flex md:right-0 md:bottom-0 md:z-0 md:hover:shadow-2xl md:shadow-blue-500 "
      />
    </a>
  );
}
