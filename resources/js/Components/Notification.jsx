import {Dialog, Transition} from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Notification({type, message}) {
    // avant=  <Dialog.Panel -> <div
    const colors = {
        'error':'red-400',
        'success':'emerald-400',
        'message':'amber-100'
    }

    // TODO
    const color = 'white';
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
        <div className="max-w-2xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
            <div
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all /*sm:my-8*/ sm:w-full sm:max-w-lg">
                <div className={`bg-${color} px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}>
                    <div className="sm:flex sm:items-start">
                        {/*<div*/}
                        {/*    className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">*/}
                        {/*    /!*<ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true"/>*!/*/}
                        {/*</div>*/}
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            {/*<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">*/}
                            {/*<h3 className="text-lg font-medium leading-6 text-gray-900">*/}
                            {/*    Deactivate account*/}
                            {/*</h3>*/}
                            {/*<div className="mt-2">*/}
                            <div>
                                <p className="text-sm text-gray-500">
                                    {message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
