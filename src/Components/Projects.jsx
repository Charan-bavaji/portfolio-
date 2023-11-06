import React from 'react'
import SkillBox from './SkillBox';
import { project1, html, css, react1, tailwind } from '../assets/images';

const Projects = () => {

    // sm	640px	
    // md	768px	
    // lg	1024px	
    // xl	1280px
    // 2xl	1536px

    return (
        // Project border
        <div id='Projects' className=" mt-5 w-[95%] h-[auto] border-2 border-slate-700 rounded-2xl flex flex-col justify-center items-center md:w-[80%] lg:w-[80%] -z-10">
            <div className=" w-full flex justify-center items-center p-2 mt-2 text-lg">
                <h1 className=" leading-tight">Projects</h1>
            </div>

            {/* project -1 container */}
            <div className="w-[95%] h-auto border-2 border-slate-700 my-3 flex flex-col justify-center items-center rounded-3xl sm:w-[80%] md:flex md:flex-row md:w-[95%] lg:w-[70%] lg:py-6 ">
                <div className=" w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                    <img src={project1} alt='img' className="lg:h-[18rem] grayscale hover:grayscale-0 hover:cursor-pointer" />
                </div>

                {/* project title section */}
                <div className='w-full h-full px-3 lg:pr-10'>
                    <div className="py-2 text-lg flex justify-start items-center"><h1 className='text-2xl font-bold lg:text-5xl lg:py-3 lg:font-bold'>Nike Shoes Store</h1></div>
                    <div className='w-auto h-10 flex gap-3 justify-start items-center'>
                        <h1 className='font-bold lg:text-xl'>Tech Stack</h1>
                        <ul className="flex gap-3 justify-center items-center">
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
                                <SkillBox icon={tailwind} name={"tailwind"} />
                            </li>
                        </ul>
                    </div>
                    <div className='py-1'>
                        <p className=" max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-lg ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa, non nobis consequuntur reiciendis vero impedit iure,
                            i </p>
                    </div>
                    <div className="w-full h-auto py-3 flex flex-col gap-3 ">
                        <div className="flex justify-center items-start w-full h-full border-2 border-red-300 p-2 rounded-3xl font-bold tracking-wider"><a className="text-lg">Code</a></div>
                        <div className="flex justify-center items-start w-full h-full border-2 border-red-300 p-2 rounded-3xl font-bold tracking-wider"><a className="text-lg">Live Site</a></div>
                    </div>
                </div>
            </div>

            {/* Project container 2 */}
            <div className="w-[95%] h-auto border-2 border-slate-700 my-3 flex flex-col justify-center items-center rounded-3xl sm:w-[80%] md:flex md:flex-row md:w-[95%] lg:w-[70%] lg:py-6" >
                <div className=" w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                    <img src={project1} alt='img' className="lg:h-[18rem] grayscale hover:grayscale-0 hover:cursor-pointer" />
                </div>
                {/* project title section */}
                <div className='w-full h-full px-3 lg:pr-10'>
                    <div className="py-2 text-lg flex justify-start items-center"><h1 className='text-2xl font-bold lg:text-5xl lg:py-3 lg:font-bold'>Nike Shoes Store</h1></div>
                    <div className='w-auto h-10 flex gap-3 justify-start items-center'>
                        <h1 className='font-bold lg:text-xl'>Tech Stack</h1>
                        <ul className="flex gap-3 justify-center items-center">
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
                                <SkillBox icon={tailwind} name={"tailwind"} />
                            </li>
                        </ul>
                    </div>
                    <div className='py-1'>
                        <p className=" max-w-md ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa, non nobis consequuntur reiciendis vero impedit iure,
                            i </p>
                    </div>
                    <div className="w-full h-auto py-3 flex flex-col gap-3 ">
                        <div className="flex justify-center items-start w-full h-full border-2 border-red-300 p-2 rounded-3xl font-bold tracking-wider"><a className="text-lg">Code</a></div>
                        <div className="flex justify-center items-start w-full h-full border-2 border-red-300 p-2 rounded-3xl font-bold tracking-wider"><a className="text-lg">Live Site</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
