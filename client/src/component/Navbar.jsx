import React, { useState } from "react";
import { IoIosLogOut, IoMdLogOut } from "react-icons/io";
import { VscSignIn } from "react-icons/vsc";

const Navbar = () => {
  const [isUser, setisUser] = useState(false);
  return (
    <nav className="flex justify-between p-5 items-center w-full h-20 bg-gray-700 border-blue-700 shadow-2xl border">
      <a href="/" className="font-bold text-white text-2xl">
        <span className="text-blue-500">Track</span>
        <span>HR</span>
      </a>
      <a
        href="/my-report"
        className="font-bold text-xl text-white border p-2 hover:bg-white hover:text-gray-900 border-blue-600"
      >
        My Report
      </a>
      <div className="flex gap-2 items-center cursor-pointer">
        {!isUser && (
          <a href="/login">
            <div className=" flex justify-center items-center gap-2 cursor-pointer">
              <p className=" text-white font-semibold text-xl">Login</p>
              <VscSignIn className="text-white text-xl font-bold" />
            </div>
          </a>
        )}
        {isUser && (
          <>
            <img
              src="./demoUser.png"
              className=" object-contain rounded-full"
              width={40}
              height={40}
            />
            <p className=" text-xl flex gap-1 items-center text-white max-sm:text-lg">
              logout
              <IoMdLogOut />
            </p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
