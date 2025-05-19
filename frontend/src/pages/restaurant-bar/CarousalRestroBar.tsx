import { useState, useEffect, useRef, useCallback, FC } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Optimized Image URLs from Cloudinary
const images: string[] = [
  "https://res.cloudinary.com/dvc4zb2ha/image/upload/q_auto,f_auto,w_1600/v1747669565/pexels-bluerhinomedia-2788823_ssnekw.jpg",
  "https://res.cloudinary.com/dvc4zb2ha/image/upload/q_auto,f_auto,w_1600/v1747669565/pexels-kelly-1179532-2796105_o8qvkd.jpg",
  "https://res.cloudinary.com/dvc4zb2ha/image/upload/q_auto,f_auto,w_1600/v1747669565/pexels-pixabay-262918_r5zhmk.jpg",
  "https://res.cloudinary.com/dvc4zb2ha/image/upload/q_auto,f_auto,w_1600/v1747669564/pexels-chanwalrus-941861_s26uvq.jpg",
];

const CarousalRestroBar: FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
        className="w-full h-full flex transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
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
            className="absolute top-1/2 left-5 transform -translate-y-1/2 hover:cursor-pointer z-10"
            onClick={goPrev}
            aria-label="Previous Slide"
          >
            <IoIosArrowBack size={45} />
          </button>

          <button
            className="absolute top-1/2 right-5 transform -translate-y-1/2 hover:cursor-pointer z-10"
            onClick={goNext}
            aria-label="Next Slide"
          >
            <IoIosArrowForward size={45} />
          </button>
        </>
      )}
    </div>
  );
};

export default CarousalRestroBar;
