import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const content = [
        { name: "Home", link: "" },
        { name: "Skills", link: "skills" },
        { name: "Projects", link: "projects" },
        { name: "Contact", link: "contact" },
        { name: "About", link: "about" }
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
            <div className="w-full h-24 flex justify-center items-center bg-inherit z-50">
                <div className="w-[22rem] md:w-[45rem] h-16 backdrop-blur-sm bg-black/10 flex justify-between items-center rounded-full">
                    <div className=" p-3 m-1 md:hidden flex justify-center items-center">
                        <span className="material-symbols-outlined rounded-full p-1.5 hover:bg-slate-400 cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2"
                            onClick={displayList}
                        >
                            menu_open
                        </span>
                    </div>
                    <div className="p-6 m-4 ">
                        <span id='font' className="font-sans font-bold text-2xl">Charan</span>
                    </div>
                    <div className=" p-2 ">
                        <ul className="hidden md:flex justify-center items-center">
                            {content.map((item, index) => (
                                <Link to={`/${item.link}`} key={index}>
                                    <li className=" group p-3 text-md tracking-[2px] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer hover:text-[#c59b5c]" key={index}>
                                        {/* <a href={`#${item.name}`}> */}
                                        <span className=' group-hover:text-[#ffce85] font-light'>{item.name}</span>
                                        {/* </a> */}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="p-6 m-4">
                        <span className="material-symbols-outlined rounded-full p-1 hover:bg-[#c59b5c] hover:text-black cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2" onClick={scrollDown}>
                            keyboard_double_arrow_down
                        </span>
                    </div>
                </div>
            </div>

            {lists && <div className=" relative w-full h-[50vh] flex flex-col justify-center items-center backdrop-blur-sm bg-black/20 md:hidden z-50">
                {
                    content.map((item, index) => (
                        <Link to={`/${item.link}`} key={index} className='py-3 m-1 px-20 text-md  transform ease-in-out delay-150 tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce'>
                            <span>{item.name}</span>
                        </Link>
                    ))
                }
            </div>}
        </>
    )
}

export default NavBar
