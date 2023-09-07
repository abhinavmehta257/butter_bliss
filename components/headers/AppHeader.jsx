import React from "react";

function AppHeader() {
  return (
    <div className="p-[16px] flex flex-row justify-between bg-gradient-to-tl from-neutral-200 to-orange-100 rounded-bl-xl rounded-br-xl">
      <div className="flex flex-col">
        <span className="text-red-600 text-xs font-normal uppercase">
          DELIVER TO
        </span>
        <select
          name="address"
          className="bg-transparent text-stone-500 text-sm font-normal focus:border-transparent ml-[-4px] focus:outline-0"
        >
          <option value="address1" id="1" className="">
            Home - Supertech Eco Village -1
          </option>
        </select>
      </div>
      <div className="w-[42px] h-[42px]">
        <img src="./assests/images/Logo_Dark.png" alt="" srcset="" />
      </div>
    </div>
  );
}

export default AppHeader;
