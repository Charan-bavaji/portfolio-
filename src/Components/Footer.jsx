import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-40 flex flex-col justify-center items-center '>
      <div className='flex justify-center items-center gap-3'>
        <div className="w-[7rem] md:w-[14rem] sm:w-[10rem] lg:w-[20rem] h-[2px] bg-slate-500 rounded-sm "></div>
        <h1 className='text-4xl text-black'>X</h1>
        <div className="w-[7rem] md:w-[14rem] sm:w-[10rem] lg:w-[20rem] h-[2px] bg-slate-500 rounded-sm "></div>
      </div>
      {/* <div className=' w-[60%] p-6 mx-9'>
        <span id='font' className="font-sans font-bold text-4xl ">Charan R</span>
      </div> */}
    </div>
  )
}

export default Footer
