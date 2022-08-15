import { ExternalLinkIcon } from "@heroicons/react/outline"

function Footer() {
    return (
        <div className="py-8 text-sm text-center text-slate-400">
            <p className="pb-1">built & designed by jackson astraikis</p>
            <a href="https://github.com/astraikis/portfolio" target="_blank" rel="noopener noreferrer" className="inline hover:text-slate-600 transition-all">
                <ExternalLinkIcon className="-ml-0.5 mr-2 h-4 w-4 inline" aria-hidden="true" />
                source code
            </a>
        </div>
    )
}

export default Footer;