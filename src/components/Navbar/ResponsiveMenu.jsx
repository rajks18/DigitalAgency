import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { MenuLinks } from './Navbar'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div>
        <div className={`${showMenu ? "left-0" : "left-[-100%]"} fixed bottom-0 top-0 w-[75%] transition-all duration-300 pt-18 px-8 shadow-lg bg-white dark:bg-gray-900 z-50 flex flex-col justify-between pb-4`}>
            <div className='card'>
                {/* user section */}
                <div className='flex justify-start items-center gap-3'>
                    <FaUserCircle size = {50} />
                    <div>
                        <h1>Hello World</h1>
                        <h1 className='text-sm text-slate-500'>Premium User</h1>
                    </div>
                </div>

                {/* Menu Section */}
                <nav className='mt-12'>
                    <ul className='space-y-4 text-xl'>
                        {
                            MenuLinks.map(({ id, name, link }) => {
                                return (
                                    <li key = {id}>
                                        <a href={link} className='mb-5 inline-block'>{name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

            {/* footer section */}
                <div>
                    <h1>
                        Made with ❤️ by <a href="https://github.com/rajks18">Rajkumar</a>
                    </h1>
                </div>
        </div>
    </div>
  )
}

export default ResponsiveMenu