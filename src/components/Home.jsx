import React from 'react'
// import NavBar from './NavBar'
import HeroImg from '../assets/hero-img.png'

function Home() {
  return (
    <div id='home' className=' dark:bg-[#162156] dark:text-white md:h-[600px]  '>
      <div className='md:flex justify-around items-center'>
        <div className='px-[15px] pt-[120px]'
        data-aos="fade-right"
         data-aos-delay='100'
        data-aos-easing="ease-in-out"
        >
          <h2 className='max-w-[350px] text-[30px]  sm:text-3xl  font-medium tracking-wide sm:leading-[45px] md:max-w-[550px] md:text-5xl md:leading-[53px]'>We're Creating Perfect Digiatl Product To <span className='text-[#71d1f1fc]'>Promote Your Brand</span></h2>

          <p className='pt-16 text-lg tracking-wide sm:max-w-[350px] md:max-w-[450px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo nemo accusamus nostrum, ipsam cumque porro?</p>

          <div className='flex gap-10 pt-12'>
            <button className='w-[150px] h-12 rounded-md  border-[#459cedfc] border-[1.5px] bg-[#0c1b65] hover:scale-105 transition-all text-white dark:text-black'>Get Started Now</button>
            <button className='w-[150px] h-12 rounded-md bg-[#459cedfc] shadow-[3px -7px 20px rgba(37, 87, 128, 0.99)] hover:scale-105 transition-all text-white dark:text-black'>Discover More</button>
          </div>

        </div>
        <div className='pt-7 md:pt-24 text-center'
        data-aos="fade-left"
        data-aos-delay='100'
        data-aos-easing="ease-in-out"
        >
          <img src={HeroImg} alt="" className=' md:w-[650px] '/>
        </div>
      </div>
    </div>
  )
}

export default Home