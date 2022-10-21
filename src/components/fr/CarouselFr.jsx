import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function CarouselFr({items}) {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-4 md:py-16 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 -left-24 ml-8 cursor-pointer bg-green-400 flex justify-center items-center h-[3rem] w-[3rem] rounded-full" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {
                                      items.map((item, index)=>(
                                        <Slide index={index}>
                                            <div className="flex justify-center flex-shrink-0 relative w-full sm:w-auto py-6 transition-all duration-500 scale-90 hover:scale-100">
                                                <img src={item.image} alt="black chair and white table" className="object-cover object-center w-[10rem] h-[10rem] rounded-full" />
                                                <div className="absolute w-full text-center text-gray-600 bottom-0">
                                                    <h2 className="leading-4 text-base">{item.name}</h2>
          
                                                </div>
                                            </div>
                                        </Slide>
                                      ))
                                    }
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 -right-24 mr-8 bg-green-400 flex justify-center items-center h-[3rem] w-[3rem] rounded-full" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 -left-20 ml-8 cursor-pointer bg-green-400 flex justify-center items-center h-[2rem] w-[2rem] rounded-full" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex justify-center lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                {
                                      items.map((item, index)=>(
                                        <Slide index={index}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto py-6 transition-all duration-500 scale-90 hover:scale-100">
                                                <img src={item.image} alt="black chair and white table" className="object-cover object-center w-[10rem] h-[10rem] rounded-full" />
                                                <div className="absolute w-full text-center text-gray-600 bottom-0">
                                                    <h2 className="leading-4 text-base">{item.name}</h2>
          
                                                </div>
                                            </div>
                                        </Slide>
                                      ))
                                    }
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 -right-20 mr-8 bg-green-400 flex justify-center items-center h-[2rem] w-[2rem] rounded-full" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 -left-10 ml-8 bg-green-400 flex justify-center items-center h-[2rem] w-[2rem] rounded-full cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                {
                                      items.map((item, index)=>(
                                        <Slide index={index} className="w-max">
                                            <div className="flex flex-shrink-0 relative justify-center w-full sm:w-auto py-4 transition-all duration-500 scale-90 hover:scale-100">
                                                <img src={item.image} alt="black chair and white table" className="object-cover object-center w-[10rem] h-[10rem] rounded-full" />
                                                <div className="absolute w-full -left-2 text-gray-600 bottom-0 ">
                                                    <h2 className="leading-4 text-base text-center">{item.name}</h2>
          
                                                </div>
                                            </div>
                                        </Slide>
                                      ))
                                    }
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 -right-10 mr-8 bg-green-400 flex justify-center items-center h-[2rem] w-[2rem] rounded-full" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
