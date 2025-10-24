import React from 'react'
import Slider from "react-slick";
import heroImage from '../assets/illustration.png'

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full">
            <div className='max-w-7xl mx-auto'>
                <Slider {...settings}>
                    <div className='min-h-[400px] md:h-[380px] w-full bg-slate-100 flex items-center'>
                        <div className='w-full flex flex-col md:flex-row items-center justify-around gap-6 py-14'>
                            {/* Left: text */}
                            <div className='flex flex-col items-center md:items-start px-4'>
                                <h1 className='text-3xl md:text-5xl font-bold text-[#4D4D4D]'>Lessons and insights</h1>
                                <h2 className='text-3xl md:text-5xl font-bold mt-2 text-[#4CAF4F]'>from 8 years</h2>
                                <p className='text-sm mt-4 text-center md:text-left text-[#717171] max-w-md'>Where to grow your business as a photographer: site or social media?</p>
                                <button className='hidden md:block mt-6 bg-[#4CAF4F] text-white px-6 py-2 rounded-md cursor-pointer w-max'>
                                    Register
                                </button>
                            </div>

                            {/* Right: image */}
                            <div className='flex justify-center md:justify-end items-center px-4'>
                                <img src={heroImage} alt="Hero" className='max-h-56 md:max-h-80 w-auto object-contain' />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Hero