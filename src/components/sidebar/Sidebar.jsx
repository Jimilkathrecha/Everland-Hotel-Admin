import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="h-[100vh] flex flex-col gap-3 rounded-lg ease-in duration-700">
                <div className="min-w-[100px] max-w-[100px] h-[calc(100vh-0px)] mx-auto text-center border-r-2 border-b-2 border-red shadow-1 rounded-br-lg scroll-d-none overflow-y-scroll  pb-5">
                    <div className="my-3">
                        <Link to="/home">
                            <div className="p-1">
                                <i className="fa-duotone fa-house fs-4 drop-shadow-md tx-red"></i>
                            </div>
                            <p className='fs-7 font-semibold'>Dashboard</p>
                        </Link>
                    </div>
                    <div className="my-3">
                        <Link to="/Rooms-List">
                            <div className="p-1"> 
                                <i className="fa-duotone fa-bed fs-4 drop-shadow-md tx-red"></i>
                            </div>
                            <p className='fs-7 font-semibold'>All Rooms</p>
                        </Link>
                    </div>
                    <div className="my-3">
                        <Link to="/Add-Rooms">
                            <div className="p-1"> 
                                <i className="fa-duotone fa-grid-2-plus fs-4 drop-shadow-md tx-red"></i>
                            </div>
                            <p className='fs-7 font-semibold m-0'>Add Room</p> 
                        </Link>
                    </div>
                    <div className="my-3">
                        <Link to="/appearance">
                            <div className="p-1"> 
                                <i className="fa-duotone fa-stars fs-4 drop-shadow-md tx-red"></i>
                            </div>
                            <p className='fs-7 font-semibold m-0'>Appearance</p>
                        </Link>
                    </div>
                    <div className="my-3">
                        <Link to="/approvedproperty">
                            <div className="p-1"> 
                                <i className="fa-duotone fa-gear fs-4 drop-shadow-md tx-red"></i>
                            </div>
                            <p className='fs-7 font-semibold m-0'>Setting</p> 
                        </Link>
                    </div>
                </div>
                <div className="min-w-[100px] max-w-[100px] min-h-[60px] max-h-[60px] border-t-2 border-r-2 border-red shadow-1 rounded-tr-lg ">
                    <Link to="/" className="w-100 h-100 mx-auto flex align-items-center justify-center p-2 overflow-hidden">
                        <i className="fa-solid fa-right-from-bracket mx-auto fs-4 drop-shadow-md tx-red"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}
