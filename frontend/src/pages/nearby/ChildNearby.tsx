import { useState } from "react";
import { FaWalking, FaCar, FaBiking } from "react-icons/fa";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";

interface NearbyType {
  mainImg: string;
  secondaryImg?: string;
  title: string;
  Category: string;
  SpecialThing: string;
  distance: string;
  byBikeTime: string;
  byCarTime: string;
  byWalkTime: string;
  viaHighway: string;
  mapUrl: string;
  paragraph: string;
}

const ChildNearby = ({
  mainImg,
  secondaryImg,
  title,
  distance,
  byBikeTime,
  byCarTime,
  Category,
  SpecialThing,
  byWalkTime,
  viaHighway,
  mapUrl,
  paragraph,
}: NearbyType) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <section className="border border-gray-300 rounded-2xl shadow-lg p-6 flex flex-col gap-6 bg-gradient-to-br from-white via-blue-50 to-white w-full max-w-4xl mx-auto transition-all duration-300">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-700">
        {title} <span className="text-sm text-gray-500">({distance})</span>
      </h2>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img
          src={mainImg}
          alt={`${title} image`}
          className="w-full h-60 object-cover rounded-xl border-2 border-blue-200"
        />
        {secondaryImg && (
          <img
            src={secondaryImg}
            alt={`${title} secondary image`}
            className="w-full h-60 object-cover rounded-xl border-2 border-green-200"
          />
        )}
      </div>

      {/* Travel Time */}
      <div className="flex justify-around items-center text-center mt-2">
        <div className="flex flex-col items-center text-blue-700">
          <FaCar className="w-7 h-7" />
          <span className="text-sm font-medium">{byCarTime}</span>
        </div>
        <div className="flex flex-col items-center text-green-600">
          <FaBiking className="w-7 h-7" />
          <span className="text-sm font-medium">{byBikeTime}</span>
        </div>
        <div className="flex flex-col items-center text-yellow-600">
          <FaWalking className="w-7 h-7" />
          <span className="text-sm font-medium">{byWalkTime}</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl shadow-inner text-sm space-y-2 flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-1 text-gray-800">
          <p>
            <span className="font-bold text-purple-700">Category:</span>{" "}
            <span className="italic text-purple-900">{Category}</span>
          </p>
          <p>
            <span className="font-bold text-blue-700">Highway:</span>{" "}
            {viaHighway}
          </p>
          <p>
            <span className="font-bold text-green-700">Special:</span>{" "}
            {SpecialThing}
          </p>
        </div>
        <div className="text-center">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-all shadow-md"
          >
            <span>View on</span>
            <span>Google Maps</span>
          </a>
        </div>
      </div>

      {/* Toggle Button - Show More */}
      {!toggle && (
        <div className="mx-auto text-blue-700 hover:text-blue-900 transition cursor-pointer">
          <RiArrowDownWideFill size={32} onClick={() => setToggle(true)} />
        </div>
      )}

      {/* Extra Info */}
      {toggle && (
        <div className="overflow-hidden transition-all duration-500 ease-in-out bg-white border-l-4 border-blue-300 px-4 py-3 rounded-md text-gray-700 font-serif text-sm">
          {paragraph}
        </div>
      )}

      {/* Toggle Button - Show Less */}
      {toggle && (
        <div className="mx-auto text-blue-700 hover:text-blue-900 transition cursor-pointer">
          <RiArrowUpWideFill size={32} onClick={() => setToggle(false)} />
        </div>
      )}
    </section>
  );
};

export default ChildNearby;
