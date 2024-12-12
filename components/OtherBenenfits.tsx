import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function OtherBenefits() {
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
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Why Natenrock Entrepreneurship academy (NEA) is different
                            </h1>
                            <ol role="list" className="mt-8 space-y-8 text-gray-800">
                                There are many entrepreneurship courses globally but only NEA
                                <li>
                                    Gives you one course that combines financial skills, soft skills, marketing skills, tech skills, personality skills and entrepreneurial psychology all in one course to enable the entrepreneur get a rounded knowledge
                                </li>
                                <li>
                                    Equips you by giving you a one-month free business consulting beyond your training to get you going (lunch out, grow your business, monetize your knowledge and become a better and more successful business person)
                                </li>
                                <li>
                                    Gives you skill that can be applied in wealth building, business and in life in general
                                </li>
                                <li>
                                    An active business community that will keep you informed, and help you grow as a business entrepreneur and as a person
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <img
                            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                            src="https://natenrockgroup.ng/nea-images/4850064_29.jpg"
                            alt="Natenrock Entrepreneurship Academy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
