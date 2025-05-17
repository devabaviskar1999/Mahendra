import { memo } from "react";

interface childType {
  imgUrl: string;
  title: string;
}

function ChildBar({ imgUrl, title }: childType) {
  return (
    <div className="relative group cursor-pointer rounded-lg overflow-hidden border">
      {/* Image */}
      <img
        src={imgUrl}
        alt={`${title} image`}
        className="w-full h-auto object-cover border-b"
      />

      {/* Title */}
      <h2 className="h-full md:text-lg lg:text-xl text-center py-2 bg-white/20 font-semibold">{title}</h2>

      {/* Hover Overlay with Text */}
      <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
        <p className="text-sm md:text-base lg:text-lg font-semibold text-black">
          Click to Check availability and pricing details
        </p>
      </div>
    </div>
  );
}

export default memo(ChildBar);
