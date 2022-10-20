import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import {items} from '../components/items'
import mobile from '../assets/mobile-app.png'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'
import vtc from '../assets/vtc.png'
import garden from '../assets/images/garden.jpg'
import cameroon from '../assets/images/cameroon.png'
import nigeria from '../assets/images/nigeria.png'
import partners from '../assets/partners.png'
import lionsgate from '../assets/lionsgate.png'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import USP1 from '../components/USP1'
import USP2 from '../components/USP2'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import HeroCarousel from '../components/HeroCarousel'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const faqs = [
    {question: "What type of raw foodstuff do you supply?", answer: "- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, voluptatibus."},
    {question: "Which cities do you operate?", answer: "- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, voluptatibus."},
    {question: "How long do you take to supply?", answer: "- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, voluptatibus."},
]
const countries = [
    {
        image: cameroon,
        code: "+237"
    },
    {
        image: nigeria,
        code: "+234"
    },
]

const Home = () => {
    const [selectCountry, setSelectCountry] = useState(false)
    const [code, setCode] = useState(countries[0])
    const [value, setValue] = useState({ phone: "", email: ""})
    const [error, setError] = useState({ phone: "", email: ""})
    // const [loading, setLoading] = useState(false)

    const handleCode= (country)=>{
        setCode(country)
        setSelectCountry(false)
    }

    const handleChange =(e)=>{
        setValue(curr=> {return {...value, [e.target.name]: e.target.value}})
        setError(curr => {return {email: "", phone: ""}})
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoading(true)
        if(value.email.trim() === "" ){
            setError(curr => {return {phone: "", email: "Invalid email"}})
        }else if(value.phone.trim() === "" || (value.phone.trim().length < 8 && value.phone.trim().length > 8)){
            setError(curr => {return {email: "", phone: "Invalid Phone number"}})
        }
        if(!error.email && !error.phone){
            console.log("about to send")
            emailjs.send('service_zwao7ek', 'template_udwqzi5', value, 'lcmycwJ0TSISUsfNV')
                .then(function(response) {
                    toast.success('Message sent sucessfully!');
                    setValue(curr=> {return {phone: "", email: ""}})

                    window.location.replace('https://chat.whatsapp.com/HUM6hgx0wCwIuHzmTAoMN7')
                }, function(error) {
                    toast.error('Please try again');
                    console.log('FAILED...', error);
                //    setLoading(false)
            });
        }else{
            console.log('Hello')
        }
    }

  return (
    <div className='bg-neutral-50 '>
        <ToastContainer
            position="top-right"
            autoClose={5000}    
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <NavBar />
        <motion.div 
            initial={{ opacity: 0,   }}
            whileInView={{ opacity: 1,}}
            transition={{ duration: 1, transition: "ease" }}
            className='pt-28 px-6 '
        >
            
            <HeroCarousel />

        </motion.div>
        {/* carousel */}
        <motion.div 
            initial={{ opacity: 0,  y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, transition: "ease" }}
            className='md:py-12'
        >
            <h2 className='text-xl md:text-4xl font-bold px-6 md:px-16 lg:px-32 text-green-600 pt-6'>Fresh, Dry, Smoked, Healthy and Exceptional high quality</h2>
            <p className='text-lg font-normal px-6 md:px-16 lg:px-32 text-gray-700 pt-4 '>Save time & money sourcing food supplies from farms & manufacturers in Cameroon & from abroad </p>
            <div className='px-4 md:px-14 '>
                <Carousel items={items} />
            </div>
        </motion.div>


        {/* USP unique selling point */}
        <USP1 />

        <USP2 />

        {/* Cards */}
        <motion.div 
        initial={{ opacity: 0,  y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, transition: "ease" }}
        className='py-8 md:py-12'>
            <h2 className='text-xl md:text-3xl font-bold px-6 md:px-16 lg:px-24 text-green-600 py-6 text-center md:text-start'>How TATA Food Market works</h2>
            <div className='px-6 md:px-16 lg:px-24 py-4 md:py-6 w-full grid items-start grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] md:gap-x-6 gap-y-10'>
                <Card 
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                    }
                    number="1"
                    text="Download & Sign Up on the Tatafoodmarket App"
                />
                <Card 
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    } 
                    number="2"
                    text="Place an order"  
                />
                <Card 
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    } 
                    number="3"
                    text="Our agent will be at
                    your doorstep within
                    hours" 
                />
            </div>
        </motion.div>
        
        {/* download mobile app */}
        <motion.div 
        initial={{ opacity: 0,  y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, transition: "ease" }}
        id="about" className='my-10 md:my-20 px-6 md:px-10 lg:px-24'>
            <div className=' bg-green-500 text-white flex rounded-xl flex-col md:flex-row space-y-4 md:space-y-0'>
                <div className='flex-1 flex flex-col justify-center px-4 sm:px-8 py-6'>
                    <h2 className='text-2xl md:text-3xl font-bold'>Download Our Mobile App Today!</h2>
                    <h5 className='py-2 md:py-4 font-bold'>Save time and money with Tata food market</h5>
                    <p className='text-neutral-200 text-sm'>Request - Procure - Save time. All at your fingertips. Switch to the tatafoodmarket side of life!</p>
                    <div className='flex space-x-4 mt-4'>
                        <span>
                            <img src={google} alt="google" />
                        </span>
                        <span>
                            <img src={apple} alt="apple" />
                        </span>
                    </div>
                </div>

                <div className='flex-1'>
                    <div className=' lg:-my-16'>
                        <img src={mobile} alt="mobile" />
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Contact us*/}
        <motion.div 
        initial={{ opacity: 0,  y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, transition: "ease" }}
        id='contact' className=' py-4 md:py-10 md:my-16 px-6 md:px-10 lg:px-24 '>
            <div className=' bg-[#D1954c]  text-white flex py-6 md:py-10 rounded-xl flex-col'>
                
                <h2 className='px-4 sm:px-8 text-2xl md:text-3xl font-bold mb-6 w-full text-center'>BE THE FIRST TO USE OUR PLATFORM <br /> <span className='text-lg'>Get Updates from  TATA Food Market</span> </h2>
                <div className='flex items-center flex-col space-y-6 '>

                    <form className='flex-1 px-4 md:w-[35.5rem]' onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <input type="email" name="email" value={value.email} onChange={handleChange} className={`mb-4 rounded bg-gray-50  border-0 text-gray-900 text-sm block w-full p-2.5 placeholder:text-xs  ${error.email? "bg-[#f3cece] placeholder:text-red-500": "border-gray-300"}`} placeholder= {`${error.email? error.email: 'Enter your email to join our email list'}`} required=""/>
                            
            
                            <div className='rounded bg-gray-50 flex items-center mb-4 '>
                                <div className='relative cursor-pointer'>
                                    <div className='text-sm flex items-center space-x-2 text-gray-400 border-r py-2 px-2 ' onClick={()=>setSelectCountry(!selectCountry)}>
                                        <span className=''>
                                            <img src={code.image} alt="cameroon" className='w-9 h-4 object-cover ' />
                                        </span>
                                        <p className='hidden sm:inline'>{code.code}</p>
                                    </div>
                                    {selectCountry && <div className='absolute top-10  bg-white'>
                                        {
                                            countries.map((country, index)=>(
                                                <div key={index} onClick={()=>handleCode(country)} className='text-sm flex items-center space-x-2 text-gray-400 py-2 px-2'>
                                                    <span className=''>
                                                        <img src={country.image} alt="cameroon" className='w-9 h-4 object-cover ' />
                                                    </span>
                                                    <p className='hidden sm:inline'>{country.code}</p>
                                                </div>

                                            ))
                                        }
                                        
                                    </div>}

                                </div>
                                <input type="number" name="phone" value={value.phone} onChange={handleChange} className={`rounded-r  border-0 text-gray-900 text-sm block w-full p-2.5 placeholder:text-xs ${error.phone? "bg-[#f3cece] placeholder:text-red-500": "border-gray-300"}  `} placeholder={`${error.phone? error.phone: 'Enter your phone number to join our whatsapp'}`}  required=""/>
                            </div>



                            <div className='flex items-center md:space-x-6 flex-col md:flex-row'>
                                <button type="submit" className="flex-none px-2 md:px-4 text-sm w-full md:w-max text-white h-full bg-green-600 py-2.5" >Join us today</button>
                                <p className=' text-sm text-center mt-2 md:mt-0'>"We promise not to spam you!" We will just update you :)</p>
                            </div>
                        </div>
                    </form>
                    <div className='flex-1 flex items-center space-x-2 px-4 sm:px-8 justify-end'>
                        
                    </div>

                </div>


            </div>
        </motion.div>

        {/* FAQ */}
        <div className='my-10 md:my-20 px-6 flex flex-col md:flex-row'>
            <p className=' py-6 md:px-20 text-3xl md:text-4xl font-bold text-gray-700 leading-[3rem] flex flex-row md:flex-col'>
                <span className='hidden md:inline'>Frequently </span>
                <span className='hidden md:inline'> Asked </span>
                <span className='hidden md:inline'> Questions</span>
                <span className='md:hidden'>FAQ</span>
            </p>
            <div className='flex-1 md:pr-16 lg:px-16 lg:pl-20'>
                <ul>
                    
                    {
                        faqs.map((data, index)=>(
                            <FAQ key={index} item={data} />
                        ))
                    }
                    
                </ul>
            </div>
        </div>

        {/* Partners */}
        <div className='mb-10    md:mb-20 lg:my-12 px-4'>
        <h3 className='text-2xl lg:text-3xl text-gray-700 font-bold text-center mb-4'>Our Partners</h3>
        <div className='flex items-center justify-center space-x-4 md:space-x-16 mt-3 overflow-x-auto'>
            <div className='h-[4rem]'>
                <img src={lionsgate} alt="vtc" className='w-full h-full object-contain' />
            </div>
            <div className='h-[4rem]'>
                <img src={partners} alt="vtc" className='w-full h-full object-contain' />
            </div>
            <div className='h-[6rem]'>
                <img src={garden} alt="vtc" className='w-full h-full object-contain' />
            </div>
            <a href="http://ww.vtc.cm">
                <div className='h-[3rem]'>
                    <img src={vtc} alt="vtc" className='w-full h-full object-contain' />
                </div>
            </a>
        </div>
       </div>


        <Footer />
    </div>
  )
}

