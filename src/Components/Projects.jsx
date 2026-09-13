import React, { useState } from 'react'
import SkillBox from './SkillBox';
import { project1, html, css, react1, tailwind, nodeJs, mongooDb1, docker, jenkins, aws, terraform, ansible, kubernetes, linux, crible, U2collabSS } from '../assets/images';
import { Link } from 'react-router-dom';
import Certificates from './Certificates';
import ProjectView from './ProjectView';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (src, alt) => {
        setSelectedImage({ src, alt });
    }

    const closeImage = () => {
        setSelectedImage(null);
    }

    return (
        // Project border
        <div className='w-full h-auto pb-[6rem] flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <div className=" w-[95%] h-[auto] rounded-2xl  md:w-[80%] lg:w-[80%] -z-0 backdrop-blur-sm bg-black/1 flex flex-col gap-9">
                <div className=" w-auto flex justify-start items-center mt-2 ml-5 text-2xl md:text-4xl lg:text-5xl  rounded-md ">
                    <h1 className="font-semibold text-white tracking-[2px]"> 8 + <span className='  rounded-md bg-[#c59b5c] p-1 sm:p-2 text-black font-bold'>
                        Projects
                    </span> <span>counting...</span></h1>
                </div>
                <div className='flex flex-col justify-center items-center'>

                    {/* Project - U2Collab CI/CD Pipeline (DevOps) */}
                    <div className="w-[95%] h-auto border-2 border-[#6a522f] my-3 flex flex-col justify-center items-center rounded-3xl sm:w-[80%] md:flex md:flex-row md:w-[95%] lg:w-[70%] lg:py-6 shadow-lg ">
                        <div className=" w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                            <img
                                src={U2collabSS}
                                alt='U2Collab CI/CD Pipeline'
                                onClick={() => openImage(U2collabSS, 'U2Collab CI/CD Pipeline')}
                                className="lg:h-[18rem] grayscale hover:grayscale-0 hover:cursor-zoom-in"
                            />
                        </div>
                        <div className='w-full h-full px-3 lg:pr-10'>
                            <div className="py-2 text-lg flex justify-start items-center">
                                <h1 className='text-2xl font-bold lg:text-4xl lg:py-3 lg:font-bold'>U2Collab CI/CD Pipeline</h1>
                            </div>
                            <div className='w-auto h-10 flex gap-3 justify-start items-center py-6'>
                                <h1 className='font-bold lg:text-[14px] text-[#c59b5c]'>Tech Stack</h1>
                                <ul className="flex gap-1 justify-center items-center">
                                    <li>
                                        <SkillBox icon={jenkins} name={"Jenkins"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={docker} name={"Docker"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={aws} name={"AWS"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={linux} name={"Linux"} />
                                    </li>
                                </ul>
                            </div>
                            <div className='py-2'>
                                <p className=" max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-[16px] font-light text-left tracking-wider  ">
                                    Built a complete six-stage Jenkins CI/CD pipeline for U2Collab, a real-time collaborative MERN app: checkout, build and push Docker images to DockerHub, automated health-check verification, and deploy via SSH to a live EC2 environment. Added a manual production-approval gate, parallel test stage, and automatic rollback on failed health checks — tested end-to-end with a deliberate failure that correctly restored the last working build.
                                </p>
                            </div>
                            <div className="w-full h-auto py-3 flex flex-col gap-3 ">
                                <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer bg-[#c59b5c] hover:bg-transparent  group "><a href='https://github.com/Charan-bavaji/U2Collab/blob/main/U2Collab%20CICD%20Pipeline.md' target="_blank" rel="noopener noreferrer" className=" group-hover:text-white text-lg text-black">Code</a></div>
                            </div>
                        </div>
                    </div>

                    {/* Project - Cribl VPC Terraform + Ansible (DevOps) */}
                    <div className="w-[95%] h-auto border-2 border-[#6a522f] my-3 flex flex-col justify-center items-center rounded-3xl sm:w-[80%] md:flex md:flex-row md:w-[95%] lg:w-[70%] lg:py-6 shadow-lg " >
                        <div className=" w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                            <img
                                src={crible}
                                alt='Cribl VPC Terraform + Ansible'
                                onClick={() => openImage(crible, 'Cribl VPC Terraform + Ansible')}
                                className="lg:h-[18rem] grayscale hover:grayscale-0 hover:cursor-zoom-in"
                            />
                        </div>
                        <div className='w-full h-full px-3 lg:pr-10'>
                            <div className="py-2 text-lg flex justify-start items-center"><h1 className='text-2xl font-bold lg:text-4xl lg:py-3 lg:font-bold'>Cribl VPC — Terraform & Ansible</h1></div>
                            <div className='w-auto h-10 flex gap-3 justify-start items-center py-6'>
                                <h1 className='font-bold lg:text-[14px] text-[#c59b5c]'>Tech Stack</h1>
                                <ul className="flex gap-1 justify-center items-center">
                                    <li>
                                        <SkillBox icon={terraform} name={"Terraform"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={ansible} name={"Ansible"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={aws} name={"AWS"} />
                                    </li>
                                </ul>
                            </div>
                            <div className='py-2'>
                                <p className=" max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-[16px] font-light text-left tracking-wider ">
                                    Designed and provisioned a peered two-VPC AWS architecture end-to-end with Terraform (public/private subnets, NAT gateway, NACLs, bastion host, ALB) and used Ansible with dynamic inventory to install and run Cribl on three private EC2 instances. Verified full traffic flow from external request through the ALB to healthy backend targets, and confirmed VPC peering connectivity between environments.
                                </p>
                            </div>
                            <div className="w-full h-auto py-3 flex flex-col gap-3 ">
                                <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer bg-[#c59b5c] hover:bg-transparent  group "><a href='https://github.com/Charan-bavaji/Cribl-vpc-terraform-ansible' target="_blank" rel="noopener noreferrer" className=" group-hover:text-white text-lg text-black">Code</a></div>
                            </div>
                        </div>
                    </div>

                    {/* Project - DraftWood (Dev background) */}
                    <div className="w-[95%] h-auto border-2 border-[#6a522f] my-3 flex flex-col justify-center items-center rounded-3xl sm:w-[80%] md:flex md:flex-row md:w-[95%] lg:w-[70%] lg:py-6 shadow-lg ">
                        <div className=" w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                            <img
                                src={project1}
                                alt='img'
                                onClick={() => openImage(project1, 'DraftWood Furniture')}
                                className="lg:h-[18rem] grayscale hover:grayscale-0 hover:cursor-zoom-in"
                            />
                        </div>
                        {/* project -1 container */}
                        <div className='w-full h-full px-3 lg:pr-10'>
                            <div className="py-2 text-lg flex justify-start items-center">
                                <h1 className='text-2xl font-bold lg:text-4xl lg:py-3 lg:font-bold'>DraftWood Furniture</h1>
                            </div>
                            <div className='w-auto h-10 flex gap-3 justify-start items-center py-6'>
                                <h1 className='font-bold lg:text-[14px] text-[#c59b5c]'>Tech Stack</h1>
                                <ul className="flex gap-1 justify-center items-center">
                                    <li>
                                        <SkillBox icon={html} name={"HTML"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={css} name={"CSS"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={react1} name={"React"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={nodeJs} name={"Node.js"} />
                                    </li>
                                    <li>
                                        <SkillBox icon={mongooDb1} name={"MongoDB"} />
                                    </li>
                                </ul>
                            </div>
                            <div className='py-2'>
                                <p className=" max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-[16px] font-light text-left tracking-wider  ">
                                    Dynamic e-commerce platform, DraftWood, showcasing expertise in creating an intuitive admin dashboard, implementing robust user authentication, and integrating a
                                    secure payment section.
                                </p>
                            </div>
                            <div className="w-full h-auto py-3 flex flex-col gap-3 ">
                                <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer bg-[#c59b5c] hover:bg-transparent  group "><a href='https://github.com/Charan-bavaji?tab=repositories' className=" group-hover:text-white text-lg text-black">Code</a></div>
                                <Link to="/projectView2" className="text-lg group"><div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer text-black bg-[#c59b5c] hover:bg-transparent group-hover:text-white">Preview</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <a className=' group w-[70%] flex justify-center items-center gap-3 bg-[#c59b5c] hover:bg-transparent border-2 border-[#6a522f] rounded-full font-bold tracking-wider transition duration-150 ease-in-out hover:translate-y-2 cursor-pointer' href="https://github.com/Charan-bavaji?tab=repositories">
                        <h1 className='text-lg font-bold text-black py-3 rounded-full w-auto  group-hover:bg-transparent group-hover:text-white'>
                            VIEW MORE
                        </h1>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1 text-sm md:text-[16px] lg:text-lg group-hover:text-white" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                    </a>
                </div>
            </div>

            {/* Image Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex justify-center items-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={closeImage}
                >
                    <button
                        onClick={closeImage}
                        className="absolute top-5 right-5 md:top-8 md:right-8 text-white text-3xl font-bold w-10 h-10 flex justify-center items-center rounded-full border-2 border-[#6a522f] bg-black/40 hover:bg-[#c59b5c] hover:text-black transition duration-150 ease-in-out cursor-pointer"
                    >
                        &times;
                    </button>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-full max-h-[90vh] object-contain rounded-xl border-2 border-[#6a522f] shadow-2xl cursor-default"
                    />
                </div>
            )}
        </div>
    )
}

export default Projects;