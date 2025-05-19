import React from "react";

interface QtyRate {
  qty: string;
  rate: number;
}

const QuantityTable: React.FC<{ qtyRate: QtyRate[] }> = ({ qtyRate }) => {
  return (
   <table className="w-full text-left text-sm sm:text-base mt-2">
  <thead>
    <tr>
      <th className="border-b border-gray-600 pb-1">Quantity</th>
      <th className="border-b border-gray-600 pb-1">Price (₹)</th>
    </tr>
  </thead>
  <tbody>
    {qtyRate.map((item, index) => (
      <tr key={index}>
        <td className="py-1">{item.qty}</td>
        <td className="py-1">₹{item.rate}</td>
      </tr>
    ))}
  </tbody>
</table>

  );
};

export default QuantityTable;
