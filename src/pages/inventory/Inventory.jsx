import { Button, Tooltip } from '@nextui-org/react';
import { max } from 'moment';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Inventory() {

    const [filtredAmenitiesType, setFiltredAmenitiesType] = useState("Bathroom");
    const [roomPriceDetailBox, setRoomPriceDetailBox] = useState(false);
    const [ActiveTabState, setActiveTabState] = useState(
        localStorage.getItem('Inventory page') || 'Inventory'
    );

    const handleRoomPriceDetailBox = () => {
        setRoomPriceDetailBox(prevCheck => !prevCheck);
    }
    // useEffect to update the localStorage whenever the state changes
    useEffect(() => {
        localStorage.setItem('Inventory page', ActiveTabState);
    }, [ActiveTabState]);


    const currentWeek = [
        { id: 1, dates: "30", day: "SAT", month: "Dec" },
        { id: 2, dates: "31", day: "SUN", month: "Dec" },
        { id: 3, dates: "01", day: "MON", month: "Jan" },
        { id: 4, dates: "02", day: "TUE", month: "Jan" },
        { id: 5, dates: "03", day: "WED", month: "Jan" },
        { id: 6, dates: "04", day: "THU", month: "Jan" },
        { id: 7, dates: "05", day: "FRI", month: "Jan" },
    ];



    return (
        <>
            <div className=" h-[100vh] w-[calc(100vw-0px)] flex flex-col items-start gap-3 rounded-lg">
                <div className="w-100 h-[50px] flex text-center border-l-2 border-b-2 shadow-1 border-red rounded-bl-lg">
                    <div className="flex gap-3 px-3">
                        <div onClick={() => setActiveTabState("Inventory")} className={`${ActiveTabState === "Inventory" ? "bs-red tx-white shadow-1" : ""}  pointer border-x-2 border-b-2 border-red py-1 px-5 h-fit rounded-b-md`}>
                            <p className='fs-6 font-bold'>Inventory</p>
                        </div>
                        {/* <div onClick={() => setActiveTabState("rooms-type")} className={`${ActiveTabState === "rooms-type" ? "bs-red tx-white shadow-1" : ""}  pointer border-x-2 border-b-2 border-red py-1 px-5 h-fit rounded-b-md`}>
                            <p className='fs-6 font-bold'>Add Room Type</p>
                        </div> */}
                    </div>
                </div>

                <div className="w-[calc(100vw-120px)] h-[calc(100vh-0px)] flex mx-auto text-center relative border-l-2 border-t-2 shadow-1 border-red rounded-tl-lg scroll-d-none overflow-y-scroll">
                    <div className="flex flex-col gap-3 h-fit w-100">

                        <div className="flex justify-between">
                            <div className="w-fit px-3 border-b-2 border-red rounded-bl-lg drop-shadow-md">
                                <p className='tx-red font-bold fs-3'>Manage Rates </p>
                            </div>
                            <div className="w-fit">

                            </div>
                        </div>
                        <form className='flex flex-col w-100 gap-4'>
                            <div className="w-100 flex flex-col gap-3 my-4 px-3">
                                <div className="w-100 flex p-3 gap-3 border-2 border-red rounded-md">
                                    <div className="min-w-[20%] max-w-[20%] flex items-center justify-center gap-2 ">
                                        <div className="flex w-100 gap-2 items-center h-fit w-fit">
                                            <i className="fa-duotone fa-bed-front tx-red"></i>
                                            <p className='tx-red font-bold fs-6'>Rooms & Rates</p>
                                        </div>
                                    </div>

                                    <div className="bs-red min-w-[2px] max-w-[2px] rounded-full relative " />
                                    <div className="w-[80%] flex flex-col gap-3">
                                        <div className="" >
                                            <div className="w-100 flex items-center gap-2 ">
                                                {currentWeek.map((item, index) => (
                                                    <>
                                                        <div key={item} className={`${item?.dates === "30" ? "bs-red shadow-1" : "border-dashed"}  tx-red border-2 border-red col pointer py-1 px-5 rounded`}>
                                                            <p className={`${item?.dates === "30" ? "tx-white" : "tx-red "}  fs-7 font-bold`}>{item?.day}</p>
                                                            <p className={`${item?.dates === "30" ? "tx-white" : "tx-red "} leading-4 fs-5 font-bold`}>{item?.dates}</p>
                                                            <p className={`${item?.dates === "30" ? "tx-white" : "tx-red "}  fs-7 font-bold`}>{item?.month}</p>
                                                        </div>
                                                    </>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* {availableroomlist.map((item, index) => ( */}
                                <div className="w-100 border-2 flex flex-col border-red rounded-md">

                                    <div className="w-100 flex p-3 gap-3">

                                        <div className="w-[20%] flex items-center justify-center gap-2 ">
                                            <div className="flex w-100 gap-2 items-center h-fit w-fit overflow-hidden">
                                                {!roomPriceDetailBox ?
                                                    <i className="fa-duotone fa-square-plus tx-red pointer" onClick={handleRoomPriceDetailBox}></i>
                                                    :
                                                    <i className="fa-duotone fa-rectangle-xmark tx-red pointer" onClick={handleRoomPriceDetailBox}></i>
                                                }
                                                <Tooltip content="CORPORATE SPECIAL ROOM - KING SIZE BED">
                                                    <p className='tx-red font-bold fs-7 text-ellipsis overflow-hidden whitespace-nowrap'>CORPORATE SPECIAL ROOM - KING SIZE BED</p>
                                                </Tooltip>
                                            </div>
                                        </div>
                                        <div className="bs-red min-w-[2px] max-w-[2px] rounded-full relative " />
                                        <div className="w-[80%] flex flex-col gap-3">
                                            <div className="" >
                                                <div className="w-100 flex items-center gap-2 ">
                                                    {currentWeek.map((item, index) => (
                                                        <>
                                                            <div key={item} className={`${item?.dates === "30" ? " shadow-1" : ""}  col tx-red border-2 border-red pointer py-1 rounded`}>
                                                                <input max={100} className={` max-w-[130px] text-center fs-4 font-bold focus-visible:outline-0 focus:border-0`}
                                                                    type="number" />
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {roomPriceDetailBox &&
                                        <>
                                            <div className="bs-red min-h-[2px] max-h-[2px] rounded-full relative " />
                                            <div className="flex flex-col duration-700 ease-in-out">
                                                <div className="w-100 flex px-3 gap-3">
                                                    <div className="min-w-[20%] max-w-[20%] pt-2 flex items-center justify-center gap-2 ">
                                                        <div className="flex w-100 gap-2 items-center h-fit w-fit overflow-hidden">
                                                            <i className="fa-duotone fa-bed-front tx-red"></i>
                                                            <Tooltip content="CORPORATE SPECIAL ROOM - KING SIZE BED">
                                                                <p className='tx-red font-bold fs-7 text-ellipsis overflow-hidden whitespace-nowrap'>Ep</p>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                    <div className="bs-red min-w-[1px] max-w-[1px] rounded-full relative " />
                                                    <div className="w-[80%] pt-2 flex flex-col gap-3">
                                                        <div className="" >
                                                            <div className="w-100 flex items-center gap-3 px-1 ">
                                                                {currentWeek.map((item, index) => (
                                                                    <>
                                                                        <div key={item} className={`${item?.dates === "30" ? "" : ""}  col tx-grey border-2 overflow-hidden border-x-red-500 pointer rounded`}>
                                                                            <input max={100} className={` max-w-[130px] text-center fs-5 font-semibold focus-visible:outline-0 focus:border-0`}
                                                                                type="number" />
                                                                        </div>
                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-100 flex px-3 gap-3">
                                                    <div className="min-w-[20%] max-w-[20%] py-2 flex items-center justify-center gap-2 ">
                                                        <div className="flex w-100 gap-2 items-center h-fit w-fit overflow-hidden">
                                                            {/* <i className="fa-duotone fa-bed-front tx-red"></i>
                      <Tooltip content="CORPORATE SPECIAL ROOM - KING SIZE BED">
                          <p className='tx-red font-bold fs-7 text-ellipsis overflow-hidden whitespace-nowrap'>Ep</p>
                      </Tooltip> */}
                                                        </div>
                                                    </div>
                                                    <div className="bs-red min-w-[1px] max-w-[1px] rounded-full relative " />
                                                    <div className="w-[80%] py-2 flex flex-col gap-3">
                                                        <div className="" >
                                                            <div className="w-100 flex items-center gap-3 px-1 ">
                                                                {currentWeek.map((item, index) => (
                                                                    <>
                                                                        <div key={item} className={`${item?.dates === "30" ? "" : ""}  col tx-grey border-2 overflow-hidden border-x-red-500 pointer rounded`}>
                                                                            <input max={100} className={` max-w-[130px] text-center fs-5 font-semibold focus-visible:outline-0 focus:border-0`}
                                                                                type="number" />
                                                                        </div>
                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    }
                                    {roomPriceDetailBox &&
                                        <>
                                            <div className="bs-red min-h-[2px] max-h-[2px] rounded-full relative " />
                                            <div className="flex flex-col duration-700 ease-in-out">
                                                <div className="w-100 flex px-3 gap-3">
                                                    <div className="min-w-[20%] max-w-[20%] pt-2 flex items-center justify-center gap-2 ">
                                                        <div className="flex w-100 gap-2 items-center h-fit w-fit overflow-hidden">
                                                            <i className="fa-duotone fa-bed-front tx-red"></i>
                                                            <Tooltip content="CORPORATE SPECIAL ROOM - KING SIZE BED">
                                                                <p className='tx-red font-bold fs-7 text-ellipsis overflow-hidden whitespace-nowrap'>Ep</p>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                    <div className="bs-red min-w-[1px] max-w-[1px] rounded-full relative " />
                                                    <div className="w-[80%] pt-2 flex flex-col gap-3">
                                                        <div className="" >
                                                            <div className="w-100 flex items-center gap-3 px-1 ">
                                                                {currentWeek.map((item, index) => (
                                                                    <>
                                                                        <div key={item} className={`${item?.dates === "30" ? "" : ""}  col tx-grey border-2 overflow-hidden border-x-red-500 pointer rounded`}>
                                                                            <input max={100} className={` max-w-[130px] text-center fs-5 font-semibold focus-visible:outline-0 focus:border-0`}
                                                                                type="number" />
                                                                        </div>
                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-100 flex px-3 gap-3">
                                                    <div className="min-w-[20%] max-w-[20%] py-2 flex items-center justify-center gap-2 ">
                                                        <div className="flex w-100 gap-2 items-center h-fit w-fit overflow-hidden">
                                                            {/* <i className="fa-duotone fa-bed-front tx-red"></i>
                                                                <Tooltip content="CORPORATE SPECIAL ROOM - KING SIZE BED">
                                                                    <p className='tx-red font-bold fs-7 text-ellipsis overflow-hidden whitespace-nowrap'>Ep</p>
                                                                </Tooltip> */}
                                                        </div>
                                                    </div>
                                                    <div className="bs-red min-w-[1px] max-w-[1px] rounded-full relative " />
                                                    <div className="w-[80%] py-2 flex flex-col gap-3">
                                                        <div className="" >
                                                            <div className="w-100 flex items-center gap-3 px-1 ">
                                                                {currentWeek.map((item, index) => (
                                                                    <>
                                                                        <div key={item} className={`${item?.dates === "30" ? "" : ""}  col tx-grey border-2 overflow-hidden border-x-red-500 pointer rounded`}>
                                                                            <input max={100} className={` max-w-[130px] text-center fs-5 font-semibold focus-visible:outline-0 focus:border-0`}
                                                                                type="number" />
                                                                        </div>
                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                                {/* ))} */}




                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
