import React from 'react'
import logo from '../assets/logo.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
  <div className='flex w-full h-16 items-center p-4 gap-32 justify-around'>
        <div className='flex'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='flex items-center space-x-4'>
            <ul className='flex gap-12  '>
                <li>Home</li>
                <li>Features</li>
                <li>Community</li>
                <li>Blog</li>
                <li>Pricing</li>
            </ul>
            <button className='bg-[#4CAF4F] flex items-center gap-3 text-white px-4 py-2 rounded text-sm cursor-pointer hover:bg-'>Register Now <FaArrowRightLong /></button>
        </div>
    </div>
  ) 
}

export default Navbar