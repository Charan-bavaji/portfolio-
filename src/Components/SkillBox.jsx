import React from 'react'

const SkillBox = ({ icon, name }) => {
    return (
        <div className=" w-[4.5rem] h-[4.5rem] m-2 p-2 rounded-3xl flex justify-center items-center flex-col">
            <img src={icon} width={100} height={100} alt={name} />
            {/* <p>{name}</p> */}
        </div>
    )
}

export default SkillBox;