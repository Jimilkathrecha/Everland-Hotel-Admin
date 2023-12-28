import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function RoomDetails() {

    const heroslider = {
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        infinite: true,
        centerPadding: "100px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="w-100 flex flex-col justify-evenly my-[80px]">
                <div className="w-[80%] mx-auto flex gap-3">
                    <div className="flex flex-col gap-3 h-100 w-[100%]">
                        <div className="border-2 border-red shadow-md shadow-red-100 rounded-lg">
                            <div className="p-3">
                                <div className="col flex gap-3 rounded-md overflow-hidden">
                                    <div className="flex w-100 gap-2 justify-center mx-auto overflow-hidden">
                                        <Slider className='w-[70%] h-[400px] overflow-hidden' {...heroslider}>
                                            <div className='w-100 overflow-hidden'>
                                                <img className='w-100 h-[400px] rounded-lg object-cover object-center'
                                                    src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c" />
                                            </div>
                                        </Slider>
                                        <div className='min-w-[30%] max-w-[30%] overflow-hidden'>
                                            <Slider className='w-100 col overflow-hidden' {...heroslider}>
                                                <div className='w-100 overflow-hidden'>
                                                    <img className='w-100 h-[195px] rounded-lg col object-cover'
                                                        src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c"
                                                        alt=""
                                                    />
                                                </div>
                                            </Slider>
                                            <Slider className='w-100 col mt-1 overflow-hidden' {...heroslider}>
                                                <div className='w-100 overflow-hidden'>
                                                    <img className='w-100 h-[195px] rounded-lg col object-cover'
                                                        src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c"
                                                        alt=""
                                                    />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 flex gap-4 p-3">
                                    <div className="col rounded-lg ">
                                        <div className="">
                                            <div className="text-center">
                                                <p className='fs-5 font-bold tx-red'>Payable Amount</p>
                                            </div>
                                            <div className="flex justify-between gap-3 mt-3">
                                                <div className="">
                                                    <p className='fs-6 font-bold'>Price Starts At</p>
                                                </div>
                                                <div className="">
                                                    <p className='fs-6 font-bold'>6998</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between gap-3">
                                                <div className="">
                                                    <p className='fs-6 font-bold'>Taxes & Fees</p>
                                                </div>
                                                <div className="">
                                                    <p className='fs-6 font-bold'>+839</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between gap-3">
                                                <div className="">
                                                    <p className='fs-6 font-bold'>Room Per Night</p>
                                                </div>
                                                <div className="">
                                                    <p className='fs-6 font-bold'>1</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between gap-3">
                                                <div className="">
                                                    <p className='fs-6 font-bold'>Guests</p>
                                                </div>
                                                <div className="">
                                                    <p className='fs-6 font-bold'>x 2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bs-red min-w-[2px]"></div>
                                    <div className="col ">
                                        <div className="text-center">
                                            <p className='fs-5 font-bold tx-red'>Food & Dining</p>
                                        </div>
                                        <div className="flex gap-3 mt-3">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-sharp fa-solid fa-leaf tx-green"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Non-Vegetarian Not Aloud</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-1">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-sharp fa-solid fa-indian-rupee-sign tx-red"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Average meal cost for 1: ₹ 200</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-1">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-solid fa-plate-utensils tx-red"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Cuisines: North Indian, South Indian, Chinese</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-1">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-solid fa-salad tx-red"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Breakfast 7:30 AM - 10:15 AM | Lunch 12 PM - 3 PM | Dinner 8 PM - 10 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bs-red min-w-[2px]"></div>
                                    <div className="col ">
                                        <div className="text-">
                                            <p className='fs-5 font-bold tx-red'>Property Policies</p>
                                        </div>
                                        <div className="flex gap-3 mt-3">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-solid fa-badge-check tx-green"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Unmarried couples allowed</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-1">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-solid fa-badge-check tx-green"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Local ids are allowed</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-1">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-solid fa-badge-check tx-green"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Meal for One Guest is available</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-1">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-solid fa-circle-exclamation tx-yellow"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-1">
                                            <div className="min-w-[30px] max-w-[30px] py-1 flex justify-center">
                                                <i className="fa-solid fa-circle-xmark tx-red"></i>
                                            </div>
                                            <div className="">
                                                <p className='fs-6 font-bold'>Guests below 18 years of age are not allowed at the property.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bs-red mx-auto rounded-lg max-w-[80%] min-h-[2px]"></div>

                                <div className="w-100 my-4">
                                    <div className="flex justify-center gap-4">
                                        <div className="w-[30%]">
                                            <div className="text-center">
                                                <p className='fs-5 font-bold tx-red'>Guest Information</p>
                                            </div>
                                            <form>
                                                <div className="col mt-3">
                                                    <input
                                                        className={`form-control`}
                                                        placeholder="Enter Your Full Name"
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                    />
                                                </div>
                                                <div className="col flex gap-3 mt-3">
                                                    <div className="col">
                                                        <input
                                                            className={`form-control`}
                                                            placeholder="Enter Your E-mail"
                                                            type="text"
                                                            name="email"
                                                            id="email"
                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <input
                                                            className={`form-control`}
                                                            placeholder="Enter Your Number"
                                                            type="text"
                                                            name="email"
                                                            id="email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-3 col">
                                                    <textarea
                                                        type="text"
                                                        name="password"
                                                        id="password"
                                                        className={`form-control  ? "border-red" : "" }`}
                                                        placeholder="Any Requests"
                                                    />
                                                </div>
                                                <div className="text-center my-4">
                                                    <button type="submit" className="border-2 border-red rounded-md tx-red font-bold px-4 py-1 fs-6">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="bs-red min-w-[2px]"></div>
                                        <div className="w-[30%] px-2">
                                            <div className="flex w-100 border-b-2 py-2 border-red">
                                                <div className="w-50 px-2 border-r-2  border- border-red">
                                                    <p className='fs-6 tx-red font-bold'>Check In</p>
                                                    <p className='fs-7 font-bold'>25 Dec '23, Mon</p>
                                                </div>
                                                <div className="w-50 px-3">
                                                    <p className='fs-6 tx-red font-bold'>Check In</p>
                                                    <p className='fs-7 font-bold'>26 Dec '23, Tue</p>
                                                </div>
                                            </div>

                                            <div className="p-2 border-b-2 border-red">
                                                <div className="flex justify-between">
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>No of nights </p>
                                                    </div>
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>1 Night</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>Room </p>
                                                    </div>
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>Kothi</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>Sub Total </p>
                                                    </div>
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>₹ 12,000</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>Taxes and Fees </p>
                                                    </div>
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>₹ 1500</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-2">
                                                <div className="flex justify-between">
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>Grand Total </p>
                                                    </div>
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>₹ 13,500</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>Pay Now </p>
                                                    </div>
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>₹ 13,500</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'>Balance (Pay Later) </p>
                                                    </div>
                                                    <div className="">
                                                        <p className='fs-6 font-semibold'> ₹ 0</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
