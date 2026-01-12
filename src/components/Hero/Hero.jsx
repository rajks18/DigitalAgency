import React from 'react'
import HeroImage from "../../assets/website/HeroImage.png";

const Hero = () => {
  return (
    <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
        <div className='container min-h-[620px] flex mt-10 sm:mt-0'>
            <div className='grid grid-cols-2 gap-5 place-items-center'>
                {/* Image Section */}
                <div className='order-1 sm:order-2 relative'>
                    <img src={HeroImage} alt="Hero Image" />
                </div>
                {/* Text Content Section */}
                <div>
                    <h1>Building Brands in the <span>Digital Agency</span></h1>
                    <p>Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero