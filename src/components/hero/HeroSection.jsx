import moment from 'moment';
import Slider from 'react-slick'
import Select from 'react-select';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function HeroSection() {
    const [startdate, setStartDate] = useState(new Date());
    const [roomselector, setRoomselector] = useState(new Date());

    const [adultnum, setAdultNum] = useState(0);
    const [childrennum, setChildrenNum] = useState(0);
    const adultincNum = () => {
        if (adultnum < 10) {
            setAdultNum(Number(adultnum) + 1);
        }
    };
    const adultdecNum = () => {
        if (adultnum > 0) {
            setAdultNum(adultnum - 1);
        }
    }
    const adulthandleChange = (e) => {
        setAdultNum(e.target.value);
    }

    const childrenincNum = () => {
        if (childrennum < 10) {
            setChildrenNum(Number(childrennum) + 1);
        }
    };
    const childrendecNum = () => {
        if (childrennum > 0) {
            setChildrenNum(childrennum - 1);
        }
    }
    const childrenhandleChange = (e) => {
        setChildrenNum(e.target.value);
    }

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
    ];
    const sliderBanner = [
        { id: 1, imgs: "./hero/1.jpg" },
        { id: 2, imgs: "./hero/2.jpg" },
        { id: 3, imgs: "./hero/3.jpg" },
        { id: 3, imgs: "./hero/4.jpg" },
    ];
    const slidergallery = [
        { id: 1, imgs: "https://cdn1.goibibo.com/voy_ing/t_fs/a08f6930f87111e8b2f20242ac110002.jpg" },
        { id: 2, imgs: "https://cdn1.goibibo.com/voy_ing/t_fs/75cab56a592311eab6df0242ac110008.jpg" },
        { id: 3, imgs: "https://cdn1.goibibo.com/voy_mmt/t_fs/htl-imgs/201603100443453823-52bb77dafe8e11e883bf0242ac110006.jpg" },
        { id: 3, imgs: "https://cdn1.goibibo.com/voy_ing/t_g/e3d9647ab30811e7ab4102fd1436c6a2.jpg" },
        { id: 3, imgs: "https://cdn1.goibibo.com/gi_dyn/t_g/https://i.travelapi.com/lodging/2000000/1450000/1449400/1449369/4b2d66c2_z.jpg" },
        { id: 3, imgs: "https://img.freepik.com/free-photo/lovely-family-enjoying-new-year-party_23-2149173248.jpg?t=st=1703057828~exp=1703058428~hmac=316ca32dfe19b8097658bc47e71d94879db3eaecd9595a2a933bfbcaff9492a2" },
        { id: 3, imgs: "https://img.freepik.com/free-photo/couple-throwing-petals-air_23-2147596007.jpg?t=st=1703057879~exp=1703058479~hmac=614dcac561e05267f3496ecfccb6ec902f673cf95dc8960376e286cc447cade2" },
    ];
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
    const galleryslider = {
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        centerPadding: "100px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 3,
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
            <div className="w-100 h-[100vh] relative">
                <div className="h-[100vh] w-100 absolute top-0 start-0 -z-10 overflow-hidden">
                    <Slider {...heroslider} >
                        {sliderBanner.map((item) => (
                            <div key={item} className="col">
                                <img className='w-100 opacity-70' src={item.imgs} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="h-[100vh] w-[80%] mx-auto flex items-center px-5">
                    <div className="min-w-[450px] border-2 border-red blur-3 rounded-md w-fit h-fit px-3 py-2 overflow- relative">
                        <div className="absolute top-0 start-0 w-100 h-100 -z-10 bs-white opacity-50"></div>
                        <div className="">
                            <p className='tx-red text-center font-bold fs-4'>Book Your Villa</p>
                        </div>
                        <form action="col" className='py-2'>
                            <div className="flex w-100 gap-3">
                                <div className="input-container w-100 relative m-0">
                                    {/* <input placeholder="Enter text" className="input-field w-100" type="date" /> */}
                                    <DatePicker className='input-field' selected={startdate} minDate={moment().toDate()} onChange={(date) => setStartDate(date)} />
                                    <i className="fa-solid fa-calendar-days tx-red absolute top-50 end-0 translate-middle"></i>
                                    <span className="input-highlight"></span>
                                </div>
                                <div className="">
                                    <i className="fa-regular tx-red fa-right-left-large"></i>
                                </div>
                                <div className="input-container w-100 relative m-0">
                                    {/* <input placeholder="Enter text" className="input-field w-100" type="date" /> */}
                                    <DatePicker className='input-field' selected={startdate} minDate={moment().toDate()} onChange={(date) => setStartDate(date)} />
                                    <i className="fa-solid fa-calendar-days tx-red absolute top-50 end-0 translate-middle"></i>
                                    <span className="input-highlight"></span>
                                </div>
                            </div>
                            <div className="col mt-2">
                                <Select
                                    options={options} value={options.find(option => option.value === options) || options.find(option => option === options)}
                                    className="w-100 py-2 bs-transparent focus:outline-0" onChange={(roomnumber) => { setRoomselector("roomnumber", roomnumber); }}
                                />
                            </div>
                            <div className="flex items-center">
                                <div className="w-50">
                                    <p className='fs-6 text-center font-semibold tx-red'>Adults(12+ yr)</p>
                                    <div className="flex items-center shadow-1 w-fit mx-auto">
                                        <div className="px-3 rounded-l-md bs-red pointer" onClick={adultdecNum}>
                                            <i className="fa-solid fa-minus tx-white fs-6"></i>
                                        </div>
                                        <input type="text" className="font-semibold text-center min-w-[30px] !max-w-[30px]" value={adultnum} onChange={adulthandleChange} />
                                        <div className="px-3 rounded-r-md bs-red pointer" onClick={adultincNum}>
                                            <i className="fa-solid fa-plus tx-white fs-6"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <p className='fs-6 text-center font-semibold tx-red'>Children(0-12 yr)</p>
                                    <div className="flex items-center shadow-1 w-fit mx-auto">
                                        <div className="px-3 rounded-l-md bs-red pointer" onClick={childrendecNum}>
                                            <i className="fa-solid fa-minus tx-white fs-6"></i>
                                        </div>
                                        <input type="text" className="font-semibold text-center min-w-[30px] !max-w-[30px]" value={childrennum} onChange={childrenhandleChange} />
                                        <div className="px-3 rounded-r-md bs-red pointer" onClick={childrenincNum}>
                                            <i className="fa-solid fa-plus tx-white fs-6"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bs-transparent mt-4 border-2 border-red rounded-md pointer">
                                <Link to="/rooms" className='!m-0 !p-0'>
                                    <p className='tx-red text-center fs-6 py-1 font-bold'>Submit</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="w-100 absolute start-50 top-100 translate-middle">
                    <Slider {...galleryslider}>
                        {slidergallery.map((item) => (
                            <div key={item} className="mx-auto col py-3">
                                <div className="w-fit h-fit shdow-1 mx-auto">
                                    <img className='min-w-[170px] max-w-[170px] min-h-[170px] max-h-[170px] hover:border-[2.5px] hover:scale-[1.1] border-red p-2 hover:backdrop-blur-lg rounded-full object-cover object-center' src={item.imgs} alt="" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>



                




            </div>
        </>
    )
}
