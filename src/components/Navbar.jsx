import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'

const Navbar = () => {
    return (
        <nav className=' flex justify-between w-full md:w-[60%] md:m-auto'>
            <div className="nav-container w-full ">
                <div className="logo text-[30px] p-5 font-bold flex ">
                    <span className=' text-[#4C3594]'>Jyo</span>
                    <span className=' text-[#EB5365]'>tir</span>
                    <span className=' text-[#4C3594]'>may</span>
                </div>
            </div>
            <div className="social-apps pr-6 m-auto">
            <SocialMediaIcons/>
            </div>
        </nav>
    )
}

export default Navbar
