import React from 'react'
import logos from '../assets/logos';

const OurClients = () => {
  return (
    <div className='flex flex-col '>
        <h1 className='flex items-center justify-center mt-4 font-bold text-2xl text-gray-700'>Our Clients</h1>
        <p className='flex items-center justify-center text-sm mt-2 text-gray-700'>We have been working with some Fortune 500+ clients</p>
        <div className='flex justify-around  mt-6 mb-6'>
            <img src={logos[0].src} alt="" />
            <img src={logos[1].src} alt="" />
            <img src={logos[5].src} alt="" />
            <img src={logos[3].src} alt="" />
            <img src={logos[4].src} alt="" />
            <img src={logos[5].src} alt="" />
        </div>
    </div>
  )
}

export default OurClients