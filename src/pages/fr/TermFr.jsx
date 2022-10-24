import React from 'react'
import FooterFr from '../../components/fr/FooterFr'
import NavBarFr from '../../components/fr/NavBarFr'

const TermFr = () => {
  return (
    <>
    <NavBarFr />
    
      <div className='pt-24'>
        <div className='bg-gray-100 h-[8rem] w-full flex items-center px-4 md:px-28'>
            <p className='text-2xl font-bold text-neutral-700'>Terms et Conditions</p> 
        </div>
        <div className='h-[7rem]'>

        </div>
      </div>
      <FooterFr />
    </>
  )
}

export default TermFr