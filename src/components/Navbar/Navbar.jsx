import React from 'react'
import logo from "../../assets/website/logo.svg"
const Navbar = () => {
  return (
    <>
        <nav>
            <div className='container'>
                <div className='flex'>
                    <div>
                        <img src={logo} alt="Logo" className='w-5' />
                        <a href="#" className=''>Digital Agency</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar