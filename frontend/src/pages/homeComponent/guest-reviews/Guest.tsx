interface ReviewType {
  imgUrl: string;
  name: string;
  description: string;
}

export default function Guest({ imgUrl, name, description }: ReviewType) {
  return (
    <div className="w-full relative border rounded-xl p-3 mt-2 bg-sky-300 shadow-sm">
      <div className="flex items-center gap-4 mb-2">
        <img
          src={imgUrl}
          alt="Customer"
          className="h-14 w-14 rounded-full object-cover border-2 border-pink-600"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-yellow-500 text-sm ">★★★★★</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-snug">{description}</p>
    </div>
  );
}
