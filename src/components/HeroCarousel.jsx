import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import female from '../assets/images/female.webp'
import hero from '../assets/images/hero.gif'


const HeroCarousel = () => {
  return (
        <CarouselProvider className="block " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2} visibleSlides={1} step={1} infinite={true} dragEnabled={true} isPlaying={true}>
                    <div className="w-full relative flex items-center justify-center ">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 md:-left-3 focus:outline-none cursor-pointer bg-green-600 rounded-full h-5 w-5 sm:h-8 sm:w-8 flex justify-center items-center" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 gap-6   items-center justify-start transition ease-out duration-700">
                                   
                                            <Slide >
                                                <div className="flex flex-shrink-0 relative w-full">
                                                    <div className='h-[45vh] sm:h-[60vh] md:h-[90vh] w-full relative rounded-lg overflow-hidden'>
                                                        <div className='w-full h-full flex justify-end relative'>
                                                            <img src={hero} alt="grocery" className='h-full backdrop-blur-lg rounded-lg md:-mr-20' />
                                                            <div className='absolute top-0 bg-black/30 w-full h-full'></div>
                                                        </div>
                                                        <div className='absolute top-0 w-full h-full backdrop-blur-[0px] md:bg-black/10 rounded-lg flex'>
                                                            <div className='flex-1  px-4 sm:px-6 md:px-10 lg:px-24 flex flex-col justify-center backdrop-blur-sm md:backdrop-blur-0 bg-[#D1954c]/50 md:bg-[#D1954c]  md:bg-clip '>
                                                                <h1 className='text-3xl md:text-4xl lg:text-6xl md:leading-[3rem] text-white md-2 sm:mb-4 font-bold'> Everything <br /> you need </h1>
                                                                <div className='text-white md:pr-10 lg:pr-20 pt-2 md:pt-2'>
                                                                    <p>To prepare food for your clients </p>
                                                                    <p className='text-lg md:text-2xl font-bold md:mt-2'>in your Restaurants,</p>
                                                                    <p className='text-lg md:text-2xl font-bold'>Hotels & food businesses</p>
                                                                
                                                                </div>
                                                                <a href="#contact">
                                                                    <button className='w-max bg-green-600 text-sm px-4 py-2 text-white mt-1 sm:mt-4 rounded'>Start ordering now!</button>
                                                                </a>
                                                            </div>
                                                            <div className='md:flex-1 md:w-[50%]'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>

                                            <Slide >
                                                <div className="flex flex-shrink-0 relative w-full">
                                                    <div className='h-[45vh] sm:h-[60vh] md:h-[90vh] w-full relative rounded-lg overflow-hidden'>
                                                        <div className='w-full h-full flex justify-end relative'>
                                                            <img src={female} alt="grocery" className='h-full backdrop-blur-lg rounded-lg md:-mr-20' />
                                                            <div className='absolute top-0 bg-black/30 w-full h-full'></div>
                                                        </div>
                                                        <div className='absolute top-0 w-full h-full backdrop-blur-[0px] md:bg-black/10 rounded-lg flex'>
                                                            <div className='flex-1 px-4 sm:px-6 md:px-10 lg:px-24 flex flex-col justify-center backdrop-blur-sm md:backdrop-blur-0 bg-green-500/50 md:bg-green-500  md:bg-clip '>
                                                                <h1 className='text-xl md:text-4xl lg:text-5xl md:leading-[4rem] text-white md-2 sm:mb-4 font-bold'> MAKE YOUR <br className='' /> LIST, SHOP & <br className='' /> RECIEVE</h1>
                                                                <div className='text-white md:pr-10 lg:pr-20 pt-2 md:pt-2'>
                                                                    <p className='text-sm md:text-lg'>Making it quick &  easy <br className='md:hidden' /> to place your order  </p>
                                                                    <p className='text-lg md:text-2xl font-bold md:mt-2'>anytime, anywhere</p>
                                                                    {/* <p className='text-lg md:text-2xl font-bold'>Hotels & food businesses</p> */}
                                                                
                                                                </div>
                                                                <a href="#contact">
                                                                    <button className='w-max bg-[#D1954c] text-xs md:text-sm px-4 py-2 text-white mt-2 md:mt-4 rounded'>Delight your customers Now!</button>
                                                                </a>
                                                            </div>
                                                            <div className='md:flex-1 md:w-[50%]'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                       
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 -right-2 md:-right-3 focus:outline-none bg-green-600 rounded-full h-5 w-5 sm:h-8 sm:w-8 flex justify-center items-center" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
  )
}

export default HeroCarousel