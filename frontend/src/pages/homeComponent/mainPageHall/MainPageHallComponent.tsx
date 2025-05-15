interface DataType {
  imgUrl: string;
  title: string;
  flexValue: string;
  forList: string[];
}

export default function MainPageHallComponent({
  imgUrl,
  title,
  flexValue,
  forList,
}: DataType) {
  return (
    <div
      className={`flex ${flexValue} justify-evenly w-3/4 h-auto border rounded-lg text-white items-center p-2 bg-gray-800 shadow-md shadow-gray-400`}
    >
      <div className="w-2/4 h-full flex flex-col items-center gap-1">
        <img
          src={imgUrl}
          alt={imgUrl + " image"}
          className="h-22 object-cover rounded-md"
        />
        <span className="text-red-500 text-[10px] sm:text-sm md:text-lg">
          Tap to view
        </span>
      </div>
      <div className="flex flex-col pl-3 ">
        <h2 className="text-xl font-bold">{title}</h2>
        <ul className="list-disc text-[12px]">
          {forList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
