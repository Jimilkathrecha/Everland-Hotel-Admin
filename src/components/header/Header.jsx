import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ setLoginmodalstate }) {
    return (
        <>
            <div className="w-[85%] p-3 mx-auto fixed top-[40px] z-50 start-50 translate-middle">
                <div className="col relative flex items-center justify-between border-2 border-red bs-red rounded-md p-1 h-full shadow-3">
                    <div className="w-fit">
                        <Link to="/" className="w-[130px] bs-white pointer absolute top-50 start-[80px] border-2 border-red rounded-md overflow-hidden translate-middle">
                            <img className='w-100 h-100 object-cover object-center px-2' src="./IMGS/Site-Logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex col items-center gap-3">
                            <div className="h-fit"><i className="fa-brands !m-0 !p-0 fs-5 tx-white fa-instagram"></i></div>
                            <div className="h-fit"><i className="fa-brands !m-0 !p-0 fs-5 tx-white fa-facebook"></i></div>
                            <div className="h-fit"><i className="fa-brands !m-0 !p-0 fs-5 tx-white fa-linkedin"></i></div>
                            <div className="h-fit"><i className="fa-brands !m-0 !p-0 fs-5 tx-white fa-square-twitter"></i></div>
                        </div>
                        <div className="bs-white border-[1.5px] rounded-full border-white py-[0.8rem]"></div>
                        {/* <div className="h-full"  onClick={() => setLoginmodalstate(true)}> */}
                        <div className="h-full" >
                            <p className='h-full border-2 border-red tx-red rounded-md bs-white font-bold px-3 fs-6 pointer'>Book Now </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
