import React from 'react';
import TextAnimation from './TextAnimation';
import AnimatedButton from './AnimatedButton';

const Page1 = () => {
    return (
        <div className='w-full h-[88vh] flex justify-center items-center m-auto md:h-[90vh] md:w-[60%] '>
            <div className="w-[90%] m-auto flex flex-col">
                <h1 className=' text-[#4C3594] text-[40px] text-center pb-5 font-bold tracking-wider md:text-[54px] md:pb-30'>Jyotirmay Padhairy</h1>
                <TextAnimation />
                <div className='flex justify-center mt-6'><AnimatedButton /></div>
            </div>
        </div>
    );
}

export default Page1;