import MainPageHallComponent from "./MainPageHallComponent";
import marriageHall from "../../../imageStore/MainViewImage/marriage-area.avif";
// !md:w-200
export default function MainPageHall() {
  return (
    <div className="h-auto w-full md:bg-yellow-700/20 bg-black flex flex-col gap-6 mx-auto pt-8 pb-8 md:pl-30 md:pr-30 lg:pl-40 lg:pr-40 xl:pl-70 xl:pr:70 2xl:pl-100 2xl:pr-100 relative border-b-2 border-black">
      {/* Hall-01: Centered */}
      <h2 className="text-amber-100 flex flex-col p-2 itemcenter justify-center gap-1 text-center">
        <div className="flex flex-col ">
          <span className="font-semibold text-lg lg:text-5xl sm:text-2xl md:text-3xl md:font-bold md:text-rose-400">
            "We believe memorable events{" "}
          </span>
          <span className="font-semibold text-lg lg:text-4xl sm:text-xl md:text-2xl md:font-bold md:text-rose-400">
            shouldn't break the bank"
          </span>
        </div>
        <span className="text-sm font-normal text-white lg:text-xl md:text-base md:text-black">
          our halls offer elegance, comfort, and affordability in one place.
        </span>
      </h2>

      <div className="w-full flex justify-start pl-4">
        <MainPageHallComponent
          imgUrl={marriageHall}
          title="Hall-01"
          flexValue="flex-row"
          forList={["1 Marriage", "2 Engagement", "3 Fresher Party", "4 Event"]}
          textColor="text-black"
          bgColor="bg-amber-100"
        />
      </div>

      {/* Hall-02: Pushed to the right */}
      <div className="w-full flex justify-end pr-4">
        {/* 👈 shifted right */}
        <MainPageHallComponent
          imgUrl={marriageHall}
          title="Hall-02"
          flexValue="flex-row-reverse"
          forList={["1 Meeting", "2 Birthday", "3 Anniversary", "4 Party"]}
          textColor="text-black"
          bgColor="bg-orange-200"
        />
      </div>

      {/* Hall-03: Centered */}
      <div className="w-full flex justify-start pl-4">
        <MainPageHallComponent
          imgUrl={marriageHall}
          title="Hall-03"
          flexValue="flex-row"
          forList={["1 Engagement", "2 Meeting", "3 Event", "4 Fresher Party"]}
          textColor="text-black"
          bgColor="bg-pink-200"
        />
      </div>
    </div>
  );
}
