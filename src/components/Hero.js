import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MailIcon } from "@heroicons/react/outline";

import profilePic from "../assets/profile_pic.jpeg";

function Hero() {
    return (
        <div className="px-8 lg:px-32 md:px-24 pt-32 md:pt-48 pb-36 flex items-center">
            <div>
                <h1 className="text-5xl text-slate-700 font-serif">
                    hi, my name's jackson
                </h1>
                <p className="py-5 text-slate-600 max-w-xl">
                    i'm a CS student @ <span className="text-teal-600 font-bold">UNCG</span> planning to graduate in december 2024.
                    i love working with python, javascript, and go to build unique full stack applications.
                    i most recently worked @ <span className="text-teal-600 font-bold">IBM</span> as a backend SWE intern.
                </p>
                
                <div className="flex flex-row items-center">
                    <a href="https://github.com/astraikis" class="text-slate-400 transition-all motion-reduce:transition-none hover:text-slate-500 w-6" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size="1.5rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/jackson-astraikis/" class="text-slate-400 ml-4 transition-all motion-reduce:transition-none hover:text-slate-500 w-6" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size="1.5rem" />
                    </a>
                    <a href="mailto:astraikis.jackson@gmail.com" target="_blank" rel="noopener noreferrer" className="nline-flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 ml-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-teal-600 transition-all motion-reduce:transition-none hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <MailIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                            say hi
                        </button>
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