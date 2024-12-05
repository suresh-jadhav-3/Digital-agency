import React from 'react';

function Footer() {
    return (
        <footer className="dark:bg-[#162156] dark:text-white py-10">
            <div className="container mx-auto px-4" 
            data-aos="fade-up"
            >
                <div className="flex flex-col md:flex-row justify-evenly">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-[#4c68f4] text-2xl font-semibold mb-2">Digency</h3>
                        <p className='text-sm '>Grow With us</p>
                        <p className='max-w-[400px] mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique fugit magni, quisquam possimus sequi cum.</p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-[#4c68f4] text-2xl font-semibold mb-8">Solution</h3>
                        <div className="flex flex-col gap-6 ">
                            <a href="#" className="hover:text-[#4c68f4]">Marketing</a>
                            <a href="#" className="hover:text-[#4c68f4]">Analytics</a>
                            <a href="#" className="hover:text-[#4c68f4]">commerce</a>

                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#4c68f4] text-2xl font-semibold mb-8">Support</h3>
                        <div className='flex flex-col gap-6'>
                            <a href="#">Pricing</a>
                            <a href="#">Documentation</a>
                            <a href="#">Guides</a>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[#4c68f4] text-2xl font-semibold mb-8'>Company</h3>
                        <div className="flex flex-col gap-6 ">
                            <a href="#" className="hover:text-[#4c68f4]">About</a>
                            <a href="#" className="hover:text-[#4c68f4]">Blog</a>
                            <a href="#" className="hover:text-[#4c68f4]">Careers
                                </a>

                        </div>
                    </div>
                </div>
                <div className="text-center mt-10 border-t dark:border-[#4c68f4]  pt-4">
                    <p>&copy; 2024 Developed by Suresh Jadhav. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;