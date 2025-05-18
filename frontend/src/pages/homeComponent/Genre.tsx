import { Link } from "react-router-dom";

interface FirstPropTypes {
  imgUrl: string;
  title: string;
  description: string;
}

const navigate = (title: string): string => {
  if (title === "Rooms") {
    return "/rooms";
  } else if (title === "Restaurant & Bar") {
    return "/restaurant-and-bar";
  } else if (title === "Nearby Places") {
    return "/nearby-places";
  }
  return `/${title.toLowerCase().replace(/\s+/g, "-")}`; // Slugify fallback
};

const Genre = ({ imgUrl, title, description }: FirstPropTypes) => {
  return (
    <Link to={navigate(title)}>
      <div className="flex relative flex-col items-center justify-center gap-4 p-4 bg-white rounded-xl lg:rounded-3xl shadow-md transition-shadow duration-100 delay-50 ease-in-out hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)] hover:cursor-pointer font-sans">
        <h3 className="text-xl sm:font-bold sm:text-2xl xl:text-3xl font-bold text-center text-gray-800">
          {title}
        </h3>
        <img
          src={imgUrl}
          alt="room image"
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl transition-opacity duration-500"
        />

        <p className="text-sm font-medium sm:text-base md:text-lg text-gray-700 text-left leading-relaxed">
          {description}
          <span className="text-red-500 text-[10px] sm:text-sm md:text-lg">
            Tap to view
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Genre;
