import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='w-full'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex items-center md:justify-around justify-between h-16'>
                    <div className='flex items-center'>
                        <img src={logo} alt="Logo" />
                    </div>

                    {/* Desktop nav */}
                    <nav className='hidden md:flex items-center space-x-8'>
                        <ul className='flex gap-8'>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>Features</li>
                            <li className='cursor-pointer'>Community</li>
                            <li className='cursor-pointer'>Blog</li>
                            <li className='cursor-pointer'>Pricing</li>
                        </ul>
                        <button className='bg-[#4CAF4F] flex items-center gap-3 text-white px-4 py-2 rounded text-sm cursor-pointer'>
                            Register Now <FaArrowRightLong />
                        </button>
                    </nav>

                    {/* Mobile controls */}
                    <div className='md:hidden flex items-center'>
                        <button onClick={() => setOpen(!open)} className='p-2 text-[#717171]'>
                            {open ? <HiX size={22} /> : <HiMenu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className='md:hidden px-4'>
                    <div className='bg-white shadow rounded mt-2 p-4 flex flex-col gap-3'>
                        <a className='py-2'>Home</a>
                        <a className='py-2'>Features</a>
                        <a className='py-2'>Community</a>
                        <a className='py-2'>Blog</a>
                        <a className='py-2'>Pricing</a>
                        <button className='mt-2 bg-[#4CAF4F] text-white px-4 py-2 rounded flex items-center justify-center gap-2'>
                            Register Now <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            )}
        </header>
  )
}

export default Navbar