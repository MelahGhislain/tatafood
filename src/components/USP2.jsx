import React from 'react'
import smiling from '../assets/images/smiling.jpeg'
// import african from '../assets/images/african.webp'

const USP2 = () => {
  return (
    <div>
      <div className='relative w-full sm:h-[22rem] md:h-[22rem] md:flex'>
        <div className='flex-grow  w-full h-full'></div>
        <div className='flex-none h-full'>
          <img src={smiling} alt="smiling" className='sm:w-[42rem] h-full object-cover '/>
        </div>
         <div className='absolute top-0 w-full flex h-full md:clip-arrow bg-green-600/40 md:bg-green-600 py-6'>
              <div className='flex-1 pl-6 md:pl-10 lg:pl-20 flex flex-col justify-center'>
                  <h2 className='pl-2 text-2xl sm:text-3xl lg:text-4xl  font-bold sm:leading-[3rem] lg:leading-[4rem] mb:mb-4 text-white '>Everything you need to prepare food for your clients.</h2>
                  <p className='pl-2 text-sm md:text-lg fornt-normal text-neutral-100 leading-8 md:leading-10'>In large quantities, Fresh, dry, name it;  <br /> <span className=' bg-[#D1954c] text-white px-2 py-1 rounded'>We Supply</span>   in 3 simple steps! 
                  <span className=' bg-[#D1954c] text-white px-2 md:py-1 rounded md:ml-2 block sm:inline w-max h-max'>Start ordering now ...</span></p>
              </div>
              <div className='flex-1 w-full hidden md:inline'> </div>
          </div>
      </div>  

    </div>
  )
}

export default USP2