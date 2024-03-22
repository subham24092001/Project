import React, { useState } from "react";
// assets
import { Logo } from "../assets";
// react-icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col pb-20">
      <header className="p-5 lg:px-40 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="" />
          <p className="text-white hidden md:block">QuillAudits</p>
        </div>

        <div className="hidden lg:flex justify-center w-full text-white">
          <ul className="flex gap-10">
            <li className="cursor-pointer">
              <a href="#" className="flex gap-1 items-center">
                Services
                <IoIosArrowDown />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Pricing</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Our Audits</a>
            </li>
            <li className="cursor-pointer">
              <a href="#" className="flex gap-1 items-center">
                Tools
                <IoIosArrowDown />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#" className="flex gap-1 items-center">
                Resources
                <IoIosArrowDown />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Refer-Earn-Secure</a>
            </li>
          </ul>
        </div>

        <div className="custom-button whitespace-nowrap">Request An Audit</div>

        <div onClick={toggleMenu} className="lg:hidden">
          <RxHamburgerMenu className="text-white text-3xl cursor-pointer" />
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-gray-700 text-white p-2 shadow-md rounded-md">
            <ul className="flex flex-col gap-2 px-3">
              <li className="cursor-pointer">
                <a href="#" className="flex gap-1 items-center">
                  Services
                  <IoIosArrowDown />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#">Pricing</a>
              </li>
              <li className="cursor-pointer">
                <a href="#">Our Audits</a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="flex gap-1 items-center">
                  Tools
                  <IoIosArrowDown />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="flex gap-1 items-center">
                  Resources
                  <IoIosArrowDown />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#">Refer-Earn-Secure</a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <div className="hidden lg:block mx-40 border-2 border-white opacity-5 rounded-sm"></div>
    </div>
  );
};

export default Navbar;
