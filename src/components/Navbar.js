import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon, DownloadIcon } from '@heroicons/react/outline'

import resume from "../assets/resume.pdf";

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-slate-50">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-16 fixed top-0 w-screen bg-gradient-to-r from-sky-50 via-sky-100 to-indigo-100 z-10">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden pr-5">
                <Disclosure.Button className="justify-end p-2 rounded-md text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex sm:items-stretch justify-end">
                <div className="flex-shrink-0 flex items-center">
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="/#experience"
                    className="transition-all text-slate-400 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm"
                  >
                    experience
                  </a>
                  <a
                    href="/#projects"
                    className="transition-all text-slate-400 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm"
                  >
                    projects
                  </a>
                  <a
                    href="/#contact"
                    className="transition-all text-slate-400 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm"
                  >
                    contact
                  </a>
                  <a href={resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-teal-600 transition-all motion-reduce:transition-none hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <DownloadIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                            resume
                        </button>
                    </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-16 pb-4 pr-4 space-y-1 fixed top-0 w-screen bg-gradient-to-r from-sky-50 via-sky-100 to-indigo-100 z-0">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/#experience"
                className="text-slate-400 active:text-slate-700 border-transparent block pl-3 pr-4 py-2 border-l-4 text-right"
              >
                experience
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/#projects"
                className="text-slate-400 active:text-slate-700 border-transparent block pl-3 pr-4 py-2 border-l-4 text-right"
              >
                projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/#contact"
                className="text-slate-400 active:text-slate-700 border-transparent block pl-3 pr-4 py-2 border-l-4 text-right"
              >
                contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;