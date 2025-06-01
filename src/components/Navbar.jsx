import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-15 shadow text-gray-700 font-semibold px-4 md:px-8">
      <div className="h-full max-w-[1230px] m-auto grid grid-cols-2">
        <h2 className="flex items-center h-full text-lg">
          <Logo />
          BookmarkHub
        </h2>
        <div className="flex space-x-10 justify-end items-center h-full text-sm">
          <Link to={"/"}>Home</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
