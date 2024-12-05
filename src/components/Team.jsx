
import React from 'react';
import img1 from "../assets/team-01.png"
import img2 from "../assets/team-02.png"
import img3 from "../assets/team-03.png"
import img4 from "../assets/team-04.png"
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

function Team() {
    const teamMembers = [
        { name: 'Alice', role: 'Developer', image: img1 , linkedin:<FaLinkedinIn/>, twitter:<CiTwitter/>},
        { name: 'Charlie', role: 'Designer', image: img2, linkedin:<FaLinkedinIn/>, twitter:<CiTwitter/> },
        { name: 'Bob', role: 'Product Manager', image: img3, linkedin:<FaLinkedinIn/>, twitter:<CiTwitter/> },
        { name: 'Harry', role: 'Full Stack', image: img4, linkedin:<FaLinkedinIn/>, twitter:<CiTwitter/> },
    ];

    return (
        <div className="dark:bg-[#162156] py-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#3697c7]"
            data-aos="fade-up"
            >Meet Our Team</h2>
            <div className=" max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {teamMembers.map((member, index) => (
                    <div key={index} className="mx-16 md:mx-0 bg-[#e7eef1] dark:bg-white  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 "
                    data-aos="zoom-in"
                    >
                        <img src={member.image} alt={member.name} className=" h-[200px] mx-auto  " />
                        <div className= 'bg-white dark:bg-[#153560]  rounded-b-lg'>
                            <h3 className="text-2xl font-semibold  text-[#3697c7] px-5 py-3">{member.name}</h3>
                            <p className="text-gray-400 text-sm w-full px-5 pb-5">{member.role}</p>
                            <div className='flex gap-4 pb-5 pl-5'>
                            <span className='text-xl hover:scale-105 text-[#3697c7]'>{member.linkedin}</span>
                            <span className='text-xl hover:scale-105 text-[#3697c7]'>{member.twitter}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;