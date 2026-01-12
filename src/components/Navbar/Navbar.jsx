import React, { useState } from "react";
import logo from "../../assets/website/logo.svg";
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "#about",
  },
  {
    id: 2,
    name: "Services",
    link: "#services",
  },
  {
    id: 3,
    name: "Projects",
    link: "#projects",
  },
];
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <>
      <nav className="bg-white dark:bg-black dark:text-white duration-300">
        <div className="container py-3 sm:py-2">
          <div className="flex justify-between items-center ">

            {/* Logo Section */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-5" />
                <span className="text-2xl sm:text-3xl font-semibold">Digital Agency</span>
              </a>
            </div>

            {/* Desktop NavLinks Section */}
            <div className="hidden md:block">
              <ul className="flex gap-8 items-center ">
                {MenuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="cursor-pointer py-4 ">
                      <a href={link} className="text-lg font-medium py-2 hover:text-[#6153cd] hover:border-b-2 hover:border-[#6153cd] transition-all duration-300">
                        {name}
                      </a>
                    </li>
                  );
                })}
                <button className="bg-[#6153cd] text-white hover:bg-[#6153cd]/80 duration-300 rounded-lg py-2 px-4 ">Get in Touch</button>
                <DarkMode/>
              </ul>
            </div>

            {/* Mobile View */}
            <div className="flex items-center gap-4 md:hidden">
                <DarkMode/>
                {
                    showMenu ? (
                        <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-2xl"/>
                    ) : (
                        <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-2xl"/>
                    )
                }
                
                
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu}/>
      </nav>
    </>
  );
};

export default Navbar;
