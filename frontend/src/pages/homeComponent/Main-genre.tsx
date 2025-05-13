import Room from "../../imageStore/MainViewImage/Room.webp"
import Genre from "./Genre";
import { MainViewImage } from "../../store/MainViewImage";
const MainGenre = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Genre
        imgUrl={Room}
        title="Rooms"
        description="Experience comfort and luxury with a variety of room types tailored to your needs."
      />
      <Genre
        imgUrl={MainViewImage[4].imgUrl}
        title="Restaurant & Bar"
        description="Enjoy fine dining and signature cocktails in our modern restaurant and lounge bar."
      />
      <Genre
        imgUrl={MainViewImage[6].imgUrl}
        title="Nearby Places"
        description="Explore popular attractions, markets, and cultural sites just minutes from our location."
      />
    </div>
  );
};

export default MainGenre;
