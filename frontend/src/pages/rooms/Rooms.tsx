import RoomComponent from "./RoomComponent";
import Room from "../../imageStore/MainViewImage/Room.webp";
export default function Rooms() {
  return (
    <div className="flex flex-col items-center w-full h-auto mt-3 md:mt-0">
      <h1 className="text-3xl p-3 md:text-3xl lg:text-5xl font-semibold lg:p-6">
        Rooms
      </h1>
      <RoomComponent
        Img={Room}
        category="Super Deluxe"
        rate={2000}
        description='The image is still loading while the motion.div is animating in.
So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
      />
      <RoomComponent
        Img={Room}
        category="Super Deluxe"
        rate={2000}
        description='The image is still loading while the motion.div is animating in.
So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
      />
      <RoomComponent
        Img={Room}
        category="Super Deluxe"
        rate={2000}
        description='The image is still loading while the motion.div is animating in.
So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
      />
    </div>
  );
}
