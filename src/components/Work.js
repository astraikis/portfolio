import {
    ChevronRightIcon,
    DownloadIcon
} from "@heroicons/react/outline";

import resume from "../assets/resume.pdf";

function Work() {
    return (
        <div id='experience' className="pl-8 pt-24 lg:pl-32 md:pl-24">
            <h1 className="text-4xl text-slate-700 font-serif w-4/5">work experience</h1>
            <div className="pr-8 lg:pr-16 pt-16 pb-12 lg:flex lg:flex-row">
                <div className="pr-24">
                    <h3 className="text-xl font-bold font-serif text-teal-600 pb-2 lg:pb-0">IBM</h3>
                </div>
                <div>
                    <h4 className="text-xl font-bold font-serif text-slate-700 pb-1">
                        backend SWE intern
                    </h4>
                    <p className="text-slate-400 pb-4">may 2022 - august 2022</p>
                    <p className="text-slate-600 w-full lg:w-2/3 pb-3"><ChevronRightIcon className="h-5 w-5 mr-4 text-teal-600 inline"/>Implemented distributed systems tracing libraries to improve observability and identify weak spots throughout a collection of microservices.</p>
                    <p className="text-slate-600 w-full lg:w-2/3 pb-3"><ChevronRightIcon className="h-5 w-5 mr-4 text-teal-600 inline"/>Reworked code to meet the latest Go standards and reduce redundancy.</p>
                    <p className="text-slate-600 w-full lg:w-2/3 pb-3"><ChevronRightIcon className="h-5 w-5 mr-4 text-teal-600 inline"/>Worked with management and the DevOps team to create dashboards that provided easy access to real-time key metrics and potential issues for production-level software.</p>
                </div>
            </div>
            <a href={resume} className="text-slate-400" target="_blank" rel="noopener noreferrer"><DownloadIcon className="h-5 w-5 mr-4 inline" />resume</a>
        </div>
    )
}

export default Work;