import React from 'react'
import SkillBox from './SkillBox';
import { project1, html, css, react1, tailwind, project2, nodeJs, mongooDb1, redux1 } from '../assets/images';
import { Link } from 'react-router-dom';
import Certificates from './Certificates';
import ProjectView from './ProjectView';
const Projects = () => {
    // sm	640px	
    // md	768px	
    // lg	1024px	
    // xl	1280px
    // 2xl	1536px
    return (
        // Project border
        <div className='w-full h-auto pb-[6rem] flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <div className=" w-[95%] h-[auto] rounded-2xl  md:w-[80%] lg:w-[80%] -z-0 backdrop-blur-sm bg-black/1 flex flex-col gap-9">
                <div className=" w-auto flex justify-start items-center mt-2 ml-5 text-2xl md:text-4xl lg:text-5xl  rounded-md ">
                    <h1 className="font-semibold text-white tracking-[2px]"> 8 + <span className='  rounded-md bg-[#c59b5c] p-1 sm:p-2 text-black font-bold'>
                        Projects
                    </span>  and counting...</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {/* project title section */}
                    <div className="w-[95%] h-auto border-2 border-[#6a522f] my-3 flex flex-col justify-center items-center rounded-3xl sm:w-[80%] md:flex md:flex-row md:w-[95%] lg:w-[70%] lg:py-6 shadow-lg ">
                        <div className=" w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                            <img src={project1} alt='img' className="lg:h-[18rem] grayscale hover:grayscale-0 hover:cursor-pointer" />
                        </div>
                        {/* project title section */}
                        {/* project -1 container */}
                        <div className='w-full h-full px-3 lg:pr-10'>
                            <div className="py-2 text-lg flex justify-start items-center">
                                <h1 className='text-2xl font-bold lg:text-4xl lg:py-3 lg:font-bold'>DraftWood Furniture</h1>
                            </div>
                            <div className='w-auto h-10 flex gap-3 justify-start items-center py-6'>
                                <h1 className='font-bold lg:text-[14px] text-[#c59b5c]'>Tech Stack</h1>
                                <ul className="flex gap-1 justify-center items-center">
                                    <li>
                                        <SkillBox icon={html} name={"html"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={css} name={"css"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={react1} name={"react"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={nodeJs} name={"tailwind"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={mongooDb1} name={"tailwind"} />
                                    </li>
                                </ul>
                            </div>
                            <div className='py-2'>
                                <p className=" max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-[16px] font-light text-left tracking-wider  ">
                                    Dynamic e-commerce platform, DreaftWood, showcasing expertise in creating an intuitive admin dashboard, implementing robust user authentication, and integrating a
                                    secure payment section.
                                </p>
                            </div>
                            <div className="w-full h-auto py-3 flex flex-col gap-3 ">
                                <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer bg-[#c59b5c] hover:bg-transparent  group "><a href='https://github.com/Charan-bavaji?tab=repositories' className=" group-hover:text-white text-lg text-black">Code</a></div>
                                <Link to="/projectView2" className="text-lg group"><div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer text-black bg-[#c59b5c] hover:bg-transparent group-hover:text-white">Preview</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-[95%] h-auto border-2 border-[#6a522f] my-3 flex flex-col justify-center items-center rounded-3xl sm:w-[80%] md:flex md:flex-row md:w-[95%] lg:w-[70%] lg:py-6 shadow-lg " >
                        <div className=" w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                            <img src={project2} alt='img' className="lg:h-[18rem] grayscale hover:grayscale-0 hover:cursor-pointer" />
                        </div>
                        {/* project title section */}
                        <div className='w-full h-full px-3 lg:pr-10'>
                            <div className="py-2 text-lg flex justify-start items-center"><h1 className='text-2xl font-bold lg:text-4xl lg:py-3 lg:font-bold'>Disney Clone</h1></div>
                            <div className='w-auto h-10 flex gap-3 justify-start items-center py-6'>
                                <h1 className='font-bold lg:text-[14px] text-[#c59b5c]'>Tech Stack</h1>
                                <ul className="flex gap-1 justify-center items-center">
                                    <li>
                                        <SkillBox icon={html} name={"html"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={css} name={"css"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={react1} name={"react"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={redux1} name={"tailwind"} />
                                    </li>
                                </ul>
                            </div>
                            <div className='py-2'>
                                <p className=" max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-[16px] font-light text-left tracking-wider ">
                                    Developed a Disney+ clone using React and Redux. Implemented a responsive user interface, incorporated state management with Redux, and integrated Firebase for real-time database and authentication functionalities.
                                </p>
                            </div>
                            <div className="w-full h-auto py-3 flex flex-col gap-3 ">
                                <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer bg-[#c59b5c] hover:bg-transparent  group "><a href='https://github.com/Charan-bavaji?tab=repositories' className=" group-hover:text-white text-lg text-black">Code</a></div>
                                <Link to="/projectView" className="text-lg group">
                                    <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer text-black bg-[#c59b5c] hover:bg-transparent group-hover:text-white">Preview</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className=' group w-[70%] flex justify-center items-center gap-3 bg-[#c59b5c] hover:bg-transparent border-2 border-[#6a522f] rounded-full font-bold tracking-wider transition duration-150 ease-in-out hover:translate-y-2 cursor-pointer'>
                        <h1 className='text-lg font-bold text-black py-3 rounded-full w-auto  group-hover:bg-transparent group-hover:text-white'>
                            VIEW MORE
                        </h1>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1 text-sm md:text-[16px] lg:text-lg group-hover:text-white" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
