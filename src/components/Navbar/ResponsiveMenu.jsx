import React from 'react'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div>
        <div className={`${showMenu ? "left-0" : "left-[-100%]"} fixed bottom-0 top-0 w-[75%] transition-all duration-300 `}>
            <div className='bg-red-400 h-screen'>test</div>
        </div>
    </div>
  )
}

export default ResponsiveMenu