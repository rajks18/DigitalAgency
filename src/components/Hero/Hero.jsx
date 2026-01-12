import React from 'react'
import HeroImage from "../../assets/website/HeroImage.png";

const Hero = () => {
  return (
    <main className=''>
        <div>
            <div className=''>
                {/* Image Section */}
                <div>
                    <img src={HeroImage} alt="Hero Image" />
                </div>
                {/* Text Content Section */}
                <div>jjj</div>
            </div>
        </div>
    </main>
  )
}

export default Hero