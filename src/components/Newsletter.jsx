import React from 'react';

function Newsletter() {
  return (
    <section className='bg-[#b7ecff] dark:bg-[#122ba7] py-10 px-4 md:px-10 lg:px-20'>
        <div className='w-full md:max-w-[800px] flex flex-col lg:flex-row items-center mx-auto lg:gap-16'>
            <div className='dark:text-white mb-6 lg:mb-0 text-center lg:text-left'
            data-aos="fade-right"
            >
                <p className='text-sm font-semibold'>Let's work</p>
                <h2 className='md:text-2xl font-bold mt-2'>Explore the <span className='text-sky-400'>hidden</span> ideas and subscribe!</h2>
            </div>
            <div className='bg-white  flex flex-row items-center w-full rounded-xl justify-between'
            data-aos="fade-right"
            >
                <input 
                    type="text" 
                    className='w-full lg:w-auto pt-2 pl-3 md:p-2 rounded-lg border-none outline-none mb-2 lg:mb-0 lg:mr-2 place-self-center text-xs md:text-base'
                    placeholder='Enter your email'
                />
                <button className='bg-sky-400 text-white p-1 md:p-3 rounded-lg hover:bg-sky-500 transition duration-300 w-full h-full lg:w-auto'>
                    Subscribe
                </button>
            </div>
        </div>
    </section>
  );
}

export default Newsletter;