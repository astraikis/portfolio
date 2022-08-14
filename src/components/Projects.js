import quadrad from "../assets/quadrad.png";

function Projects() {
    return (
        <div className="pl-12 lg:pl-32 md:pl-24">
            <h1 className="text-4xl text-slate-800 font-serif">projects</h1>
            <div className="pl-12 pr-8 py-16 flex flex-row">
                <div>
                    <h3 className="text-xl font-bold font-serif text-indigo-700 inline">Data Visualization Platform</h3>
                </div>
                <img
                    src={quadrad}
                    alt="data visualization platform screenshot"
                    className="w-1/2 ml-24 rounded-3xl border-2 border-slate-200"
                />
            </div>
        </div>
    )
}

export default Projects;