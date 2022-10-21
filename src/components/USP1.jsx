import React from 'react'
import {motion} from "framer-motion"
import smiling from '../assets/images/smiling.jpeg'
// import african from '../assets/images/african.webp'
import african from '../assets/images/african.jpeg'
import truck from '../assets/images/truck-goods.jpeg'

const USP1 = () => {
  return (
    <div className='mb-12'>
        <div className='mb-16 lg:mb-28 px-6 md:px-10 lg:px-24 flex items-center lg:space-x-6 flex-col lg:flex-row space-y-6 lg:space-y-0'>
            <motion.div 
                initial={{ opacity: 0,  y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, transition: "ease" }}
                className='flex-1 lg:flex-[1_1_18%] overflow-x-hidden order-2 lg:order-1 mt-6 lg:mt-0'>
                {/* <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold sm:leading-[3rem] lg:leading-[4rem] mb-4 text-gray-700 '>Everything you need to prepare food for your clients.</h2>
                <p className='text-lg fornt-normal text-gray-600'>In large quantities  Fresh, dry, name it and <span className='text-green-500'>we supply</span>  <br />  In 3 simple steps</p> */}
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold sm:leading-[2rem] lg:leading-[3rem] mb-4 text-gray-700 '><span className='text-green-500'>TATA FOOD MARKET</span> = Where Restaurants, Hotels & food businesses buy food supplies in Cameroon.</h2>
                <p className='text-lg fornt-normal text-gray-600'>In large quantities, fresh and high-quality</p>
                <p className='text-lg fornt-normal text-gray-600'>Use our Mobile or Web platform with ease</p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0,  y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, transition: "ease" }}
            className='flex-1 rounded-xl overflow-x-hidden shadow-lg order-1 lg:order-2 w-full'>
                <img src={truck} alt="right" className='lg:h-full md:h-[25rem]  w-full object-cover' />
            </motion.div>
        </div>

        <div className=' px-6 md:px-10 lg:px-24 flex items-center lg:space-x-8 flex-col lg:flex-row space-y-6 lg:space-y-0'>
            <motion.div
                initial={{ opacity: 0,  y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, transition: "ease" }}
                className='flex-1 rounded-xl overflow-x-hidden shadow-lg bg-red-500 w-full'>
                <img src={african} alt="right" className='lg:h-full md:h-[20rem]  w-full object-cover' />
            </motion.div>
            <motion.div
                initial={{ opacity: 0,  y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, transition: "ease" }}
             className='flex-1 lg:flex-[1_1_18%] overflow-x-hidden flex flex-col items-center mt-6 md:mt-0'>
                <h2 className='font-bold mb-4 text-gray-700 text-2xl lg:text-4xl'>WORRY NO MORE</h2>
                <p className='text-lg md:text-2xl text-gray-700 md:mb-4'>One less thing to worry about</p>
                
                <div className='flex flex-col space-y-6 font-normal text-gray-600 pt-4 text-sm md:text-sm'>
                    <div className='flex-1 flex md:space-x-4 justify-start items-center flex-col md:flex-row space-y-4 md:space-y-0'>
                        <p className='flex-1 flex items-start space-x-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </span>
                            <span>A user-friendly platform built for you, no more manual shopping</span>
                        </p>
                        <p className='flex-1 flex items-start space-x-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </span>
                            <span>Peace of mind that you’re always organized ahead of schedule</span>
                        </p>
                    </div>

                    <div className='flex-1 flex md:space-x-4 justify-start md:items-center flex-col md:flex-row space-y-4 md:space-y-0'>
                        <p className='flex-1 flex items-start space-x-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </span>
                            <span>Sit, relax and we deliver at your door step</span>
                        </p>
                        <p className='flex-1 flex items-start space-x-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </span>
                            <span>Everything you need. Nothing you don't</span>
                        </p>
                    </div>
                    
                    
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default USP1