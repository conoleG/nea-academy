import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
    'Whatsapp',
    'Telegram',
    'Zoom'
    
]

export default function SideInfo() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">JULY REGISTRATION IS ON AND IT CLOSES 30TH OF JUNE 2024
                        CLASSES WILL RUN FROM
                        1ST OF JULY TO 30TH OF JULY</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        These softwares are free. Those also to be taught during the course are also free
                        Natenrock Entrepreneurship Academy, is Simple and flexible! So, you will go through the training period without pressure nor strain
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Here are the learning Apps you will need!</h3>
                        
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">NEA Learning Tools</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Course Fee</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">N15,000 only or $20 0nly</span>
                                    {/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span> */}
                                </p>
                                <a
                                    href="https://flutterwave.com/pay/iyhqh5wrjizv"
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Book Now (NGN)
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Payable by Transfer to
                                    Natenrock Limited
                                    Fidelity Bank 5600745455
                                </p>
                                <p className="mt-6 text-xs leading-5 text-gray-600"> <span className="font-bold text-sm">Note: </span>Please send evidence of by text or whatsapp to 08179489308

                                    Once this is done you will be added to a waiting group before the course start date
                                    For any further enquiries text or whatsapp on 08179489308</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
