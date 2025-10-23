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
        <div className="w-max]">
            <Slider {...settings}>
                <div className='h-[380px] bg-slate-100'>
                    <div className="flex items-center justify-around h-full">
                        <div className='flex flex-col'>
                            <h1 className='text-4xl font-bold -mt-6 ml-16 w-96'>Lessons and insights</h1>
                            <h1 className='text-4xl font-bold  ml-16 w-96 text-[#4CAF4F]'>from 8 years</h1>
                            <p className='text-sm ml-16'>Where to grow your business as a photographer: site or social media?</p>
                               <button className='self-start ml-16 mt-4 bg-[#4CAF4F] text-white px-6 py-2 rounded-md cursor-pointer'>
                                   Register
                               </button>
                        </div>
                        <div className='flex'>
                            <img src={heroImage} alt="Hero" className='h-full' />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Hero