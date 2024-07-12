import React from 'react';
import Marquee from './Marquee';
import mine from '../assets/mine.png'; // Adjust the path as necessary

const Page2 = () => {
    return (
        <div>
            <Marquee />
            <div className="about relative flex flex-col w-full h-[110%] p-5 lg:flex-row md:h-70vh">
                <div className="picture relative w-full lg:flex-[45%] lg:flex lg:items-center lg:justify-center">
                    <img className="w-full m-auto bg-transparent md:w-[60%] lg:w-[50%]" src={mine} alt="Example" />
                </div>
                <div className="about-content lg:flex-[55%] lg:pr-6">
                    <h1 className="text-[35px] font-bold text-center p-6 tracking-wider hover:scale-110 transition-transform duration-300 md:hover:scale-150 md:text-[45px]">
                        <span className="text-[#4C3594]">About </span>
                        <span className="text-[#EB5365]">me ?</span>
                    </h1>
                    <p className="pb-10 md:pt-5 tracking-wide">Hey there, I'm Jyotirmay!
                        So, picture this: a coding wizard with a penchant for turning pixels into magic! Yep, that's me—your friendly neighborhood developer extraordinaire. <br /><br />

                        I'm on a mission to sprinkle some digital fairy dust and bring your wildest web dreams to life. From crafting websites that pop with personality to conjuring up apps that make you go "wow," I'm your go-to guy (or gal) for all things tech-tastic! <br /><br />

                        But hey, life isn't all about ones and zeros! When I'm not glued to my screen, you'll catch me chasing sunsets, perfecting my avocado toast game, or brainstorming my next big adventure. <br /><br />

                        So, what do you say? Ready to dive into the digital wonderland with me? Let's create some coding magic together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page2;
