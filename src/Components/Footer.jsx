import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='w-full h-24 flex flex-col justify-center items-center gap-5 mb-4 mt-16'>
      {/* <div className='w-[75%] h-[1px] bg-slate-400'></div> */}
      <hr className='w-[75%] h-[1px] bg-slate-900' />
      <div className='w-full h-auto flex justify-center text-center gap-5 tracking- text-white text-[18px] font-extralight'>
        {/* <span id='font' className="font-sans font-bold text-2xl lg:text-5xl">Charan</span> */}
        <Link to={"/about"}>
          <h1 className='p-1  text-[#ffd28f]'>About</h1>
        </Link>
        <Link to={"/contact"}>
          <h1 className='p-1  text-[#ffd28f]'>Contact</h1>
        </Link>
      </div>
      <h2 className='tracking-wider text-white text-[18px] font-extralight'>Designed and Coded by <a href='https://github.com/Charan-bavaji' className='underline underline-offset-4 tracking-wider text-[#ffd28f]'>Charan R</a></h2>
    </div>
  )
}

export default Footer;