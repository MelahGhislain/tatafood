import React, { useState } from 'react'
import food from '../assets/food.jpeg'
import vtc from '../assets/vtc.png'
import partners from '../assets/partners.png'
import lionsgate from '../assets/lionsgate.png'
import apple from '../assets/apple.webp'
import google from '../assets/google.webp'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import {items} from '../components/items'
import emailjs from '@emailjs/browser'

const Home1 = () => {
    const [value, setValue] = useState({fName: "", lName: "", phone: "", email: ""})
    const [error, setError] = useState({fName: "", lName: "", phone: "", email: ""})
    const [loading, setLoading] = useState(false)

    const handleChange =(e)=>{
        setValue(curr=> {return {...value, [e.target.name]: e.target.value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if(value.fName.trim() === "" || value.fName.trim().length < 3){
            setError(curr => {return {lName: "", phone: "", email: "", fName: "Requires at least 3 characters"}})
        }else if(value.lName.trim() === "" || value.lName.trim().length < 3){
            setError(curr => {return {fName: "", phone: "", email: "", lName: "Requires at least 3 characters"}})
        }else if(value.phone.trim() === "" || (value.phone.trim().length < 8 && value.phone.trim().length > 8)){
            setError(curr => {return {fName: "", lName: "", email: "", phone: "Invalid Phone number"}})
        }else if(value.email.trim() === "" ){
            setError(curr => {return {fName: "", lName: "", phone: "", email: "Invalid Phone number"}})
        }
         
        emailjs.send('service_yka2ybg', 'YOUR_TEMPLATE_ID', value)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               setLoading(false)
            }, function(error) {
               console.log('FAILED...', error);
               setLoading(false)
            });
    }
  return (
    <div className='bg-[#eff7fa]'>
        <NavBar />
        <div className='pb-6 '>
            <div className='h-[16rem] md:h-[30rem] lg:h-[35rem] relative'>
                <img src={food} alt="food" className='w-full h-full'/>
                <div className='bg-black/50 absolute top-0 w-full h-full'></div>

                <div className='absolute top-0 w-full h-full flex text-6xl px-4 md:px-10 py-6 flex-col md:flex-row'>
                    <div className='flex-1 flex flex-col justify-center'>
                        <h1 className='text-4xl md:text-6xl text-white mb-4 '>Coming Soon...</h1>
                        <p className='text-white text-3xl md:text-5xl'>Available on</p>
                        <div className='flex items-center space-x-4 mt-2'>
                            <a href='/'>
                                <button className='h-10'>
                                    <img src={google} alt="google" className='h-full w-full '/>
                                </button>
                            </a>
                            <a href='/'>
                                <button className='h-10'>
                                    <img src={apple} alt="apple" className='h-full w-full '/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='flex-1'></div>
                </div>
            </div>

        </div>

        <div className='px-4 md:px-10'>
            <Carousel items={items} />
        </div>

        <div className='px-4 md:px-10'>
            <div className='bg-white my-4 border rounded-lg px-4 py-4'>
                <h3 className='text-3xl text-gray-700'>Be the first to get the app</h3>
                <form onSubmit={handleSubmit}>
                    <div className='flex md:items-center mb-6 md:space-x-8 flex-col md:flex-row space-y-4 md:space-y-0'>
                        <div className="flex-1">
                            <label for="fName" className="block mb-2 text-sm text-gray-400 ">First name</label>
                            <input type="text" name="fName" value={value.fName} onChange={handleChange} className={`bg-gray-50 border text-gray-900 text-sm w-full focus:outline-none ${error.fName? "border-red-500 bg-red-500/20 placeholder:text-red-500" : "border-gray-300"} `} placeholder={`${error.fName? error.fName: ""}`} />
                        </div>
                        <div className="flex-1">
                            <label for="lName" className="block mb-2 text-sm text-gray-400 ">Last name</label>
                            <input type="text" name="lName" value={value.lName} onChange={handleChange} className={`bg-gray-50 border text-gray-900 text-sm w-full focus:outline-none ${error.lName? "border-red-500 bg-red-500/20 placeholder:text-red-500": "border-gray-300"}`} placeholder={`${error.lName? error.lName: ""}`} />
                        </div>
                    </div>
                    <div className='flex md:items-center mb-6 md:space-x-8 flex-col md:flex-row space-y-4 md:space-y-0'>
                        <div className="flex-1">
                            <label for="phone" className="block mb-2 text-sm text-gray-400 ">Phone</label>
                            <input type="number" name="phone" value={value.phone} onChange={handleChange} className={`bg-gray-50 border text-gray-900 text-sm w-full focus:outline-none ${error.phone? "border-red-500 bg-red-500/20 placeholder:text-red-500": "border-gray-300"}`} placeholder={`${error.phone? error.phone: ""}`} />
                        </div>
                        <div className="flex-1">
                            <label for="email" className="block mb-2 text-sm text-gray-400 ">Email adress</label>
                            <input type="email" name="email" value={value.email} onChange={handleChange} className={`bg-gray-50 border text-gray-900 text-sm w-full focus:outline-none ${error.email? "border-red-500 bg-red-500/20 placeholder:text-red-500": "border-gray-300"}`} placeholder={`${error.email? error.email: ""}`} />
                        </div>
                    </div>

                    <button type="submit" class="text-white bg-green-400 hover:bg-green-00 rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center" disabled={loading}>Submit</button>
                </form>

            </div>
        </div>
        









       {/* <div className='flex md:space-x-6 bg-black text-white my-8 px-4 md:px-10 flex-col md:flex-row space-y-3 md:space-y-0'>
            <div className='flex-1 py-8'>
                <h2 className='text-3xl font-bold mb-4'>Let Us Help You Attract More Clients</h2>
                <div className='flex space-x-10'>
                    <button className={`border-b-4 pb-2 ${active? " border-green-600" : "border-gray-500 text-gray-500"} `} onClick={()=>setActive(true)}>What You Get</button>
                    <button className={`pb-2 border-b-4 ${!active? " border-green-600" : "border-gray-500 text-gray-500"}`} onClick={()=>setActive(false)}>How We Work</button>
                </div>
                {active && <p className=' py-6 font-light'> All your food item problems are solve, hurry up the fist 100 people to order will get a 10% discount</p>}
                {!active && <p className=' py-6 font-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora a laboriosam eius magnam tenetur neque, alias pariatur consequuntur harum?</p>}
                <div className='flex justify-center'>
                    <button className='bg-green-600 py-3 px-6 rounded-full text-white text-sm'>Learn More</button>
                </div>
            </div>
            <div className='flex-1 h-[25rem] w-full py-8'>
                <img src={food} alt="food" className='h-full w-full object-contain' />
            </div>
       </div> */}


       <div className='my-12 px-4'>
        <h3 className='text-3xl text-gray-700 font-bold text-center mb-4'>Our Partners</h3>
        <div className='flex items-center justify-center space-x-4 md:space-x-8 mt-3'>
            <div className='h-[4rem]'>
                <img src={lionsgate} alt="vtc" className='w-full h-full object-contain' />
            </div>
            <div className='h-[4rem]'>
                <img src={partners} alt="vtc" className='w-full h-full object-contain' />
            </div>
            <a href="http://ww.vtc.cm">
                <div className='h-[2rem]'>
                    <img src={vtc} alt="vtc" className='w-full h-full object-contain' />
                </div>
            </a>
        </div>
       </div>

       <Footer />
    </div>
  )
}

export default Home1

{/* <div className='h-[45vh] sm:h-[60vh] md:h-[90vh] w-full relative rounded-lg overflow-hidden'>
                <div className='w-full h-full flex justify-end'>
                    <img src={female} alt="grocery" className='h-full backdrop-blur-lg rounded-lg md:-mr-20' />
                </div>
                <div className='absolute top-0 w-full h-full backdrop-blur-[0px] md:bg-black/10 rounded-lg flex'>
                    <div className='flex-1 px-4 sm:px-6 md:px-10 lg:px-24 flex flex-col justify-center backdrop-blur-sm md:backdrop-blur-0 bg-[#D1954c]/50 md:bg-[#D1954c]  md:bg-clip '>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl md:leading-[3rem] text-white md-2 sm:mb-4 font-bold'> Everything <br /> you need </h1>
                        <div className='text-white md:pr-10 lg:pr-20 pt-2 md:pt-2'>
                            <p>To prepare food for your clients </p>
                            <p className='text-lg md:text-2xl font-bold md:mt-2'>in your Restaurants,</p>
                            <p className='text-lg md:text-2xl font-bold'>Hotels & food businesses</p>
                         
                        </div>
                        <a href="#contact">
                            <button className='w-max bg-green-600 px-4 py-2 text-white mt-4 rounded'>Start ordering now!</button>
                        </a>
                    </div>
                    <div className='md:flex-1 md:w-[50%]'></div>
                </div>
            </div> */}