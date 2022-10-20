import React from 'react'

const ServiceCard = ({icon, title, text}) => {
  return (
    <div className='bg-white shadow-md p-6'>
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-green-600 rounded-full h-20 w-20 flex justify-center items-center'>
                <span className='text-white'>
                    {icon}
                </span>
            </div>
            <h5 className='font-bold text-lg my-4 text-gray-700'>{title}</h5>
            <p className='text-gray-500'>{text}</p>
        </div>
    </div>
  )
}

export default ServiceCard