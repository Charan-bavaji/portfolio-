import React from 'react'
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
const Footer = () => {
  return (
    <div className='w-full h-full py-3 flex flex-col justify-center items-center  mt-16 bg-[#c8964b]  clip '>
      {/* <div className='w-[75%] h-[1px] bg-slate-400'></div>
      <hr className='w-[75%] h-[1px] bg-slate-900' />
      <div className='w-full h-auto flex justify-center text-center gap-5 tracking- text-white text-[18px] font-extralight'>
        <span id='font' className="font-sans font-bold text-2xl lg:text-5xl">Charan</span>
        <Link to={"/contact"}>
          <h1 className='p-1  text-[#ffd28f]'>Contact</h1>
        </Link>
        <Link to={"/about"}>
          <h1 className='p-1  text-[#ffd28f]'>About</h1>
        </Link>
      </div>
      <h2 className='tracking-wider text-white text-[18px] font-extralight'>Designed and Coded by <a href='https://github.com/Charan-bavaji' className='underline underline-offset-4 tracking-wider text-[#ffd28f]'>Charan R</a></h2> */}
      <div className='flex w-full flex-col sm:flex-row justify-center items-center md:justify-evenly'>
        <div className='p-4 tracking-wider w-auto text-start'>
          <h1 id='font' className='text-4xl lg:text-6xl text-gray-800  '>Charan R</h1>
          <h3 id='font' className='text-xl text-gray-800 lg:text-md font-thin'>Frontend Developer</h3>
        </div>
        <div className='w-auto'>
          <span className='tracking-wider text-slate-900 font-sans'>
            Please don't hesitate to reach out!
          </span>
          {/* <div className=' md:hidden p-2 w-auto'>
            <SocialMedia flex={''} />
          </div> */}
          <div className='w-auto h-auto p-4 flex justify-center text-center gap-5 tracking-wider text-white text-[18px] font-extralight'>
            <Link to='/contact'>
              <button className="w-auto h-10 px-2 py-3 sm:px-4 sm:py-5 flex justify-center items-center text-md border-2 border-[#6a522f] rounded-xl  cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2
                              text-white backdrop-blur-sm bg-black/10 shadow-lg tracking-widest hover:text-black hover:bg-[#c59b5c]">
                contact</button>
            </Link>
            <Link to='/about'>
              <button className="w-auto h-10 px-2 py-3 sm:px-4 sm:py-5 flex justify-center items-center text-md border-2 border-[#6a522f] rounded-xl  cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2
                              text-white backdrop-blur-sm bg-black/10 shadow-lg tracking-widest hover:text-black hover:bg-[#c59b5c]">
                about</button>
            </Link>
          </div>
        </div>

      </div>
      <div>
        <h2 className='tracking-wider text-white text-[18px] font-extralight'>Designed and Coded by <a href='https://github.com/Charan-bavaji' className='underline underline-offset-4 tracking-wider text-slate-900'>Charan R</a></h2>
      </div>
    </div>
  )
}

export default Footer;