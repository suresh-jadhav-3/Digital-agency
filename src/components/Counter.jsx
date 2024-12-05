import React from 'react'

function Counter() {

    const count = [
        {name:"Clients", Number:"5k+"},
        {name:"Running Projects", Number:"350+"},
        {name:"Projects Completed", Number:"900+"}
    ]

  return (
    <div className='bg-[#8275ff] dark:bg-[#162156] py-14'
    
    >
        <div className='text-center md:flex justify-evenly'
        data-aos="fade-up"
        >
            {
                count.map((item, index) => (
                    <div key={index} className='dark:text-[#0384a2] mb-6'>
                        <p className='text-4xl font-Nunito font-semibold tracking-wide p-2 text-white'>{item.Number}</p>
                        <h3 className='text-white dark:bg-gradient-to-r from-[#5ee2ff] to-[#1d5394] inline-block text-transparent bg-clip-text text-xl tracking-wide md:text-2xl font-medium'>{item.name}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Counter