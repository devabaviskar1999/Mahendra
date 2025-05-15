import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
interface RoomDataType {
  Img: string;
  category: string;
  rate: number;
  description: string;
  reviewCount?: number;
  rating?: number;
  bedType?: string;
}

export default function RoomComponent({
  Img,
  category,
  rate,
  description,
  reviewCount,
  rating,
  bedType,
}: RoomDataType) {
  const [isTapped, setIsTapped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isTapped) {
      timeoutId = setTimeout(() => {
        setIsTapped(false);
        navigate("/contact");
      }, 100);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isTapped]);
  return (
    <>
     
   
      <div className="w-full md:w-4/5 relative rounded-2xl shadow-lg mt-4 lg:mt-6 border-2 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-8 bg-[#fffcf8]">
        {/* Image and Description Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 relative">
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
            <img
              src={Img}
              alt={`${category} image`}
              className="w-full h-full object-cover"
            />
            <IoIosArrowBack className="absolute left-2 top-1/2 -translate-y-1/2 z-50 text-white text-3xl hover:cursor-pointer" />
            <IoIosArrowForward className="absolute right-2 top-1/2 -translate-y-1/2 z-50 text-white text-3xl hover:cursor-pointer" />
          </div>
          <p className="text-sm md:text-base hidden md:flex">{description}</p>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-2/5 flex flex-col gap-3">
          <h2 className="font-semibold text-xl md:text-2xl">
            <span className="font-normal text-base md:text-lg">
              Room Type:{" "}
            </span>
            {category}
          </h2>
          <span className="text-sm font-semibold md:text-base">
            <span className="font-normal">Rate: </span>₹{rate} + Tax
          </span>
          <div className="flex flex-col-reverse xl:flex-row xl:justify-evenly">
            <ul className="list-disc list-inside text-sm md:text-sm lg:text-base space-y-1">
              <li>24 hrs checkout time</li>
              <li>Order food & drinks from your room</li>
              <li>All payment methods are accepted</li>
              <li>Free Wi-Fi access</li>
              <li>Air-conditioned rooms</li>
              <li>LED TV with satellite channels</li>
              <li>Room cleaning twice a day</li>
              <li>Premium quality mattresses</li>
              <li>
                Comfy beds,{" "}
                <span className="text-sm font-semibold md:text-base">
                  {rating}
                </span>{" "}
                - Based on{" "}
                <span className="text-sm font-semibold md:text-base">
                  {reviewCount} reviews
                </span>
              </li>
            </ul>
            <div>
              <h3 className="font-semibold text-md md:text-lg">About Room</h3>
              <ul className="list-disc list-inside text-sm font-semibold xl:font-normal xl:text-base space-y-1">
                <li>{bedType}</li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => setIsTapped(true)}
            className={`flex items-center justify-center p-2 rounded-lg text-white font-semibold transition ease-in-out duration-200 
            ${isTapped ? "bg-red-600" : "bg-blue-600"} 
            md:hover:bg-red-600 hover:cursor-pointer`}
          >
            Book now
          </button>
        </div>
      </div>
    </>
  );
}
