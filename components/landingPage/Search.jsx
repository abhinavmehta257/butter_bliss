import React from "react";

function Search() {
  return (
    <div className="flex flex-row items-center p-[12px] bg-[#F6F6F6] rounded-[8px] w-full">
      <span className="mr-[12px]">
        <img src="./assests/icons/Search.png" alt="" />
      </span>
      <input
        type="text"
        placeholder="Search dishes"
        className="text-stone-500 text-sm font-normal focus:outline-0 bg-[#F6F6F6] w-full"
      />
    </div>
  );
}

export default Search;
