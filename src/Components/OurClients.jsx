import React from 'react'
import logos, { icons } from '../assets/logos';
import { PiUsersThreeLight } from "react-icons/pi";
import { PiBuildingOffice } from "react-icons/pi";
import { PiHandshakeThin } from "react-icons/pi";
import rafiki from '../assets/rafiki.png';
import Cards from './Cards';

const OurClients = () => {
  return (
    <>
      <div className='flex flex-col mt-10'>
        <h1 className='flex items-center justify-center mt-4 font-bold text-2xl text-[#4D4D4D]'>Our Clients</h1>
        <p className='flex items-center justify-center text-sm mt-2 text-[#717171] mx-8'>We have been working with some Fortune 500+ clients</p>
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-wrap justify-center gap-12 mt-6 mb-6 mx-auto">
            {logos.map((logo, index) => (
              <img key={index} src={logo.src} alt="" className="h-10 object-contain" />
            ))}
          </div>
        </div>

      </div>
      <div className='flex h-24 items-center mx-auto justify-center mt-10'>
        <div className="flex flex-col items-center">
          <h1 className='text-2xl font-bold text-[#4D4D4D]  '>Manage your entire community</h1>
          <h1 className='text-2xl font-bold text-[#4D4D4D]'>in a single system</h1>
          <p className='text-sm mt-2 text-[#717171] mb-8'>Who is Nextcent suitable for?</p>
        </div>
      </div>
      <div className="w-full mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around mt-4 mb-16 md:gap-0 gap-8">
          <div className='flex flex-col items-center'>
            <div className="w-[60px] h-[60px] bg-[#E8F5E9] rounded-bl-lg rounded-tl-xl rounded-tr-[10px]  rounded-br-[30px] relative">
              <PiUsersThreeLight className='h-12 w-16 absolute top-7 left-2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
            <p className='text-lg max-w-36 text-center font-bold text-[#4D4D4D] mt-2'>Membership Organisations</p>
            <p className='text-sm max-w-60 text-center text-[#717171] mt-4 '>Our membership management software provides full automation of membership renewals and payments</p>
          </div>

          <div className='flex flex-col items-center '>
            <div className="w-[60px] h-[60px] bg-[#E8F5E9] rounded-bl-lg rounded-tl-xl rounded-tr-[10px]  rounded-br-[30px] relative">
              <PiBuildingOffice className='h-12 w-16 absolute top-7 left-2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
            <p className='text-lg max-w-36 text-center font-bold text-[#4D4D4D] mt-2'>National Associations</p>
            <p className='text-sm max-w-60 text-center text-[#717171] mt-4 '>Our membership management software provides full automation of membership renewals and payments</p>
          </div>

          <div className='flex flex-col items-center '>
            <div className="w-[60px] h-[60px] bg-[#E8F5E9] rounded-bl-lg rounded-tl-xl rounded-tr-[10px]  rounded-br-[30px] relative">
              <PiHandshakeThin className='h-12 w-16 absolute top-7 left-2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
            <p className='text-lg max-w-36 text-center font-bold text-[#4D4D4D] mt-2'>Clubs And Groups</p>
            <p className='text-sm max-w-60 text-center text-[#717171] mt-4 '>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6 min-h-[300px]">
            {/* Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:mt-8">
              <img src={rafiki} alt="" className='max-h-64 md:h-60 h-52' />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 flex items-center justify-start">
              <div className="px-4">
                <p className='text-2xl md:text-3xl font-bold text-[#4D4D4D] max-w-md'>The unseen of spending three years at Pixelgrade</p>
                <p className='text-sm mt-4 text-[#717171] max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='mt-6 bg-[#4CAF4F] text-white px-5 py-2 rounded-md hidden md:block cursor-pointer'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </>
  )
}

export default OurClients