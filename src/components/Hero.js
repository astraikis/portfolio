import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import profilePic from "../assets/profile_pic.jpeg";

function Hero() {
    return (
        <div className="px-12 lg:px-32 md:px-24 pt-48 pb-48 flex items-center">
            <div>
                <h1 className="text-5xl text-slate-700 font-serif">
                    hi, my name's jackson
                </h1>
                <p className="py-5 text-slate-600 max-w-xl">
                    i'm a CS student @ <span className="text-teal-600 font-bold">UNCG</span> planning to graduate in december 2024.
                    i love working with python, javascript, and go to build unique full stack applications.
                    i most recently worked @ <span className="text-teal-600 font-bold">IBM</span> as a backend SWE intern.
                </p>
                <div className="flex flex-row">
                    <a href="https://github.com/astraikis" class="text-slate-400 transition-all motion-reduce:transition-none hover:text-slate-500 w-6" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size="1.5rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/jackson-astraikis/" class="text-slate-400 ml-4 transition-all motion-reduce:transition-none hover:text-slate-500 w-6" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size="1.5rem" />
                    </a>
                    <a href="mailto:astraikis.jackson@gmail.com" class="text-slate-400 ml-4 transition-all motion-reduce:transition-none hover:text-slate-500 w-6" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>
            </div>
            <img
                src={profilePic}
                alt="headshot"
                className="rounded-3xl w-56 lg:ml-32 ml-24 block hidden md:block drop-shadow-lg"
            />
        </div>
    )
}

export default Hero;