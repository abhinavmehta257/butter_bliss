import React from "react";

function FoodCard() {
  return (
    <div className="w-[194px] h-[227px] bg-white rounded-lg shadow">
      <img
        className="w-[194px] h-[123px] rounded-tl-lg rounded-tr-lg"
        src="https://via.placeholder.com/194x123"
      />
      <div className="flex flex-row justify-between items-center p-[12px]">
        <div className="flex flex-col">
          <div className="text-neutral-800 text-base font-medium tracking-tight">
            Aloo Chaat
          </div>
          <div className="text-orange-500 text-base font-medium leading-tight">
            $3.88
          </div>
        </div>

        <div className="w-6 h-6 relative">
          <img src="./assests/icons/like_circle_outline.png" alt="" srcset="" />
        </div>
      </div>

      <div className="w-[194px] h-[35px] bg-yellow-500 rounded-bl-lg rounded-br-lg shadow text-center">
        <div className="text-white text-sm font-medium tracking-tight">
          Add to cart
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
