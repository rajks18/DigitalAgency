import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { MenuLinks } from './Navbar'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div>
        <div className={`${showMenu ? "left-0" : "left-[-100%]"} fixed bottom-0 top-0 w-[75%] transition-all duration-300 pt-16 px-8`}>
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
                                        <a href={link}>{name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default ResponsiveMenu