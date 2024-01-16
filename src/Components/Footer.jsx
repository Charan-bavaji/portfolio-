import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-24 flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-transparent via-gray-600 to-transparent '>
      <div className="w-[70%] h-[1px] bg-white rounded-sm"></div>
      <h2 className='tracking-wider text-white text-[18px] font-extralight'>Designed and Coded by <a href='https://github.com/Charan-bavaji' className='underline underline-offset-4 tracking-wider text-[#ffd28f]'>Charan R</a></h2>
    </div>
  )
}

export default Footer
