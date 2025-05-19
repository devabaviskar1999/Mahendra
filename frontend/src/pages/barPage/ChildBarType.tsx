import React from "react";
import QuantityTable from "./QuantityTable";

interface QtyRate {
  qty: string;
  rate: number;
}

interface FoodTypeProps {
  imgUrl: string;
  itemName: string;
  qtyRate: QtyRate[];
}

const ChildBarType: React.FC<FoodTypeProps> = ({
  imgUrl,
  itemName,
  qtyRate,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 p-4 border-b border-gray-700">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={imgUrl}
          alt={itemName}
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-64 md:h-64 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold">{itemName}</h2>
        <QuantityTable qtyRate={qtyRate} />
      </div>
    </div>
  );
};

export default ChildBarType;
