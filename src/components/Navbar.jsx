import React from "react";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div className="h-15 shadow text-gray-700 font-semibold px-4 md:px-8">
      <div className="h-full max-w-[1250px] m-auto grid grid-cols-[70%_30%]">
        <h2 className="flex items-center h-full text-lg">
          <Logo />
          BookmarkHub
        </h2>
        <div className="flex space-x-10 justify-end items-center h-full text-sm">
          <button>Home</button>
          <button className="px-[12px] py-[10px] text-white bg-violet-400 rounded transition-all duration-200 ease-in-out hover:scale-[1.05]">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
