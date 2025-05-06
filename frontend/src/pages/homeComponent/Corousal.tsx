import React from "react";
import First from "../../../public/first.webp";
export default function Corousal() {
  return (
    <div className="w-full relative h-[80vh]">
      <img
        src={First}
        alt="Towards restro image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
