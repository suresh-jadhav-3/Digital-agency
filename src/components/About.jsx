import React from 'react'
import { IoWifi } from "react-icons/io5";
import { RiTeamLine, RiCustomerService2Line } from "react-icons/ri";
import png from "../assets/about-us.jpg"

function About() {

  const data = [

    {
      title: "Secure and reliable",
      icon: <IoWifi />,
      description: "Our platform is designed with the highest level of security and reliability, providing a safe and trustworthy environment for your financial transactions."
    },
    {
      title: "Dedicated team",
      icon: <RiTeamLine />,
      description: "Our experienced professionals are committed to providing personalized support and guidance, ensuring that your financial needs are met with expertise and care."
    },
    {
      title: "Customer service",
      icon: <RiCustomerService2Line />,
      description: "We prioritize your satisfaction by offering responsive and attentive customer service, ensuring that all your questions and concerns are addressed promptly."
    },
  ]


  return (
    
    <section id='About' className='  p-6 dark:bg-[#162156] '>
      <div className='flex flex-col lg:flex-row md:justify-center gap-14'>
        <div className='  lg:max-w-[500px]   mb-6 md:mb-0' 
        data-aos="fade-up"        >
          <p className='text-lg font-semibold text-[#4c7fcd]'>Why choose us</p>
          <h2 className='text-2xl md:text-3xl font-bold dark:text-white mt-2'>
            Specialist in advising clients on <span className='text-blue-600'>financial challenges</span>
          </h2>
          <p className='text-gray-600 mt-4'>
            We are a team of experienced financial advisors who have been helping individuals and businesses navigate financial challenges for years. Our team is dedicated to providing personalized service and expert advice to help you achieve your financial goals.
          </p>
          <div className='mt-6 space-y-4'>
            {
              data.map((item, index) => {
                return (
                  <div key={index} className='flex items-center  p-4 rounded-lg '
                  
                  >
                    <div className="text-blue-600 text-6xl mr-4 p-2 border-[1.5px] border-[#3571b5] rounded-md">{item.icon}</div>
                     <div className='lg:max-w-[400px]'>
                       <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                       <p className='text-gray-600'>{item.description}</p>
                    </div>
                   </div>
                 )
               })
             }
           </div>
         </div>
         <div className='flex justify-center items-center '
           data-aos="flip-left"
               
         >
           <img src={png} alt="About Us" className='max-h-[700px] lg:h-[600px] w-[850px] lg:w-[450px] rounded-lg shadow-lg' />
         </div>
       </div>
     </section>
    
  )
}

export default About