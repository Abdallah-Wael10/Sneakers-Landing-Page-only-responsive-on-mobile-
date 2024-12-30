"use client";

import React, { useState } from "react";
import logo from "./images/logoo.svg";
import Image from "next/image";
import profile from "./images/profile.svg";
import cart from "./images/cart.svg";
import search from "./images/search.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[120px] bg-white flex justify-center items-center animate-slide-in2">
      <nav className="w-full h-[80px] bg-black text-white flex rounded-[20px] max-460:flex-col max-460:h-auto max-460:relative">
        {/* Left Section */}
        <div className="w-[30%] h-[80px] flex pl-[30px] items-center max-460:w-full max-460:justify-between max-460:px-5">
          <Image src={logo} alt="icon logo" />
          {/* Toggle Button */}
          <div
            className="hidden max-460:block text-[24px] cursor-pointer"
            onClick={toggleNav}
          >
            ☰
          </div>
        </div>

        {/* Center Section (Nav Links) */}
        <div
          className={`w-[40%] h-[80px] max-460:h-[180px] flex text-white gap-7 text-[16px] font-semibold justify-center items-center max-460:absolute max-460:w-full max-460:bg-black max-460:flex-col max-460:pt-4 max-460:gap-3 transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-460:top-[80px]  max-460:opacity-100 max-460:visible"
              : "max-460:top-[-300px] max-460:opacity-0 max-460:invisible"
          }`}
        >
          <h1 className="cursor-pointer">Home</h1>
          <h1 className="cursor-pointer">All Sneakers</h1>
          <h1 className="cursor-pointer">Sales</h1>
          <h1 className="cursor-pointer">Contact us</h1>
        </div>

        {/* Right Section */}
        <div className="w-[30%] h-[80px] flex justify-center items-center gap-4 max-460:hidden">
          <Image className="cursor-pointer" src={search} alt="icon" />
          <Image className="cursor-pointer" src={cart} alt="icon" />
          <Image className="cursor-pointer" src={profile} alt="icon" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
