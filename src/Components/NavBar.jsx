import React from 'react'
import { useState } from 'react';
const NavBar = () => {
    const content = [
        { name: "Home" },
        { name: "Skills" },
        { name: "Projects" },
        { name: "Contact" },
        { name: "About" },
    ];
    const scrollDown = () => {
        const scrollCal = window.innerHeight * 0.6;
        window.scrollBy({
            top: scrollCal,
            behavior: 'smooth',
        });
    }

    const [lists, setLists] = useState(false);
    const displayList = () => {
        setLists(!lists);
    }
    return (
        <>
            <div className="w-full h-20 flex justify-center items-center z-50">
                <div className="w-[22rem] md:w-[45rem] h-12 backdrop-blur-sm bg-black/10 flex justify-between items-center rounded-full">
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
                                    <a href={`#${item.name}`}>
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-6 m-4">
                        {/* <button>

                        </button> */}
                        <span className="material-symbols-outlined rounded-full p-1 hover:bg-red-200" onClick={scrollDown}>
                            keyboard_double_arrow_down
                        </span>
                    </div>
                </div>
            </div>

            {lists && <div className=" relative w-full h-[50vh] flex flex-col justify-center items-center backdrop-blur-sm bg-black/20 md:hidden z-50">
                <a href='#' className='py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce'>
                    <span>Home</span>
                </a>
                <a href='#Skills' className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">
                    <span >Skills</span>
                </a>
                <a href="#Projects" className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">
                    <span>Project</span>
                </a>
                <a href="#Contact" className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">
                    <span>Contact</span>
                </a>
                <a href='#About' className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">
                    <span>About</span>
                </a>
            </div>}
        </>
    )
}

export default NavBar
