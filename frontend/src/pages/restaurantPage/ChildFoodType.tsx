import React from 'react';

interface RatingPropsType {
  rating: number;
  reviews: number;
}

interface FoodTypeProps {
  imgUrl: string;
  itemName: string;
  qty: string;
  rate: string;
  ingredients: string;
  description: string;
}

type CombinedProps = RatingPropsType & FoodTypeProps;

const ChildFoodType: React.FC<CombinedProps> = ({
  imgUrl,
  itemName,
  qty,
  rate,
  ingredients,
  description,
  rating,
  reviews,
}) => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row md:justify-around lg:gap-4 gap-2 items-center bg-black text-white text-center p-4 border-b-2
    border-gray-400
    
    lg:border-gray-800">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={imgUrl} alt={itemName} className="w-85 h-60 lg:w-100 lg:h-64 object-cover rounded-lg shadow-lg" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-start gap-2 text-left">
        <h2 className="text-2xl font-semibold">{itemName}</h2>
        <p className="text-sm text-white font-semibold">Qty: {qty}</p>
        <p className="text-sm text-white font-semibold">Price: ₹{rate}</p>
        <p className="text-sm text-gray-300">Ingredients: {ingredients}</p>
        <p className="text-sm text-gray-300">{description}</p>
        
        <div className="mt-2">
          <p className="text-yellow-400 text-lg">
            {"⭐".repeat(Math.floor(rating))} ({rating.toFixed(1)})
          </p>
          <p className="text-sm text-gray-400">
            {reviews.toLocaleString()}+ reviews from all major delivery platforms
          </p>
        </div>
      </div>    
    </div>
  );
};

export default ChildFoodType;
