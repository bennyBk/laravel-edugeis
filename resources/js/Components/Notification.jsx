import { Dialog, Transition } from '@headlessui/react'
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Notification({ type, message, color }) {
    // avant=  <Dialog.Panel -> <div


    // TODO

    // const color = colors.filter(color => color === type);
    // switch (type) {
    //     case 'error':
    //         return 'red-400'
    //     case 'success':
    //         return 'emerald-200'
    //     default:
    //         return 'amber-100'
    //
    // }

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 sm:pb-0 lg:pb-0 pb-0">

            <div className={`bg-${color}-600 rounded-xl max-w-2xl mx-auto`}><div class="">
                {/* on ajoute les couleurs nécessaires en statique, sinon tailwind ne sait pas les compiler */}
                <div className='hidden bg-blue-600 bg-blue-800 bg-red-800 bg-red-600'>{color}</div>
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className={`flex rounded-lg bg-${color}-800 p-2`}>
                                <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 truncate font-medium text-white">
                                {message}
                                {/* <span className="md:hidden">We announced a new product!</span> */}
                                {/* <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span> */}
                            </p>
                        </div>
                        {/* <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href="#"
                                className={`flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-${color}-50`}
                            >
                                Learn more
                            </a>
                        </div> */}
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                type="button"
                                className={`-mr-1 flex rounded-md p-2 hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2`}
                            >
                                <span className="sr-only">Fermer</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
}
