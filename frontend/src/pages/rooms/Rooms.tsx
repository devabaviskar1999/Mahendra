import RoomComponent from "./RoomComponent";
import Room from "../../imageStore/MainViewImage/Room.webp";
import DoubleBed from "../../imageStore/Rooms/Double-bed.jpg";
import ThirdRoom from "../../imageStore/Rooms/Third room.jpg";
import ScrollToTop from "../../scrollToTop/ScrollToTop";
export default function Rooms() {
  return (
    <ScrollToTop>
      <div
        className="flex flex-col items-center w-full h-auto mt-0 bg-[#f2ebe5]
    py-6 md:py-10"
      >
        <h1 className="text-3xl p-1 sm:text-4xl md:text-5xl lg:text-5xl font-semibold ">
          Rooms
        </h1>
        <h2 className="font-serif text-sm text-center md:text-lg">
          Experience the luxury of our{" "}
          <span className="font-semibold">five</span> exclusive room categories,
          tailored for your ultimate comfort.
        </h2>
        <RoomComponent
          Img={Room}
          category="Executive Deluxe"
          rate={2000}
          description='The image is still loading while the motion.div is animating in.
So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
          reviewCount={135}
          rating={4.5}
          bedType="King Size Bed"
        />
        <RoomComponent
          Img={DoubleBed}
          category="Super Deluxe"
          rate={2000}
          description='The image is still loading while the motion.div is animating in.
So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
          reviewCount={73}
          rating={4.1}
          bedType="Double Bed"
        />
        <RoomComponent
          Img={ThirdRoom}
          category="Family Deluxe"
          rate={2000}
          description='The image is still loading while the motion.div is animating in.
So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
          reviewCount={97}
          rating={4.8}
          bedType="Triple Bed"
        />
        <RoomComponent
          Img={ThirdRoom}
          category="Family Deluxe"
          rate={2000}
          description='The image is still loading while the motion.div is animating in.
        So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
          reviewCount={97}
          rating={4.8}
          bedType="Triple Bed"
        />
        <RoomComponent
          Img={ThirdRoom}
          category="Family Deluxe"
          rate={2000}
          description='The image is still loading while the motion.div is animating in.
        So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
          reviewCount={97}
          rating={4.8}
          bedType="Triple Bed"
        />
      </div>
    </ScrollToTop>
  );
}
