import React from 'react'

const SkillBox = ({ icon, name }) => {
    return (
        <div className="relative group w-[2.5rem] h-[2.5rem] rounded-3xl cursor-pointer flex justify-center items-center flex-col md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem]">
            <img src={icon} width={100} height={100} alt={name} />
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md text-[10px] font-medium tracking-wide text-black bg-[#c59b5c] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-in-out z-10">
                {name}
            </span>
        </div>
    )
}

export default SkillBox;