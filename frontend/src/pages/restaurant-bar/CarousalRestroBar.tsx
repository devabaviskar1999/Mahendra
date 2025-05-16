import { useState, useEffect, useRef, useCallback, FC } from "react";
import restaurant from "../../imageStore/MainViewImage/restaurant.avif";
import bar1 from "../../imageStore/restro-bar/bar.jpg";
import bar2 from "../../imageStore/restro-bar/bar2.jpg";
import restaurant2 from "../../imageStore/restro-bar/restaurant2.jpg";
import restaurant3 from "../../imageStore/restro-bar/restaurant3.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Define the image array
const images: string[] = [restaurant, bar1, restaurant2, bar2, restaurant3];

const CarousalRestroBar: FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide with reset support
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Handle manual navigation
  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
      startTimer();
    },
    [startTimer]
  );

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startTimer();
  }, [startTimer]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
    startTimer();
  }, [startTimer]);

  return (
    <div className="w-full h-[50vh] md:h-[70vh] rounded-xl bg-black relative overflow-hidden border-2 border-white md:rounded-none">
      {/* Images Container */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-500"
            } transition-all hover:cursor-pointer`}
          ></button>
        ))}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-5 transform -translate-y-1/2 hover:cursor-pointer"
            onClick={goPrev}
          >
            <IoIosArrowBack size={45} />
          </button>

          <button
            className="absolute top-1/2 right-5 transform -translate-y-1/2 hover:cursor-pointer"
            onClick={goNext}
          >
            <IoIosArrowForward size={45} />
          </button>
        </>
      )}
    </div>
  );
};

export default CarousalRestroBar;
