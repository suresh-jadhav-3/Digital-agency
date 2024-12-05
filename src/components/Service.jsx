import React from 'react'
import { MdOutlinePhoneAndroid, MdOutlineRocket } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { RiLandscapeLine } from "react-icons/ri";


function Service() {

    const data = [
        {

            title: "App Development",
            description: "We provide the best mobile app development services to our clients.",
            icon: <MdOutlinePhoneAndroid />
        },
        {
            title: "Web Design",
            description: "We provide the best web development services to our clients.",
            icon: <IoCodeSlash />
        },
        {
            title: "Graphics Design",
            description: "We provide the best UI/UX design services to our clients.",
            icon: <RiLandscapeLine />
        },
        {

            title: "Digital Marketing",
            description: "We provide the best digital marketing services to our clients.",
            icon: <MdOutlineRocket />
        },

    ]
    return (
        <div id='Service' className='text-center dark:bg-[#162156]'>
            <div>
                <div className='flex flex-col justify-center items-center'
                data-aos="fade-down"
                >
                    <h1 className=' text-2xl text-[#3571b5] py-5'>Our Service</h1>
                    <h4 className='max-w-[380px]  dark:text-white text-[30px] flex flex-col tracking-wider font-semibold sm:max-w-[450px]'>Save time managing your business with <span className='text-[#3571b5]'>our best service</span></h4>
                </div>
              
                <div className='py-16 mx-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'
                
                >
                    {
                        data.map((item, index) => (
                            <div key={index} className='dark:bg-gradient-to-bl from-[#0d3461] to-[#041a34] flex flex-col items-center gap-5 py-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 '
                            data-aos="flip-left"
                            data-aos-delay="200"
                            >
                                <div className='text-white dark:text-[#3571b5] text-4xl p-2 border-[1.5px] border-[#3571b5] rounded-md transform transition-transform duration-300 hover:scale-110 bg-[#8275ff]'>{item.icon}</div>
                                <h2 className='text-[#3571b5] text-xl font-semibold tracking-wide'>{item.title}</h2>
                                <p className=' dark:text-white max-w-xs text-center'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Service