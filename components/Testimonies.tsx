import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Testimonies() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Naternrock Entrepreneurship Academy </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Course Instructor</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Dr Peter Ezenwani 
                                ANIM BSc. MSC. ACCA. CMC. FIMC. DFAI CMP, DBA
                            </p>
                            <p>Bachelors of Science – Accounting</p>
                            <p>Qualified Marketing Associate – ANIM</p>
                            <p>Masters in Finance and Risk Management (University of Wales / London School of Business and Finance)</p>
                            <p>Associate Chartered Certified Accountant - ACCA UK</p>
                            <p>Certified Management Consultant – CMC</p>
                            <p>Fellow, International Management Consultant – FIMC</p>
                            <p>Distinguished Fellow Institute of Public Administrators (DFAI)</p>
                            <p>Chartered Management Professional (LBBS UK)</p>
                            <p>Doctor of Business Administration(LBBS UK)</p >
                            <p>Founder Natenrock Consulting</p >
                            <p>Founder Natenrock Health</p >
                            <p>Author of multiple books on Entrepreneurship, business, management, leadership and personal development, (selling on global platforms.Amazon, Selar, Rakuten Kobo)</p >
                            <p>Passionate Leader and Teacher</p >
                            <p>Consulted for over 300 SMEs</p >
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[43rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[28rem]"
                        src="https://natenrockgroup.ng/nea-images/neaceo.png"
                        alt=""
                    /> 
                    
                </div>
                {/* < */}
                    </div>
                </div>
            
    
    )
}
