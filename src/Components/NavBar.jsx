import React from 'react'
import { useState } from 'react';
const NavBar = () => {
    const content = [
        { name: "Home" },
        { name: "Skills" },
        { name: "Project" },
        { name: "Contact" },
        { name: "About" },
    ];

    const [lists, setLists] = useState(false);
    const displayList = () => {
        setLists(!lists);
    }
    return (
        <>
            <div className="w-full h-20 flex justify-center items-center">
                <div className="w-[22rem] md:w-[45rem] h-12 backdrop-blur-sm bg-white/20 flex justify-between items-center rounded-full">
                    <div className=" p-3 m-1 md:hidden flex justify-center items-center">
                        <span className="material-symbols-outlined hover:rounded-full p-1.5 hover:bg-red-400"
                            onClick={displayList}
                        >
                            menu_open
                        </span>
                    </div>
                    <div className="p-6 m-4 ">
                        <span className="font-sans font-bold text-xl">Charan</span>
                    </div>
                    <div className=" p-2 ">
                        <ul className="hidden md:flex justify-center items-center">
                            {content.map((item, index) => (
                                <li className="p-3 text-md tracking-[0.1rem]" key={index}>
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-6 m-4">
                        <span className="material-symbols-outlined rounded-full p-1 hover:bg-red-200">
                            keyboard_double_arrow_down
                        </span>
                    </div>
                </div>
            </div>

            {lists && <div className=" relative w-full h-[50vh] flex flex-col justify-center items-center backdrop-blur-sm bg-black/20 md:hidden z-10">
                <span className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem] hover:animate-bounce">Home</span>
                <span className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">Skills</span>
                <span className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">Project</span>
                <span className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">Contact</span>
                <span className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">About</span>
            </div>}
        </>
    )
}

export default NavBar
