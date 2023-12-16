import React from 'react';
import profile from '../assets/profile.png';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
// import Certificates from './Certificates';
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
        <div className=" w-full h-auto mt-24 flex justify-baseline items-center flex-col bg-no-repeat">
            <div className=" border-2 border-gray-600 w-[95%] h-[auto] py-6  flex justify-center items-center rounded-2xl md:w-[80%]">
                <div className="flex justify-center items-center flex-col-reverse p-5 gap-[-1rem] sm:flex-row">
                    <div className="max-w-sm  flex justify-start items-start flex-col sm:gap-5 md:gap-7 lg:max-w-md">
                        <div>
                            <span className=" mb-[-3px] text-xs font-bold tracking-[1px] lg:text-sm">-hello</span>
                            <h1 className=" text-2xl tracking-[1px] md:text-3xl lg:text-4xl">I'am <span className=" text-3xl text-red-600 md:text-4xl lg:text-5xl">Charan R</span></h1>
                            <h1 className=' text-3xl text-red-600 tracking-[1px] md:text-4xl lg:text-5xl'>Frontend Developer</h1>
                            <p className=" text-xs lg:py-2 lg:text-[14px]"> a simple example of a marketing page component that uses a stacked layout on small screens
                                simple example of a marketing page component that u,</p>
                        </div>
                        <div className=' mt- pt-2 '>
                            <button className="w-[4rem] h-8  text-sm  border-2 border-gray-600 rounded-md md:w-[6rem] md:h-10 cursor-pointer">View CV</button>
                        </div>
                    </div>
                    <div className=" max-w-sm max-h-fit lg:max-w-lg">
                        <img src={profile} alt='img' className="" />
                    </div>
                </div>
            </div>
            <Skills />
            <Projects></Projects>
            <Contact />

            {/* <Certificates /> */}

        </div>
    )
}

export default Home;
