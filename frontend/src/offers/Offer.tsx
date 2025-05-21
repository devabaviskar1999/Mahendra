import { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
export default function Offer() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(28710); // 8 hours in seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [buttonHide, setButtonHide] = useState<boolean>(false);
  const navigate = useNavigate();
  // Start Timer when toggle is true
  useEffect(() => {
    if (toggle && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    // Stop timer when unmount or toggle is turned off
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [toggle]);

  // Format time as HH:MM:SS
  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setToggle(false);
    setButtonHide(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div
      className={` fixed z-50 font-sans bottom-3 right-3 p-2 md:p-4 rounded-xl bg-black text-white transition-all duration-300 ease-in-out shadow-lg ${
        toggle
          ? "h-[62vh] w-[70vw] md:w-[20vw] md:h-[53vh] xl:h-[60vh] md:gap-2 flex flex-col gap-4 p-4"
          : buttonHide
          ? "hidden"
          : "w-52 h-auto flex-row gap-3 items-center cursor-pointer"
      }`}
      onClick={() => !toggle && setToggle(true)}
    >
      <div className="relative flex flex-col items-center text-center">
        <span className="text-red-600 font-bold text-lg">
          LIMITED TIME OFFER
        </span>
        <span className="text-xl font-semibold mt-1">🍹 Cocktail Madness</span>
        <span className="mt-1">
          Buy 2 Get 1 <span className="font-bold">Free</span>!
        </span>

        {toggle && (
          <span className="text-sm text-yellow-400 mt-2">
            Ends in: {formatTime(timeLeft)}
          </span>
        )}
      </div>

      <div className="flex items-center justify-center">
        <img
          src="https://i.ibb.co/QvH6zZs5/fresh-cocktails-wooden-table-with-leafs-generative-ai.jpg"
          alt="Drinks image"
          className={`${
            toggle ? "h-28 w-44" : "h-24 w-24"
          } rounded-lg md:h-28 md:w-32`}
          loading="lazy"
        />
      </div>
      {toggle && (
        <div className="flex flex-col items-center gap-2 md:gap-2 relative h-auto">
          <h3 className="md:text-xl md:font-semibold">Food & Bar section</h3>
          <div className="flex flex-row items-center justify-around w-full h-auto md:gap-2">
            <div
              className="border-2 border-gray-800 flex flex-col items-center rounded-xl cursor-pointer"
              onClick={() => navigate("/restaurant#veg")}
            >
              <img
                src="https://ik.imagekit.io/hotelmahendra/paneer%20butter%20masala.jpg?updatedAt=1747725101857"
                alt="food image"
                loading="lazy"
                className="h-24 w-55  transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <p>Food</p>
              <span className="text-[10px] text-red-600">Click to view</span>
            </div>
            <div
              className="border-2 border-gray-800 flex flex-col items-center rounded-xl cursor-pointer"
              onClick={() => navigate("/bar#scotch")}
            >
              <img
                src="https://i.ibb.co/B5QTcF3q/crystal-glass-orange-cocktail-garnished-with-lime-slice-dark-background-with-light.jpg"
                alt="Bar image"
                loading="lazy"
                className="h-24 w-55  transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <p>Bar</p>
              <span className="text-[10px] text-red-600">Click to view</span>
            </div>
          </div>
        </div>
      )}
      {toggle && (
        <button
          className="absolute top-[-15px] right-0 text-red-600 font-extrabold text-4xl  hover:cursor-pointer hover:text-5xl"
          onClick={handleClose}
        >
          ×
        </button>
      )}
    </div>
  );
}
