import React from 'react'

const About = () => {
    return (
        <section className='w-full h-auto pb-[6rem]  flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <div className=" w-[85%] h-[auto] rounded-2xl  md:w-[80%] lg:w-[80%] -z-0 backdrop-blur-sm bg-black/1 flex flex-col gap-6 lg:gap-10">
                {/* <div className='w-full align-baseline'> */}
                <div className=' group align-baseline w-[15rem] sm:w-[20rem] flex justify-center items-center bg-[#c59b5c]  border-2 border-[#6a522f] rounded-full font-bold tracking-wider p-2 '>
                    <h1 className='text-lg font-bold text-black  tracking-widest lg:text-xl'>
                        Know about me ...!
                    </h1>
                </div>
                <div className=' ml-[10%] sm:ml-[15%]'>
                    <p className='text-justify md:text-lg text-[#d5d3d3] '>
                        Hey there! <br /> I'm <span className='text-[#ffef88] font-semibold'>Charan R</span>, a Frontend Developer who loves building
                        websites from simple to complex. I'm also exploring backend stuff,
                        building basic servers, APIs, and databases. As a fresher, I've dived
                        into various technologies in this field. Excited to keep learning and aiming
                        to become a Full Stack Developer. Let's create something awesome together!
                    </p>
                </div>
                <div className=' ml-[10%] sm:ml-[15%]'>
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'> Profession</h1>
                        <p className='text-justify md:text-lg text-[#d5d3d3]'> As a motivated and skilled <span className='text-[#ffef88] font-semibold'>front-end developer</span> in the  early stages of my career.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Key Skills and Qualifications</h1>
                        <p className='text-justify md:text-lg text-[#d5d3d3]'>
                            I am eager to bring my passion for web development and proficiency in HTML, CSS, JavaScript, ReactJS, Tailwind CSS, and more to a dynamic team. Currently completing my <span className='text-[#ffef88] font-semibold'>MCA</span>, I have a solid foundation with a <span className='text-[#ffef88] font-semibold'>BCA</span> degree and have actively explored back-end technologies like Node.js, Express, and MongoDB.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Professional Experience</h1>
                        <p className='text-justify md:text-lg text-[#d5d3d3]' >I have hands-on experience in building projects that showcase my versatility, such as...
                            <li>
                                Disney Clone (utilizing Redux and React)
                            </li>
                            <li>
                                DraftWood (an e-commerce platform built with the MERN stack)
                            </li>
                            <li>
                                User Authentication
                            </li>
                            <li>
                                ImgGen AI
                            </li>
                        </p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Career Goals</h1>
                        <p className='text-justify md:text-lg text-[#d5d3d3]'>My ultimate goal is to become a <span className='text-[#ffef88] font-semibold'> Full Stack Developer</span>, and I have already delved into advanced tech stacks like MERN, along with mastering tools such as Tailwind CSS, Java, npm, Linux, and Redux.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Conclusion</h1>
                        <p className='text-justify md:text-lg text-[#d5d3d3]'>
                            I have enough to build mediate Front-End applications, now I'm exploring the power of Back-end development and trying to learn something new.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
