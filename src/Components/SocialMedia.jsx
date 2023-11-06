import React from 'react'
import { github1, linkdin, twitter, insta } from '../assets/images'
const SocialMedia = () => {
    return (
        <div className=' flex justify-center items-center w-[4rem] h-auto '>
            <ul className="flex flex-col gap-3">
                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200">
                    <a href="https://github.com/Charan-bavaji"><img src={github1} alt="github" width={30} height={30} /></a>
                </li>
                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200">
                    <a href="https://www.linkedin.com/in/charan-r-884217221/">
                        <img src={linkdin} alt="github" width={30} height={30} />
                    </a>
                </li>
                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200">
                    <a href="https://twitter.com/CharanBavaji07">
                        <img src={twitter} alt="github" width={30} height={30} />
                    </a>
                </li>
                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200">
                    <a href="https://www.instagram.com/hacker_zakc/">
                        <img src={insta} alt="github" width={30} height={30} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia;
