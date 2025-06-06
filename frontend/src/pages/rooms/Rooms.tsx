import RoomComponent from "./RoomComponent";

import ScrollToTop from "../../scrollToTop/ScrollToTop";
export default function Rooms() {
  const Room = "https://i.ibb.co/k66sty48/room.jpg";
  const ThirdRoom = "https://i.ibb.co/wNJ5LB0Z/Third-room.jpg";
  return (
    <ScrollToTop>
        <div
          className="flex flex-col items-center w-full h-auto mt-0 bg-black  lg:bg-[#f2ebe5]
        py-6 md:py-10"
        >
          <h1 className="text-3xl p-1 sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-white lg:text-black">
            Rooms
          </h1>
          <h2 className="font-serif text-sm text-center md:text-lg text-white lg:text-black">
            Experience the luxury of our
            <span className="font-semibold text-white lg:text-black">five</span> exclusive room
            categories, tailored for your ultimate comfort.
          </h2>
          <RoomComponent
            Img={Room}
            category="Ac Suite"
            rate={4200}
            description='The image is still loading while the motion.div is animating in.
          So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
            reviewCount={135}
            rating={4.5}
            bedType="King Size Bed"
          />
          <RoomComponent
            Img="https://i.ibb.co/FkH9fLhb/Double-bed.jpg"
            category="Ac Mini Suite"
            rate={2600}
            description='The image is still loading while the motion.div is animating in.
          So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
            reviewCount={73}
            rating={4.1}
            bedType="Double Bed"
          />
          <RoomComponent
            Img={ThirdRoom}
            category="Ac Super Deluxe"
            rate={2000}
            description='The image is still loading while the motion.div is animating in.
So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
            reviewCount={97}
            rating={4.8}
            bedType="Triple Bed"
          />
          <RoomComponent
            Img={ThirdRoom}
            category="Ac Deluxe"
            rate={1350}
            description='The image is still loading while the motion.div is animating in.
          So the layout shifts mid-animation, making it feel like it"s "stuck" or stuttering — especially because the image has no defined height/width upfront.'
            reviewCount={97}
            rating={4.8}
            bedType="Triple Bed"
          />
          <RoomComponent
            Img={ThirdRoom}
            category="Ac Dormatory(6 Pax)"
            rate={3000}
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
