import React from 'react'
import { Link } from 'react-router-dom';

export default function Booking() {
    return (
        <div className="h-[100vh] w-[calc(100vw-0px)] flex flex-col items-start gap-3 rounded-lg">
            <div className="w-100 h-[50px] flex items-center  text-center border-l-2 border-b-2 shadow-1 border-red rounded-bl-lg">

            </div>
            <div className="w-100 h-[calc(100vh-0px)] flex mx-auto text-center border-l-2 border-t-2 shadow-1 border-red rounded-tl-lg scroll-d-none overflow-y-scroll">
                <div className="flex flex-col gap-3 h-100 w-[100%]">
                    <div className="h-fit border-2  shadow-md shadow-red-100 ">
                        Guest Name\
                        Stay Duration\
                        Room & Meal Plan\
                        Booking ID\
                        Guest Contact\
                        Net Amount\
                        <div className="flex flex-col gap-3 p-4 ">
                            <div className="col flex gap-3 shadow-1 border-2 border-red p-2 rounded-md overflow-hidden">
                                <div className="w-[15%] p-1 flex flex-col">
                                    <div className="col">
                                        <img className='rounded-md shadow-md' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c" alt="" />
                                    </div>
                                </div>
                                <div className="bs-red col max-w-[1px] border-[1.5px] rounded-full border-red"></div>
                                <div className="col flex flex-col justify-between">
                                    <div className="flex col justify-between">
                                        <div className="col text-start">
                                            <p className='text-[1rem] font-bold '>1 Suiet Room | Double Size Bed</p>
                                            <div className="flex items-center gap-2 py-1 fs-7">
                                                <i className="fa-duotone fa-map-pin tx-red"></i>
                                                <p className='font-semibold'>Near Mumbai Airport</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className='px-2 bs-red fs-8 tx-white font-semibold rounded-lg'>Free Cancellation Till 24 Dec'23</p>
                                        </div>
                                    </div>
                                    <div className="flex col justify-between items-end">
                                        <div className="flex fs-7 items-center gap-2">
                                            <i className="fa-sharp fa-solid tx-green fa-badge-check"></i>
                                            <p className='font-semibold'>24-hour Room Service</p>
                                        </div>
                                        <div className="text-end px-1">
                                            <div className="flex justify-end py-1">
                                                <p className='w-fit m-0 fs-7 tx-white font-semibold rounded-md px-2 bs-red '>32% Off</p>
                                            </div>
                                            <p className='fs-6 font-bold fs-6'><span className='tx-red font-bold fs-7'>At only -</span> ₹5100</p>
                                            <p className='fs-6 font-bold fs-6'><span className='tx-red font-bold fs-7'>TAXES & FEES -</span> ₹1413 </p>
                                            <p className='fs-6 font-bold fs-6'><span className='tx-red font-bold fs-7'>Room per night -</span> 1</p>

                                            <Link to="/Room-Details" >
                                                <p className='tx-red border-2 border-red px-4 py-1 rounded-md fs-6 mt-3 font-bold'>Login for more details</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