export default Home

function Card({number, icon, text}){
    return (
        <div className="relative h-full">
            <div className="rounded overflow-hidden shadow-md bg-white h-full">
                <div className="absolute -mt-6 w-full flex justify-center">
                    <div className="h-12 w-12 rounded-full flex justify-center items-center text-white bg-green-600">
                        <p className='font-bold text-xl'>{number}</p>
                    </div>
                </div>
                <div className="px-6 mt-8 flex items-center justify-center flex-col">
                    <span className='clip-pentagon  h-12 w-12 flex justify-center items-center'>
                        
                        {icon}
                    </span>
                    <p className='text-center py-4 text-gray-600 px-4 text-sm'>{text}</p>
                </div>
            </div>
        </div>
    )
}

function FAQ({item}){
    const [toggle, setToggle] = useState(false)
    return (
        <li className='pt-4 border-b'>
            <div className='flex justify-between items-center pb-4'>
                <p className='text-gray-600'>{item.question}</p>
                <span onClick={()=>setToggle(!toggle)} className='border border-black rounded-full h-[1.5rem] cursor-pointer w-[1.5rem] flex items-center justify-center'>
                    +
                </span>
            </div>
            {toggle && <p className='text-gray-600 text-sm pb-2'>{item.answer}</p>}
        </li>
    )
}