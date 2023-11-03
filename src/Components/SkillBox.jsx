import React from 'react'

const SkillBox = ({ icon, name }) => {
    return (
        <div className=" w-[2rem] h-[2rem] rounded-3xl flex justify-center items-center flex-col lg:w-[3rem] lg:h-[3rem]">
            <img src={icon} width={100} height={100} alt={name} />
        </div>
    )
}

export default SkillBox;