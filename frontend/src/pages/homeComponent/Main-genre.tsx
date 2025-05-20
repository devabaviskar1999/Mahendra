import Genre from "./Genre";
const MainGenre = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:pt-5 pt-4 bg-yellow-900/30">
      <Genre
        imgUrl="https://i.ibb.co/k66sty48/room.jpg"
        title="Rooms"
        description="Experience comfort and luxury with a variety of room types tailored to your needs."
      />
      <Genre
        imgUrl="https://i.ibb.co/wZfd6dXY/restaurant.jpg"
        title="Restaurant & Bar"
        description="Enjoy fine dining and signature cocktails in our modern restaurant and lounge bar."
      />
      <Genre
        imgUrl="https://i.ibb.co/KzmkLQ6d/Ajintha-New.jpg"
        title="Nearby Places"
        description="Explore popular attractions, markets, and cultural sites just minutes from our location."
      />
    </div>
  );
};

export default MainGenre;
