import React, { useEffect, useState } from 'react'
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
       
        }
    });
  return (
    <div>
        {
        theme === "dark" ? (
            <BiSolidSun onClick={ () => setTheme("light")} className='text-2xl' />
        ) : (
            <BiSolidMoon onClick={ () => setTheme("dark")} className='text-2xl' />
        )}
    </div>
  )
}

export default DarkMode