interface ReviewType {
  name: string;
  description: string;
  bgColor?: string;
  stars?: number;
}

export default function Guest({
  name,
  description,
  bgColor,
  stars,
}: ReviewType) {
  return (
    <div
      className={`max-w-full mx-3 sm:mx-0 relative border rounded-xl p-3 mt-1 ${
        bgColor ?? "bg-yellow-200"  
      } shadow-sm`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="h-9 w-9 rounded-full flex items-center justify-center font-semibold text-xl border-2 bg-white border-pink-600 text-gray-400">
          {name ? name.charAt(0).toUpperCase() : "A"}
        </span>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-yellow-500 text-sm ">
            {stars ? "⭐".repeat(stars) : "⭐".repeat(5)}
          </p>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-snug">{description}</p>
    </div>
  );
}
