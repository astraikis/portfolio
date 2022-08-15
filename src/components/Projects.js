import {
    ExternalLinkIcon,
    CheckCircleIcon,
    FolderIcon,
    TerminalIcon
} from "@heroicons/react/outline"

import quadrad from "../assets/quadrad.png";
import plnr from "../assets/plnr.png";

function Projects() {
    return (
        <div id="projects" className="pt-24 pb-12 pl-8 lg:pl-32 md:pl-24">
            <h1 className="text-4xl text-slate-700 font-serif">projects</h1>
            <div className="pr-8 lg:pr-16 pt-16 lg:pb-12 lg:flex lg:flex-row">
                <div>
                    <CheckCircleIcon className="-ml-0.5 mr-2 h-4 w-4 inline text-teal-600" aria-hidden="true" />
                    <p className="text-teal-600 inline">featured</p>
                    <h3 className="text-xl font-bold font-serif text-slate-700">data visualization platform</h3>
                    <a href="https://www.quadrad.io/" target="_blank" rel="noopener noreferrer">
                        <button
                            type="button"
                            className="inline-flex items-center mt-3 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-teal-600 transition-all motion-reduce:transition-none hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <ExternalLinkIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                            view site
                        </button>
                    </a>
                    <p className="pt-3 text-slate-600">
                        a platform for visualizing product review data manually aggregated from several popular review sites.
                        built for a client as a freelance developer. featured on "On Air with Ryan Seacrest" and <a href="https://www.youtube.com/watch?v=-sJLefg76sg" target="_blank" rel="noopener noreferrer" className="text-teal-600 transition-all motion-reduce:transition-none hover:text-teal-700 underline">"Fox 11 Los Angeles"</a>.
                    </p>
                    <div className="flex flex-row py-3 text-slate-400">
                        <TerminalIcon className="h-6 w-6 mr-3" />
                        <p>javascript, express, react, mongoDB</p>
                    </div>
                </div>
                <img
                    src={quadrad}
                    alt="data visualization platform screenshot"
                    className="w-full lg:w-1/2 h-min lg:ml-24 mt-3 lg:mt-0 rounded-3xl drop-shadow-lg h-auto"
                />
            </div>
            <div className="pr-8 lg:pr-16 pt-16 lg:pb-12 lg:flex lg:flex-row">
                <img
                    src={plnr}
                    alt="data visualization platform screenshot"
                    className="w-full lg:w-1/2 h-min hidden lg:block rounded-3xl drop-shadow-lg h-auto"
                />
                <div className="lg:ml-24">
                    <CheckCircleIcon className="-ml-0.5 mr-2 h-4 w-4 inline text-teal-600" aria-hidden="true" />
                    <p className="text-teal-600 inline">featured</p>
                    <h3 className="text-xl font-bold font-serif text-slate-700">course planner</h3>
                    <a href="https://github.com/astraikis/plnr" target="_blank" rel="noopener noreferrer">
                        <button
                            type="button"
                            className="inline-flex items-center mt-3 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-teal-600 transition-all motion-reduce:transition-none hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <ExternalLinkIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                            view source clone
                        </button>
                    </a>
                    <p className="pt-3 text-slate-600">
                        a web app for in depth course work tracking.
                    </p>
                    <div className="flex flex-row py-3 text-slate-400">
                        <TerminalIcon className="h-6 w-6 mr-3" />
                        <p>django, react, postgresQL</p>
                    </div>
                </div>
                <img
                    src={plnr}
                    alt="data visualization platform screenshot"
                    className="w-full lg:w-1/2 sm:block lg:hidden h-min mt-3 lg:mt-0 rounded-3xl drop-shadow-lg h-auto"
                />
            </div>
            <div className="pr-8 lg:pr-16 pt-16">
                <div className="p-6 lg:w-1/3 md:w-1/2 sm:w-full rounded-3xl border-2 border-slate-300">
                    <div className="flex flex-row pt-3">
                        <FolderIcon className="h-6 w-6 mr-3 text-slate-400" />
                        <h3 className="text-xl font-bold font-serif text-slate-700">pyp</h3>
                    </div>
                    <a href="https://github.com/astraikis/pyp" target="_blank" rel="noopener noreferrer">
                        <button
                            type="button"
                            className="inline-flex items-center mt-3 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-teal-600 transition-all motion-reduce:transition-none hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <ExternalLinkIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                            view source clone
                        </button>
                    </a>
                    <p className="pt-3 text-slate-600">
                        a web app that scans food barcodes and scans for potentially harmful ingredients. won 1st place in the health category @ <span className="text-teal-600 font-bold">HackDuke 2021</span>.
                    </p>
                    <div className="flex flex-row py-3 text-slate-400">
                        <TerminalIcon className="h-6 w-6 mr-3" />
                        <p>javascript, react, edamam food API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;