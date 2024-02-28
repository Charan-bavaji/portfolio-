import React from 'react'
import video2 from '../assets/videos/project2.mp4'
import { Link } from 'react-router-dom'
const ProjectView = (props) => {
    return (
        <div className='mt-24 w-full h-auto flex justify-center items-center pb-10'>
            <section className=' w-[95%] h-[auto] px-2 py-4  flex flex-col justify-center items-center rounded-2xl md:w-[80%]'>
                <video className='rounded-lg w-[90%] pb-4' autoPlay loop controls>
                    <source src="https://github.com/Charan-bavaji/portfolio-/raw/main/src/assets/videos/project2.mp4" type="video/mp4" />
                </video>
                <article className=' w-[90%]'>
                    <h1 className=' text-xl font-semibold tracking-wider py-2 lg:text-3xl'>DesineyLand</h1>
                    <div className=' md:w-[80%]'>
                        <p className=' text-sm tracking-wider pb-8 lg:text-base'>
                            Developed a Disney clone web application using React and Redux for frontend state management,
                            providing users with an immersive experience reminiscent of the Disney brand.
                            Leveraged Firebase for backend services, including user authentication and real-time database
                            functionality, ensuring secure access to content and dynamic updates.

                        </p>
                        <div className='flex flex-row gap-6'>
                            <div className='w-auto'>
                                <a href='https://github.com/Charan-bavaji?tab=repositories' className=' cursor-pointer border-2 border-slate-500 px-6 py-2 rounded-2xl lg:px-8 lg:py-2'>
                                    <button className='lg:text-lg'>Code</button>
                                </a>
                            </div>
                            <div className='w-full'>
                                <Link to='/' className=' cursor-pointer border-2 border-slate-500 px-6 py-2 rounded-2xl lg:px-8 lg:py-2'>
                                    <button className='lg:text-lg'>home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default ProjectView;