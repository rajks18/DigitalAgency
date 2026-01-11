import React from "react";
import logo from "../../assets/website/logo.svg";

const MenuLinks = [
    {
        id : 1,
        name : "About",
        link : "#about",
    },
    {
        id : 2,
        name : "Services",
        link : "#services",
    },
    {
        id : 3,
        name : "Projects",
        link : "#projects",
    },
]
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container py-3 sm:py-2">
          <div className="flex">
            {/* Logo Section */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-5" />
                <span className="text-2xl sm:text-3xl font-semibold">Digital Agency</span>
              </a>
            </div>
            {/* NavLinks Section */}
            <div>
                <ul>
                    {
                        MenuLinks.map(({id, name, link}) => {
                            return (
                                <li key={id}>
                                    <a href="">{Name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
