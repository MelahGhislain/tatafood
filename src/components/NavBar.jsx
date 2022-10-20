import React, { useEffect, useState } from 'react'
import logo from '../assets/grocery.png'
import france from '../assets/images/france.png'
import usa from '../assets/images/usa.png'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const [menu, setMenu] = useState(false)
  const [flag, setFlag] = useState(false)
  const [en, setEn] = useState(true)

  const changeLan=()=>{
    setEn(!en)
    setFlag(!flag)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if(flag === true){
        setFlag(false)
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [flag]);

  return (
    // #eff7fa
      <div className='bg-green-50 px-8 md:px-28 fixed top-0 w-full z-50' >
        <nav className='flex justify-between py-2 md:py-4 items-center'>
            <div className='h-14 w-14 md:h-16 md:w-16'>
                <img src={logo} alt="logo" className='w-full h-full object-cover' />
            </div>
            
            {/* navs */}

            <ul className='hidden lg:flex space-x-4 items-center'>
                    <a href="#about">
                        <li className='font-bold text-xl text-gray-600'>Home</li>
                    </a>
                    <a href="#contact">
                        <li className='font-bold text-xl text-gray-600'>About</li>
                    </a>
                    <a href="#about">
                        <li className='font-bold text-xl text-gray-600'>Blog</li>
                    </a>
                    <a href="#contact">
                        <li className='font-bold text-xl text-gray-600'>Partners</li>
                    </a>
                    <a href="#contact">
                        <li className='font-bold text-xl text-gray-600'>Jobs</li>
                    </a>
                </ul>

            <ul className='hidden lg:flex  space-x-4 items-center'>
                {/* Search */}
                {toggle && <div className='w-[20rem] search'>
                  
                    <form className='w-full'>
                        <div class="w-full">
                            <div class="w-full flex items-center rounded-full overflow-hidden border border-green-500">
                                <input type="search" id="location-search&quot;" class="block p-2 w-full z-20 text-sm outline-none border-gray-300 text-gray-900 bg-gray-50 border-0" placeholder="Search" />
                                <button type="submit" class=" p-2 text-sm font-medium text-white bg-green-600 border border-green-600 hover:bg-green-600 focus:outline-none px-4 ">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>

                </div>}
                

                {/* Search Icon */}
                {!toggle && <button type="submit" class=" p-2 text-sm font-mediumborderfocus:outline-none " onClick={()=>setToggle(true)}>
                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>}

                <div className='relative'>
                  <div className='flex items-center space-x-2 cursor-pointer h-max text-sm' onClick={()=>setFlag(!flag)}>
                    <span className='h-5'>
                        <img src={en? usa: france} alt="flag" className='h-full' />
                      
                    </span>
                    <p className=''>{en? "EN": "FR"}</p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </span>
                  </div>
                 {flag && <div className='absolute top-6 mt-2 flex items-center space-x-2 cursor-pointer h-max text-sm' onClick={changeLan}>
                    <span className='h-5'>
                        <img src={!en? usa: france} alt="flag" className='h-full' />
                      
                    </span>
                    <p className=''>{!en? "EN": "FR"}</p>
                    
                  </div>}

                </div>
            </ul>

            {/* Mobile */}
            <div className='relative lg:hidden'>
                <span onClick={()=>setMenu(!menu)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </span>
                {menu && 
                  <ul className='absolute w-[20rem] md:w-[24rem] top-12 md:top-14 -right-8 md:-right-24 lg:hidden flex px-4 py-4 items-start bg-white flex-col'>
                    
                    

                    <a href="#about" className='w-full'>
                        <li className='font-bold text-gray-600 py-2 border-b w-full border-gray-100'>Home</li>
                    </a>
                    <a href="#contact" className='w-full'>
                        <li className='font-bold text-gray-600 py-2 border-b w-full border-gray-100'>About</li>
                    </a>
                    <a href="#about" className='w-full'>
                        <li className='font-bold text-gray-600 py-2 border-b w-full border-gray-100'>Blog</li>
                    </a>
                    <a href="#contact" className='w-full'>
                        <li className='font-bold text-gray-600 py-2 border-b w-full border-gray-100'>Partners</li>
                    </a>
                    <a href="#contact" className='w-full'>
                        <li className='font-bold text-gray-600 py-2 border-b w-full border-gray-100'>Jobs</li>
                    </a>


                    <div className='relative mt-2'>
                      <div className='flex items-center space-x-2 cursor-pointer h-max text-sm' onClick={()=>setFlag(!flag)}>
                        <span className='h-5'>
                            <img src={en? usa: france} alt="flag" className='h-full' />
                          
                        </span>
                        <p className=''>{en? "EN": "FR"}</p>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          </svg>
                        </span>
                      </div>
                    {flag && <div className='absolute top-6 mt-2 flex items-center space-x-2 cursor-pointer h-max text-sm' onClick={changeLan}>
                        <span className='h-5'>
                            <img src={!en? usa: france} alt="flag" className='h-full' />
                          
                        </span>
                        <p className=''>{!en? "EN": "FR"}</p>
                        
                      </div>}

                    </div>


                    {/* Search */}
                    <div className={`w-full ${flag? "mt-9":"mt-4"}`}>
                      
                        <form className='w-full'>
                            <div class="w-full">
                                <div class="w-full flex items-center rounded-full overflow-hidden border border-green-500">
                                    <input type="search" id="location-search&quot;" class="block p-2.5 w-full z-20 text-sm outline-none border-gray-300 text-gray-900 bg-gray-50 border-0" placeholder="Search" />
                                    <button type="submit" class=" p-2.5 text-sm font-medium text-white bg-green-600 border border-green-600 hover:bg-green-600 focus:outline-none px-4 ">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span class="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </ul>}
            </div>


        </nav>
    </div>
        
  )
}

export default NavBar
