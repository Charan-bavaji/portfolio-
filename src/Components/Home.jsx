import React from 'react';
import profile from '../assets/profile.png';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import {
    html, css, javaScript, react1, postMan, vsCode,
    linux,
    npm,
    tailwind,
    git,
    github,
    nodeJs,
    express1,
    mongooDb1,
    java1,
    lightBG
} from '../assets/images/index';
import Card from './Card';
import Certificates from './Certificates';
import Example from './Example';
import About from './About';
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
            <div className=" w-[95%] h-[auto] py-6  flex justify-center items-center rounded-2xl md:w-[80%]">
                <div className="flex justify-center items-center flex-col-reverse p-5 gap-[3rem] sm:flex-row sm:gap-[1rem]">
                    <div className="max-w-sm  flex justify-start items-start flex-col gap-6 sm:gap-5 md:gap-7 lg:max-w-md xl:max-w-2xl xl:p-5">
                        <div className=''>
                            <span className=" mb-[-3px] text-xs font-bold tracking-[1px] lg:text-sm">-hello</span>
                            <h1 className=" text-2xl tracking-[1px] md:text-3xl lg:text-4xl">I'am <span className=" text-3xl text-[#c59b5c] font-bold md:text-4xl lg:text-5xl xl:text-7xl">Charan R</span></h1>
                            <h1 className=' text-3xl font-[900] text-[#c59b5c] tracking-[1px] md:text-4xl lg:text-5xl xl:text-6xl '>Frontend Developer</h1>
                            <p className=" text-[10px] lg:py-4 lg:text-[14px] tracking-wider font-light leading-normal">
                                who loves building websites from simple to complex. I'm also exploring backend stuff.<br></br> As a fresher, I've dived
                                into various technologies in this field. Excited to keep learning and aiming
                                to become a <span className='text-[#ffd597]'>Full Stack Developer</span>. Let's create something awesome together!"</p>
                        </div>
                        <div className=' w-full mt- pt-2 flex justify-center items-center sm:justify-start gap-4 '>
                            <button className="w-auto h-10 px-2 py-3 sm:px-4 sm:py-5 flex justify-center items-center tracking-widest text-md border-2 border-[#6a522f] rounded-xl  cursor-pointer font-bold transition duration-150 ease-in-out hover:-translate-y-2
                              text-black hover:text-white bg-[#c59b5c] hover:bg-transparent shadow-lg text-sm">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className=" mr-2 text-[16px] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path><path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path></svg>
                                Get Resume</button>
                            <button className="w-auto h-10 px-2 py-3 sm:px-4 sm:py-5 flex justify-center items-center text-md border-2 border-[#6a522f] rounded-xl  cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2
                              text-white backdrop-blur-sm bg-black/10 shadow-lg tracking-widest hover:text-black hover:bg-[#c59b5c]">
                                Contact</button>
                        </div>
                        <div className='w-full'>
                            <ul className=' flex gap-2 justify-center items-center sm:justify-start'>
                                <li><span className='text-[14px] text-[#ffff]'>Current tech stack -</span></li>
                                <li><img src={react1} alt="react" width={20} height={20} /></li>
                                <li><img src={tailwind} alt="" width={20} height={20} /></li>
                                <li><img src={express1} alt="" width={20} height={20} /></li>
                                <li><img src={nodeJs} alt="" width={20} height={20} /></li>
                                <li><img src={mongooDb1} alt="" width={20} height={20} /></li>
                                <li><img src={vsCode} alt="" width={20} height={20} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className=" max-w-sm max-h-fit lg:max-w-lg">
                        <img src={profile} alt='img' />
                    </div>
                </div>
            </div>
            <Skills />
            <Projects />
            <Certificates />
        </div>
    )
}

export default Home;
