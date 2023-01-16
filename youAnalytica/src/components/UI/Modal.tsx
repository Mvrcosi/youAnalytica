import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {PlusIcon } from '@heroicons/react/24/solid'
import { database } from '../../firebase-config';
import { useSelector } from 'react-redux';
import { doc, updateDoc, arrayUnion, arrayRemove, } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const Modal = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    const [subName, setSubName] = useState('');
    const [subPrice, setSubPrice] = useState('');
    const [subStartDate, setSubStartDate] = useState('');
    const [subEndDate, setSubEndDate] = useState('');
    const [subInterval, setSubInterval] = useState('');

    const auth = getAuth()


    const handleAddSub = async () => {

        const userRef = doc(database, "users", auth?.currentUser?.uid);

       await updateDoc(userRef, {
          subscriptions: arrayUnion({
            subName,
            subPrice,
            subStartDate,
            subEndDate,
            subInterval
        })
       })
        setOpen(false)
    }

    const handleSubNameChange = (e:any) => {
        setSubName(e.target.value)
    }
    const handleSubPriceChange = (e:any) => {
        setSubPrice(e.target.value)
    }
    const handleSubStartDateChange = (e:any) => {
        setSubStartDate(e.target.value)
    }
    const handleSubEndDateChange = (e:any) => {
        setSubEndDate(e.target.value)
    }
    const handleSubIntervalChange = (e:any) => {
        setSubInterval(e.target.value)
    }

    return (
        <>
        <div className='p-1 flex justify-between items-center'>
          <div className='text-3xl font-black'>Subscriptions</div>
          <button onClick={() => setOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
    
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Create a new subscription
                          </Dialog.Title>
                          <div className="mt-2">
                            <form className='w-full max-w-lg'>
                                <div className='flex flex-wrap -mx-3 mb-6'>
                                    {/* SubName */}
                                    <div className='w-full '>
                                        <label>Subscription Name</label>
                                        <input value={subName} onChange={handleSubNameChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Netflix" />
                                    </div>
                                    {/* Sub Price */}
                                    <div className='w-full '>
                                        <label>Price</label>
                                        <input value={subPrice} onChange={handleSubPriceChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="9.99" />
                                    </div>
                                    {/* Sub Start Date */}
                                    <div className='w-full '>
                                        <label>Start Date</label>
                                        <input value={subStartDate} onChange={handleSubStartDateChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Jan 01, 2023" />
                                    </div>
                                    {/* Sub End Date */}
                                    <div className='w-full '>
                                        <label>End Date</label>
                                        <input value={subEndDate} onChange={handleSubEndDateChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Jan 01, 2024" />
                                    </div>
                                  
                                      {/* Interval type */}
                                      <div className='w-full '>
                                        <label>Interval</label>
                                        <input value={subInterval} onChange={handleSubIntervalChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Monthly" />
                                    </div>
                                </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleAddSub}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        </>

      )
    }

export default Modal