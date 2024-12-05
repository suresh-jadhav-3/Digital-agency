import React from 'react'
import Slider from 'react-slick'
import ava1 from "../assets/ava-1.jpg"
import ava2 from "../assets/ava-2.jpg"
import ava3 from "../assets/ava-3.jpg"

function Testimonial() {
    const settings = {
        dots: false,
        arrows: false,
        loop: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        mobileFirst: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
      };


      
      const TestimonialData = [
        {
          
          name: "John",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: ava1,
        },
        {
          name: "Alice",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: ava2,
        },
        {
          name: "Smith",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: ava3,
        },
      ];


  return (
    <section className=' dark:bg-[#162156] py-10'>
        <div className='text-center py-10'
        
        >
            <h2 className='text-2xl p-4 text-[#4c68f4]'>Testimonials</h2>
            <p className='text-3xl font-semibold tracking-wider dark:text-white'>Trusted by more than <span className='text-[#4c68f4]'>5,000 customers</span></p>
        </div>

        <div className='bg-[#f2f3f4] dark:bg-[#284a9b] max-w-96 mx-auto rounded-xl z-20'
       
        >
            <Slider {...settings}>
            {
                TestimonialData.map((items, index) => (
                    <div key={index} className=' text-center dark:text-white'>
                        <img src={items.img} alt={items.name} className='w-52 h-52 rounded-full inline-block mx-auto z-10 p-5' />
                        <h1 className=' text-3xl font-semibold tracking-wider'>{items.name}</h1>
                        <p className='py-5 text-lg max-w-80 mx-auto'>{items.testimonial}</p>
                    </div>
                ))
            }
            </Slider>
        </div>
    </section>
  )
}

export default Testimonial