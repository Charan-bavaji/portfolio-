import React from 'react'
import profile from '../assets/profile.png';
import Skills from './Skills';
import Projects from './Projects';
const Home = () => {
    // Add all responsive size here and jzt work on that Rather then checking for every divices!!!
    // make u r screen full small and define classes of tailwind,then define classes for sm ,and also for md,lg,xl,2xl 
    // Efective way is to go from mobile to larger screens
    // sm	640px	
    // md	768px	
    // lg	1024px	
    // xl	1280px
    // 2xl	1536px
    return (
        <div className=" w-full h-[100vh] mt-24 flex justify-baseline items-center flex-col">
            <div className=" border-2 border-gray-600 w-[95%] h-[45vh]  flex justify-center items-center rounded-2xl md:h-[70vh]">
                <div className=" mx-4 my-6 w-full h-[38vh] flex justify-center items-baseline md:h-[60vh] md:flex md:justify-center md:items-center ">
                    <div className=" flex w-full h-[18rem]  md:h-full justify-center items-center md:gap-10 lg:gap-0">
                        <div className="relative  w-[16rem] h-[16rem] text-xl z-0  lg:w-[45rem] lg:h-[25rem] lg:p-10 lg:flex lg:justify-center lg:items-start lg:flex-col">
                            <span className="text-sm">-hello</span>
                            <h1 className='tracking-[0.1rem] md:text-2xl lg:text-5xl'>I'am <span className="text-red-700 text-2lg md:text-3xl lg:text-6xl">Charan R</span></h1>
                            <h1 className='relative tracking-[0.1rem] md:text-2xl lg:text-6xl lg:relative lg:left-0'>Frontend Developer</h1>
                            <div className='my-2'>
                                <p className=" text-[8px] leading-3 md:text-[10px] lg:tracking-wider lg:text-[14px] lg:leading-5"> a simple example of a marketing page component that uses a stacked layout on small screens,</p>
                            </div>
                            <button className=" w-20 h-10 py-1.5 px-2 text-xs my-4 border-2 border-gray-600 rounded-md lg:relative lg:top-10 lg:w-36 lg:text-[14px]">View CV</button>
                        </div>
                        <div className="relative w-auto h-auto z-0  lg:w-[40rem] lg:h-[25rem] lg:flex lg:justify-center lg:items-center">
                            <img src={profile} alt='img' className=" w-42 h-56 md:w-[22rem] md:h-[18rem] lg:w-[35rem] lg:h-[24rem]" />
                        </div>
                    </div>
                </div>
            </div>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    )
}

export default Home
