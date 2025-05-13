import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
export default function TopArrow() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); //!show after scrolling 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="select-none h-12 w-12 fixed bottom-8 right-4 z-50 rounded-full flex flex-col items-center justify-center font-semibold text-sm border-2 bg-white border-gray-400 text-gray-400 md:hidden shadow-lg"
          aria-label="Scroll to top "
        >
          <IoIosArrowUp className="text-xl animate-[arrowUp_1s_ease-in-out_infinite]" />
        </button>
      )}
      <style>{`
        @keyframes arrowUp {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </>
  );
}
