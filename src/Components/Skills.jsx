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
        <div className=" mt-5 w-[95%] h-[auto] border-2 border-slate-700 rounded-2xl">
            <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                <h1 className=""> Skills</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 pb-8 md:flex-row md:items-baseline md:px-5 md:py-5">
                <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-slate-500 rounded-3xl">
                    <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                        <h1 className="">Frontend</h1>
                    </div>
                    <div className='w-[95%] h-auto px-3 py-3 flex flex-wrap justify-center items-center'>
                        <SkillBox icon={html} name={"html"} />
                        <SkillBox icon={css} name={"css"} />
                        <SkillBox icon={javaScript} name={"javaScript"} />
                        <SkillBox icon={react1} name={"react1"} />
                        <SkillBox icon={tailwind} name={"tailwind"} />
                    </div>
                </div>
                <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-slate-500 rounded-3xl">
                    <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                        <h1 className=" ">Other</h1>
                    </div>
                    <div className='w-[95%] h-auto px-3 py-3 flex flex-wrap justify-center items-center'>
                        <SkillBox icon={git} name={"git"} />
                        <SkillBox icon={github} name={"github"} />
                        <SkillBox icon={linux} name={"linux"} />
                        <SkillBox icon={postMan} name={"postMan"} />
                        <SkillBox icon={vsCode} name={"vsCode"} />
                        <SkillBox icon={npm} name={"npm"} />

                    </div>
                </div>
                <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-slate-500 rounded-3xl">
                    <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                        <h1 className=" ">Backend</h1>
                    </div>
                    <div className='w-[95%] h-auto px-3 py-3 flex flex-wrap justify-center items-center md:h-[18rem] lg:h-[12.5rem]'>
                        <SkillBox icon={java1} name={"java1"} />
                        <SkillBox icon={nodeJs} name={"nodeJs"} />
                        <SkillBox icon={express1} name={"express1"} />
                        <SkillBox icon={mongooDb1} name={"mongooDb1"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;