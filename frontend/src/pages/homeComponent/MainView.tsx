import { useEffect, useState } from "react";
import { MainViewImage } from "../../store/MainViewImage";

export default function MainView() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev === MainViewImage.length - 1 ? 0 : prev + 1));
    }, 3000); // ⏱️ change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-170 md:min-h-170 w-full overflow-hidden">
      {/* Background Carousel Layer */}
      {MainViewImage.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 min-h-170 md:h-170 w-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === bgIndex ? "opacity-100 z-0" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img.imgUrl})` }}
        />
      ))}

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full min-h-170 md:min-h-170 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex items-center justify-center min-h-170 md:min-h-170 text-center px-5">
        <h1 className="text text-5xl md:text-8xl font-bold leading-tight">
          Welcome to <br />
          <span className="text-white">Hotel Mahendra</span>
          <br />
          <span className="text">Jalgaon</span>
        </h1>
      </div>
    </div>
  );
}
