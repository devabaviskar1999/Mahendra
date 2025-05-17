import { memo } from "react";
import { useNavigate } from "react-router-dom";
interface childType {
  imgUrl: string;
  title: string;
}

function ChildRestaurant({ imgUrl, title }: childType) {
  const navigate = useNavigate();
  const ScrollToAnotherSectionId = (title: string):void => {
    const sectionId = title.toLowerCase().replace(/\s+/g, "-");
    console.log(sectionId);
       navigate(`/restaurant#${sectionId}`);
  };
  return (
    <button
      className="relative group cursor-pointer rounded-lg overflow-hidden border"
      onClick={() => ScrollToAnotherSectionId(title)}
    >
      <img
        src={imgUrl}
        alt={imgUrl + " image"}
        className="w-full h-auto object-cover border-b"
      />
      <h2 className="md:text-lg lg:text-xl text-center py-2 bg-white/20 font-semibold">
        {title}
      </h2>
      {/* Hover Overlay with Text */}
      <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
        <p className="text-sm md:text-base lg:text-lg font-semibold text-black">
          Click to explore options
        </p>
      </div>
    </button>
  );
}
export default memo(ChildRestaurant);
