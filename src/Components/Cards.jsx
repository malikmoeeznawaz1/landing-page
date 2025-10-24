import React from 'react'
import { cards } from '../assets/logos';
import { FaArrowRightLong } from "react-icons/fa6";

const Cards = () => {
    return (
        <div className='w-full mb-24'>
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex items-center justify-center mt-6 mb-6 mx-auto">
                    <div className='flex flex-col max-w-lg text-center'>
                        <p className='text-2xl font-bold text-[#4D4D4D]'>Caring is the new marketing</p>
                        <p className='text-sm mt-2'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                    </div>
                </div>
                <div className='md:flex-row flex flex-col items-center justify-center md:gap-8 gap-24 flex-wrap'>
                    {
                        Object.values(cards).map((card, index) => {
                            return <div className='h-44 w-60 rounded-md relative md:mb-12' key={index}>
                                <img src={card} alt="" className='object-cover w-full h-full rounded-md' />
                                <div className=' bg-slate-100 p-2 rounded-md shadow-md w-52 absolute transform left-1/2 -translate-x-1/2  -bottom-14 flex flex-col items-center'>
                                    <p className='flex text-center text-sm font-semibold text-[#717171] '> Creating Streamlined Safeguarding Processes with OneRen</p>
                                    <div className="flex flex-row relative">
                                        <p className='mt-2 mb-2 text-sm text-[#4CAF4F]'>Readmore  </p>
                                        <FaArrowRightLong className=' text-[#4CAF4F] absolute -right-8 top-3' />
                                    </div>
                                </div>
                            </div>
                        }
                        )}

                </div>
            </div>
        </div>
    )
}

export default Cards