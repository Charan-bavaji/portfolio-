import React from 'react'

const About = () => {
    return (
        <section className='w-full h-auto pb-[6rem] flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <div className="w-[85%] h-[auto] rounded-2xl md:w-[80%] lg:w-[80%] -z-0 backdrop-blur-sm bg-black/1 flex flex-col gap-6 lg:gap-10">

                {/* Badge */}
                <div className='group align-baseline w-[15rem] sm:w-[20rem] flex justify-center items-center bg-[#c59b5c] border-2 border-[#6a522f] rounded-full font-bold tracking-wider p-2'>
                    <h1 className='text-lg font-bold text-black tracking-widest lg:text-xl'>
                        Know about me ...!
                    </h1>
                </div>

                {/* Intro */}
                <div className='ml-[10%] sm:ml-[15%]'>
                    <p className='text-justify md:text-lg text-[#d5d3d3]'>
                        Hey there! <br />
                        I'm <span className='text-[#ffef88] font-semibold'>Charan R</span>, a Full Stack Developer
                        specializing in the <span className='text-[#ffef88] font-semibold'>MERN Stack</span> — building
                        scalable, production-ready web applications from idea to deployment. With{' '}
                        <span className='text-[#ffef88] font-semibold'>1+ year of professional experience</span> and
                        6 months of freelancing and personal projects, I've shipped real products across real estate,
                        healthcare, e-commerce, and enterprise domains.
                    </p>
                </div>

                <div className='ml-[10%] sm:ml-[15%] flex flex-col gap-8'>

                    {/* Profession */}
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Profession</h1>
                        <p className='text-justify md:text-lg text-[#d5d3d3]'>
                            I work as a <span className='text-[#ffef88] font-semibold'>Full Stack Developer</span> —
                            owning both the front-end experience and the back-end architecture. I build RESTful APIs,
                            admin dashboards, authentication systems, and cloud-hosted applications that solve real
                            business problems.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Tech Stack</h1>
                        <p className='text-justify md:text-lg text-[#d5d3d3] mb-4'>
                            Technologies I work with daily:
                        </p>
                        <div className='flex flex-wrap gap-2'>
                            {[
                                'React.js', 'Next.js', 'Node.js', 'Express.js',
                                'MongoDB', 'MySQL / PostgreSQL', 'Redux', 'Tailwind CSS',
                                'REST APIs', 'JWT Auth', 'GCP', 'Git & GitHub'
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className='px-3 py-1 text-sm rounded-full border border-[#6a522f] text-[#c59b5c] bg-black/20'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Professional Experience</h1>
                        <div className='flex flex-col gap-4'>
                            <div className='border border-[#6a522f] rounded-xl p-4 bg-black/20'>
                                <h2 className='text-[#ffef88] font-semibold md:text-lg'>
                                    Uggiso International Pvt. Ltd. — Full Stack Developer
                                </h2>
                                <p className='text-[#d5d3d3] md:text-base text-sm mt-1'>
                                    Built scalable React + Redux applications and managed GCP infrastructure
                                    (Compute Engine & Cloud Storage) for production deployments.
                                </p>
                            </div>
                            <div className='border border-[#6a522f] rounded-xl p-4 bg-black/20'>
                                <h2 className='text-[#ffef88] font-semibold md:text-lg'>
                                    Chesa Dental Care Services Ltd. — Full Stack Developer (MERN)
                                </h2>
                                <p className='text-[#d5d3d3] md:text-base text-sm mt-1'>
                                    Developed 4 internal business portals — Admin, TADA, Procurement & Service
                                    dashboards — using MERN stack with SQL and role-based access control.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Projects */}
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Projects</h1>
                        <div className='flex flex-col gap-4'>
                            <div className='border border-[#6a522f] rounded-xl p-4 bg-black/20'>
                                <h2 className='text-[#ffef88] font-semibold md:text-lg'>
                                    SwiftStoneBuilders — Real Estate Platform
                                </h2>
                                <p className='text-[#d5d3d3] md:text-base text-sm mt-1'>
                                    Full-stack real estate site with user authentication, secure admin dashboard,
                                    and full CRUD operations for property listings.
                                </p>
                                <a
                                    href='https://swiftstonebuilders.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-[#c59b5c] text-sm underline mt-2 inline-block hover:text-[#ffef88] transition'
                                >
                                    swiftstonebuilders.com ↗
                                </a>
                            </div>
                            <div className='border border-[#6a522f] rounded-xl p-4 bg-black/20'>
                                <h2 className='text-[#ffef88] font-semibold md:text-lg'>
                                    HealingHeaven — Mental Health Consulting
                                </h2>
                                <p className='text-[#d5d3d3] md:text-base text-sm mt-1'>
                                    Responsive, user-centric website focused on mental health services
                                    and seamless user interaction.
                                </p>
                                <a
                                    href='https://healingheaven.earth'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-[#c59b5c] text-sm underline mt-2 inline-block hover:text-[#ffef88] transition'
                                >
                                    healingheaven.earth ↗
                                </a>
                            </div>
                            <div className='border border-[#6a522f] rounded-xl p-4 bg-black/20'>
                                <h2 className='text-[#ffef88] font-semibold md:text-lg'>
                                    DraftWood — E-Commerce Platform
                                </h2>
                                <p className='text-[#d5d3d3] md:text-base text-sm mt-1'>
                                    Complete MERN e-commerce app with payment gateway integration, admin panel,
                                    order management, and secure JWT authentication.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Certifications</h1>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-start gap-3'>
                                <span className='text-[#c59b5c] mt-1'>▸</span>
                                <p className='text-[#d5d3d3] md:text-lg'>
                                    <span className='text-[#ffef88] font-semibold'>DevOps</span> — 3-Month Offline Certification
                                    covering CI/CD pipelines, Linux administration, and containerization.
                                </p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <span className='text-[#c59b5c] mt-1'>▸</span>
                                <p className='text-[#d5d3d3] md:text-lg'>
                                    <span className='text-[#ffef88] font-semibold'>Advanced Web Development</span> — Advanced React.js,
                                    JavaScript (ES6+), Developer Tools, Linux, Tailwind CSS, HTML5 & CSS3.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Career Goal */}
                    <div>
                        <h1 className='text-3xl text-[#c59b5c] py-5'>Career Goal</h1>
                        <p className='text-justify md:text-lg text-[#d5d3d3]'>
                            I'm on a mission to build software that makes a real impact. I'm actively growing into a{' '}
                            <span className='text-[#ffef88] font-semibold'>Senior Full Stack Engineer</span> role —
                            deepening my knowledge in system design, cloud architecture, DevOps, and scalable API
                            development, one shipped project at a time.
                        </p>
                    </div>

                    {/* Resume Download */}
                    <div className='mb-4'>
                        <a href="https://github.com/Charan-bavaji/portfolio-/raw/main/public/Charan_R.pdf" download="Charan_R_Resume.pdf">
                            <button className="w-auto h-10 px-4 py-5 flex justify-center items-center tracking-widest border-2 border-[#6a522f] rounded-xl cursor-pointer font-bold transition duration-150 ease-in-out hover:-translate-y-2 text-black hover:text-white bg-[#c59b5c] hover:bg-transparent shadow-lg text-sm">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-2 text-[16px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
                                    <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
                                </svg>
                                Get Resume
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About