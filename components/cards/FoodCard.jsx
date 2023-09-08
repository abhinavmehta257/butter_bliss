import React from "react";

function FoodCard({name,cost,img}) {
  return (
    <div className="w-[194px] h-[227px] bg-white rounded-lg shadow">
      <img
        className="w-[194px] h-[123px] rounded-tl-lg rounded-tr-lg"
        src={img}
      />
      <div className="flex flex-row justify-between items-center p-[12px]">
        <div className="flex flex-col">
          <div className="text-neutral-800 text-base font-medium tracking-tight">
            {name}
          </div>
          <div className="text-orange-500 text-base font-medium leading-tight">
            ${cost}
          </div>
        </div>

        <div className="w-6 h-6 relative">
          <img src="./assests/icons/like_circle_outline.png" alt="" srcset="" />
        </div>
      </div>

      <div className="w-[194px] h-[35px] bg-yellow-500 rounded-bl-lg rounded-br-lg shadow text-center flex flex-col justify-center">
        <div className="text-white text-sm font-medium tracking-tight">
          Add to cart
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
