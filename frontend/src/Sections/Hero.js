import React from 'react'
import Heroimg from '../Assets/hero.png'

const Hero = () => {
  return (
    <div className="relative w-full font-poppins" style={{ height: '80vh' }}>
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-full absolute top-0 left-0"
        style={{
          backgroundImage: `url(${Heroimg})`,
          filter:"brightness(65%)"
        }}
      ></div>
      <div className='text-white h-full w-full relative flex justify-center items-center'>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <div className='font-bold text-4xl text-center'>
              Grow Smart. Farm Better.
          </div>
          <div className='font-bold text-sm'>
              AgriLink connects farmers, buyers, and tools for a better tomorrow.
          </div>
          <div className='flex gap-3 flex-row'>
            <button className='bg-green-600 font-bold text-sm p-3 rounded-2xl'>Order Now</button>
            <button className='text-green-600 bg-white font-bold font-base text-sm p-3 rounded-2xl'>Learn More</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero
