import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MailIcon } from "@heroicons/react/outline";

function Contact() {
    return (
        <div id="contact" className="pt-24 pb-12 px-8 lg:px-32 md:px-24">
            <h1 className="text-4xl text-slate-700 font-serif pb-16">get in touch</h1>
            <div className="md:flex md:flex-row">
                <p className="text-slate-600 w-full md:w-1/2">
                    i'm always looking for opportunities to work with and meet new people so feel free to say hi!
                </p>
                <div className="flex flex-row pt-3 md:pt-0 md:pl-16 items-center">
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
        </div>
    )
}

export default Contact;