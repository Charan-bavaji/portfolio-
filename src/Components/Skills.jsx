import React from 'react'
import SkillBox from './SkillBox'
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
    java1
} from '../assets/images/index';

const Skills = () => {
    // sm	640px	
    // md	768px	
    // lg	1024px	
    // xl	1280px
    // 2xl	1536px

    return (
        <section className=" mt-5 w-[95%] h-[auto] border-2 border-slate-700 rounded-2xl md:w-[80%] lg:w-[80%] backdrop-blur-sm bg-black/1">
            <div className=" flex justify-center items-center p-5 mt-2 text-2xl">
                <h1 className="font-semibold tracking-[2px]"> Skills</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 pb-8 md:flex-row md:items-baseline md:px-5 md:py-5">
                <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-slate-500 rounded-3xl pb-3">
                    <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                        <h1 className=" font-semibold tracking-[1px]">Frontend</h1>
                    </div>
                    <div className='w-[95%] h-auto px-1 py-1 flex flex-wrap justify-center items-center lg:pb-4'>
                        <div className="p-1 m-1">
                            <SkillBox icon={html} name={"html"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={css} name={"css"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={javaScript} name={"javaScript"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={react1} name={"react1"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={tailwind} name={"tailwind"} />
                        </div>
                    </div>
                </div>
                <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-slate-500 rounded-3xl pb-3">
                    <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                        <h1 className="font-semibold tracking-[1px] ">Other</h1>
                    </div>
                    <div className='w-[95%] h-auto px-1 py-1 flex flex-wrap justify-center items-center'>
                        <div className="p-1 m-1">
                            <SkillBox icon={git} name={"git"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={github} name={"github"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={linux} name={"linux"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={postMan} name={"postMan"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={vsCode} name={"vsCode"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={npm} name={"npm"} />
                        </div>

                    </div>
                </div>
                <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-slate-500 rounded-3xl pb-3">
                    <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                        <h1 className=" font-semibold tracking-[1px]">Backend</h1>
                    </div>
                    <div className='w-[95%] h-auto px-1 pt-1 flex flex-wrap justify-center items-center md:h-[auto] lg:h-auto lg:pb-4'>
                        <div className="p-1 m-1">
                            <SkillBox icon={java1} name={"java1"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={nodeJs} name={"nodeJs"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={express1} name={"express1"} />
                        </div>
                        <div className="p-1 m-1">
                            <SkillBox icon={mongooDb1} name={"mongooDb1"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;