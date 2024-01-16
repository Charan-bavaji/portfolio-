import React from 'react'
import SocialMedia from "./SocialMedia";
import { arrowL, arrowR } from '../assets/images';
const Contact = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[8rem]'>
      <section className=' pb-3 w-[95%] h-auto rounded-2xl md:w-[80%] lg:w-[80%] backdrop-blur-sm bg-black/1  flex justify-start items-center flex-col'>
        <div className='w-[90%] m-2 p-5 md:w-[95%] flex justify-start items-center flex-col gap-6'>
          <h1 className='text-xl text-[#c59b5c] font-bold py-2 tracking-wider md:text-2xl'>
            CONTACT ME
          </h1>
          <p className='text-sm tracking-wide  md:text-base'>
            You can find all the necessary information about me here and also in my resume, which is available for you to download. If there are any questions I haven't answered here that you would like answered, please contact me by email or my social media provided below.
            I'm available on all of these platforms, so feel free to contact me however is most convenient for you!
          </p>
          <div className=' md:hidden'>
            <SocialMedia flex={''} />
          </div>
        </div>
        <div className=' w-full hidden md:flex items-center gap-2 '>
          <img src={arrowL} alt="arrow" width={150} height={150} />
          <h1 id='font' className='tracking-widest text-[#c59b5c] text-2xl font-sans'>Connect</h1>
        </div>
        <div className=' w-[100%] hidden md:flex justify-end items-center'>
          <h1 id='font' className='tracking-widest text-[#c59b5c] text-2xl font-sans'>Or you can mail directly</h1>
          <img src={arrowR} alt="arrow" width={150} height={150} />
        </div>
        <div className=' md:hidden'>
          <p className="text-[10px] md:text-xs lg:text-sm cursor-pointer hover:text-[#fbcc86]">-------<a className='px-1 text-[12px]' href="mailto:charanbavaji.official@gmail.com">charanbavaji.official@gmail.com</a>-------</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
