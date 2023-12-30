import React from 'react'
import SocialMedia from "./SocialMedia";
const Contact = () => {
  // sm	640px	
  // md	768px	
  // lg	1024px	
  // xl	1280px
  // 2xl	1536px
  return (
    <div className='w-full h-auto mt-[10%] pb-[6rem]  flex justify-center items-center flex-col'>
      <section className=' mt-5 pb-3 w-[95%] h-auto rounded-2xl md:w-[80%] lg:w-[80%] backdrop-blur-sm bg-black/1'>
        <div className='flex justify-start items-start'>
          <div className='w-[70%] m-2 p-5 md:pl-10 md:mt-4 md:w-[75%]'>
            <h1 className='text-xl text-[#c59b5c] font-bold py-2 tracking-wider md:text-2xl'>
              CONTACT ME
            </h1>
            <p className='text-sm tracking-wide  md:text-base'>
              You can contact me through my email address or by using the social media which I have added below
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-end items-end'>
          <div className='w-[70%] mt-2 mr-3 p-5 md:w-[75%]'>
            <h1 className='text-[#c59b5c] text-xl font-bold py-2 tracking-wider md:text-2xl'>
              Contact
            </h1>
            <p className='text-sm tracking-wide  md:text-base'>
              You can find all the necessary information about me here and also in my resume, which is available for you to download. If there are any questions I haven't answered here that you would like answered, please contact me by email or my social media provided below.
            </p>
          </div>
          <div className='w-[70%] mt-2 mr-3 p-5 md:w-[75%]'>
            <h1 className=' text-[#c59b5c] text-xl font-bold py-2 tracking-wider md:text-2xl'>
              Details
            </h1>
            <p className='text-sm tracking-wide  md:text-base'>
              I'm available on all of these platforms, so feel free to contact me however is most convenient for you!
            </p>
            {/* Add social media component */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
