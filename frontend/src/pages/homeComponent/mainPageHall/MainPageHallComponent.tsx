interface DataType {
  imgUrl: string;
  title: string;
  flexValue: string;
  forList: string[];
  textColor?: string;
  bgColor?: string;
}

export default function MainPageHallComponent({
  imgUrl,
  title,
  flexValue,
  forList,
  textColor,
  bgColor,
}: DataType) {
  return (
    <div
      className={`flex ${flexValue} justify-evenly w-4/5 h-auto border rounded-lg ${textColor} items-center p-2 ${bgColor} shadow-sm shadow-amber-950 sm:w-3/4 sm:h-45 hover:shadow-lg transition-all duration-300 ease-in-out hover:cursor-pointer sm:gap-2 md:w-110 md:h-48 lg:w-130
      lg:h-51
      relative md:border-2 md:border-black/20`}
    >
      <div className="  flex flex-col items-center gap-1 sm:gap-1">
        <img
          src={imgUrl}
          alt={imgUrl + " image"}
          className="h-22 object-cover rounded-md sm:w-60 sm:h-36 md:h-34 lg:h-36"
        />
        <span className="text-red-500 text-[10px] sm:text-sm md:text-lg">
          Tap to view
        </span>
      </div>
      <div className="flex flex-col pl-3 sm:gap-2 items-start">
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
        <ul className=" list-disc text-[12px] sm:text-sm md:text-lg leading-tight sm:font-semibold">
          {forList.map((item, index) => (
            <li key={index}>{item.split(" ")[1]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
