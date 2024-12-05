import React, { useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineWbSunny, MdDarkMode } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';

function NavBar() {

    const { theme, toggleTheme } = useTheme()


    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const navList = [
        { id: 1, name: "Home", Link: "#home" },
        { id: 2, name: "About", Link: "#About" },
        { id: 3, name: "Service", Link: "#Service" },
        { id: 4, name: "Project", Link: "#Project" },
    ]
    return (
        <header className='p-3 h-16  dark:bg-[#162156]  sticky top-0  border-b-[2px] z-10 bg-[#dedfe4] '


        >
            <nav
                data-aos="fade-down"
                data-aos-once="true"

            >
                <div className='flex justify-between md:justify-around items-center'>
                    <div className='pl-5'>
                        <a href="/" className='text-[#4d95ed] font-semibold text-3xl tracking-wider font-serif '><h2>Digency</h2></a>
                    </div>
                    <div className='flex gap-7'>
                        <ul className='hidden md:flex gap-7 '>
                            {
                                navList.map((item) => {
                                    return (
                                        <li key={item.id} className='text-xl dark:text-white text-black font-medium hover:text-[#4b8cedfc] '>
                                            <a href={item.Link}>{item.name}</a></li>
                                    )
                                })
                            }
                            <button
                                onClick={toggleTheme}
                                className=""
                            >
                                {theme === 'dark' ? <MdOutlineWbSunny className='text-2xl text-white' /> : <MdDarkMode className='text-2xl' />}
                            </button>
                        </ul>
                    </div>

                    <div className='md:hidden mr-5 place-center  space-x-3'>
                        <button
                            onClick={toggleTheme}
                            className="mr-2"
                        >
                            {theme === 'dark' ? <MdOutlineWbSunny className='text-3xl text-white' /> : <MdDarkMode className='text-3xl' />}
                        </button>
                        <button onClick={handleClick}>
                            {isOpen ? <IoClose className='text-4xl text-black dark:text-white' /> : <IoMenu className='text-4xl text-black dark:text-white' />}
                        </button>
                    </div>
                </div>

                {
                    isOpen && (
                        <div className='absolute top-16 right-0 w-[250px] bg-white dark:bg-[#162156] h-screen  '
                            data-aos="fade-left"
                        >
                            <ul className='flex flex-col gap-5 pl-12 pt-5 text-xl font-medium '>
                                {
                                    navList.map((item) => {
                                        return (
                                            <li key={item.id} className='text-black dark:text-white hover:text-[#3b82ebcc] tracking-wide'>
                                                <a href={item.Link} onClick={handleClick}>{item.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}

export default NavBar