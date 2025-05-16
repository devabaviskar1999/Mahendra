import { useState, useEffect } from 'react';

const images = [
  'https://source.unsplash.com/random/1600x900?food',
  'https://source.unsplash.com/random/1600x900?restaurant',
  'https://source.unsplash.com/random/1600x900?bar',
  'https://source.unsplash.com/random/1600x900?cocktail',
  'https://source.unsplash.com/random/1600x900?dining',
];
//!ADD WHEN USER CLICKED ON THE DOTS THE TIMER SHOULD START AGAIN LIKE FROM THE 1SEC TO 5SEC
const CarousalRestroBar = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[70vh] bg-black relative overflow-hidden border-2 border-white">
      {/* Images */}
      <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? 'bg-white' : 'bg-gray-500'} transition-all hover:cursor-pointer`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarousalRestroBar;
