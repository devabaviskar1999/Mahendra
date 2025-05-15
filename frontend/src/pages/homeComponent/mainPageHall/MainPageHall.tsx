import MainPageHallComponent from "./MainPageHallComponent";
import marriageHall from "../../../imageStore/MainViewImage/marriage-area.avif";

export default function MainPageHall() {
  return (
    <div className="h-auto w-full bg-black flex flex-col gap-6 items-center pt-8 pb-8">
      {/* Hall-01: Centered */}
      <h2 className="text-white font-semibold flex flex-col text-2xl p-2 text-center">
        <div>
          <span className="">" We believe memorable events </span>
          <span>shouldn't break the bank "</span>
        </div>
        <span className="text-sm font-normal text-gray-300">
          our halls offer elegance, comfort, and affordability in one place.
        </span>
      </h2>

      <div className="w-full flex justify-start pl-4">
        <MainPageHallComponent
          imgUrl={marriageHall}
          title="Hall-01"
          flexValue="flex-row"
          forList={["Marriage", "Anniversary", "Engagement", "Party"]}
        />
      </div>

      {/* Hall-02: Pushed to the right */}
      <div className="w-full flex justify-end pr-4">
        {/* 👈 shifted right */}
        <MainPageHallComponent
          imgUrl={marriageHall}
          title="Hall-02"
          flexValue="flex-row-reverse"
          forList={["Marriage", "Anniversary", "Engagement", "Party"]}
        />
      </div>

      {/* Hall-03: Centered */}
      <div className="w-full flex justify-start pl-4">
        <MainPageHallComponent
          imgUrl={marriageHall}
          title="Hall-03"
          flexValue="flex-row"
          forList={["Marriage", "Anniversary", "Engagement", "Party"]}
        />
      </div>
    </div>
  );
}
