import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment';
import Slider from 'react-slick';
import Horizontalscroll from '../../components/Horizontalscroll';

export default function AddRoom() {
    const [startdate, setStartDate] = useState(new Date());
    const [roomselector, setRoomselector] = useState(new Date());

    const preViewImgSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

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
    const RoomTypes = [
        { value: 'Deluxe', label: 'Deluxe' },
        { value: 'Standard', label: 'Standard' },
        { value: 'Luxury', label: 'Luxury' },
        { value: 'Master', label: 'Master' },
        { value: 'Common', label: 'Common' },
        { value: 'Tent', label: 'Tent' },
        { value: 'Family Room', label: 'Family Room' },
        { value: 'Water Villa', label: 'Water Villa' },
        { value: 'Beach Villa', label: 'Beach Villa' },
        { value: 'For Honeymooners', label: 'For Honeymooners' },
        { value: 'Garden Villa', label: 'Garden Villa' },
        { value: 'other', label: 'other' },
    ];
    const RoomView = [
        { value: 'No View', label: 'No View' },
        { value: 'Sea View', label: 'Sea View' },
        { value: 'Valley View', label: 'Valley View' },
        { value: 'Hill View', label: 'Hill View' },
        { value: 'Pool View', label: 'Pool View' },
        { value: 'Garden View', label: 'Garden View' },
        { value: 'River View', label: 'River View' },
        { value: 'Lake View', label: 'Lake View' },
        { value: 'Palace View', label: 'Palace View' },
        { value: 'Bay View', label: 'Bay View' },
        { value: 'Jungle View', label: 'Jungle View' },
        { value: 'City View', label: 'City View' },
        { value: 'Landmark View', label: 'Landmark View' },
        { value: 'Terrace View', label: 'Terrace View' },
        { value: 'Courtyard View', label: 'Courtyard View' },
        { value: 'Desert View', label: 'Desert View' },
        { value: 'Golf Course View', label: 'Golf Course View' },
        { value: 'Mountain View', label: 'Mountain View' },
        { value: 'Ocean View', label: 'Ocean View' },
        { value: 'Backwater View', label: 'Backwater View' },
        { value: 'Resort View', label: 'Resort View' },
        { value: 'Monument View', label: 'Monument View' },
        { value: 'Park View', label: 'Park View' },
        { value: 'Lagoon View', label: 'Lagoon View' },
        { value: 'Forest View', label: 'Forest View' },
        { value: 'Beach View', label: 'Beach View' },
        { value: 'Airport View', label: 'Airport View' },
        { value: 'Countryside View', label: 'Countryside View' },
        { value: 'Harbor View', label: 'Harbor View' },
        { value: 'Inter-coastal View', label: 'Inter-coastal View' },
        { value: 'Marina View', label: 'Marina View' },
    ];

    const BedType = [
        { value: 'Twin Bed', label: 'Twin Bed' },
        { value: 'King Bed', label: 'King Bed' },
        { value: 'Queen Bed', label: 'Queen Bed' },
        { value: 'Double Bed', label: 'Double Bed' },
        { value: 'Single Bed', label: 'Single Bed' },
        { value: 'Sofa Bed', label: 'Sofa Bed' },
        { value: 'Standard Bed', label: 'Standard Bed' },
        { value: '1 King bed or 2 Twin Bed(s)', label: '1 King bed or 2 Twin Bed(s)' },
        { value: '1 Queen bed or 2 Twin Bed(s)', label: '1 Queen bed or 2 Twin Bed(s)' }, 
        { value: '1 Double bed or 2 Twin Bed(s)', label: '1 Double bed or 2 Twin Bed(s)' },
        { value: 'Bunk Bed', label: 'Bunk Bed' },
        { value: 'Futon', label: 'Futon' },
        { value: 'Murphy', label: 'Murphy' },
        { value: 'Tatami Mats', label: 'Tatami Mats' }, 
    ];










    // const [toggleState, setToggleState] = useState("rooms");


    // useEffect(() => {
    //     localStorage.setItem('Toggle state', toggleState);
    // }, [toggleState])



    const [toggleState, setToggleState] = useState(
        localStorage.getItem('Room Detail page') || 'rooms-type'
    );

    // useEffect to update the localStorage whenever the state changes
    useEffect(() => {
        localStorage.setItem('Room Detail page', toggleState);
    }, [toggleState]);


    const [coverSelectedImages, setCoverSelectedImages] = useState([]);
    console.log("🚀 ~ file: AddRoom.jsx:80 ~ AddRoom ~ coverSelectedImages:", coverSelectedImages.length)
    const [genralSelectedImages, setGenralSelectedImages] = useState([]);

    const coverImageFile = (e) => {
        const selectedFile = e.target.files;
        const selectedFileArray = Array.from(selectedFile);

        const imagesArray = selectedFileArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setCoverSelectedImages((previousImgs) => previousImgs.concat(imagesArray));
    }

    const getAllImageFile = (e) => {
        const selectedFile = e.target.files;
        const selectedFileArray = Array.from(selectedFile);

        const imagesArray = selectedFileArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setGenralSelectedImages((previousImgs) => previousImgs.concat(imagesArray));
    }



    return (
        <>
            <div className=" h-[100vh] w-[calc(100vw-0px)] flex flex-col items-start gap-3 rounded-lg">
                <div className="w-100 h-[50px] flex  text-center border-l-2 border-b-2 shadow-1 border-red rounded-bl-lg">
                    <div className="flex gap-3 px-3">
                        <div onClick={() => setToggleState("rooms")} className={`${toggleState === "rooms" ? "bs-red tx-white shadow-1" : ""}  pointer border-x-2 border-b-2 border-red py-1 px-5 h-fit rounded-b-md`}>
                            <p className='fs-6 font-bold'>Add Room</p>
                        </div>
                        <div onClick={() => setToggleState("rooms-type")} className={`${toggleState === "rooms-type" ? "bs-red tx-white shadow-1" : ""}  pointer border-x-2 border-b-2 border-red py-1 px-5 h-fit rounded-b-md`}>
                            <p className='fs-6 font-bold'>Add Room Type</p>
                        </div>
                    </div>
                </div>


                <div className="w-100 h-[calc(100vh-0px)] flex mx-auto text-center border-l-2 border-t-2 shadow-1 border-red rounded-tl-lg scroll-d-none overflow-y-scroll">
                    {toggleState === "rooms" &&
                        <div className="flex flex-col gap-3 h-fit w-100">
                            <div className="w-fit px-3 border-b-2 border-red rounded-bl-lg drop-shadow-md">
                                <p className='tx-red font-bold fs-3'>Add Room details</p>
                            </div>
                            <form className='flex flex-col w-100 gap-4  px-4'>
                                <div className="w-100">
                                    <div className="flex items-center gap-3">
                                        <div className="">
                                            {coverSelectedImages.length === 0 ?
                                                <label htmlFor="coverphoto" className="relative border-3 shadow-1 border-dashed rounded-lg border-red w-fit px-[90px] py-[80px]">
                                                    <input className='hidden' onChange={coverImageFile} type="file" id="coverphoto" name="coverphoto" />
                                                    <p className='bs-red tx-white absolute top-0 start-50 translate-middle-x whitespace-nowrap px-3 fs-7 rounded-b-lg font-bold'>Cover Photo </p>
                                                    <i className="fa-solid fa-plus tx-red"></i>
                                                </label>
                                                :
                                                <div className="w-fit h-fit ">
                                                    {coverSelectedImages && coverSelectedImages.map((image, index) => {
                                                        return (
                                                            <div key={index} className="relative rounded-md shadow-1 w-fit h-fit m-3">
                                                                <div className="hover:!opacity-75 duration-300 ease-in-out h-100 w-100 bs-red opacity-0 rounded-md absolute z-0 tx-white flex items-center justify-center fs-3 font-bold">Cover Img</div>
                                                                <img className=' min-w-[190px] max-w-[190px] min-h-[190px] max-h-[190px] rounded-md object-cover' src={image} alt="" />
                                                                <div className="absolute pointer z-10 top-0 start-100 translate-middle" onClick={() => setCoverSelectedImages(coverSelectedImages.filter((e) => e !== image))}>
                                                                    <i class="fa-solid fa-trash tx-red"></i>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            }
                                        </div>
                                        <div className="">
                                            <label htmlFor="roommultiplephoto" className="relative border-3 shadow-1 border-dashed rounded-lg border-red w-fit px-[90px] py-[80px]">
                                                <input className='hidden' onChange={getAllImageFile} type="file" id="roommultiplephoto" name="roommultiplephoto" multiple />
                                                <p className='bs-red tx-white absolute top-0 start-50 translate-middle-x whitespace-nowrap px-3 fs-7 rounded-b-lg font-bold'>Only 3 Photo </p>
                                                <i className="fa-solid fa-plus tx-red"></i>
                                            </label>
                                        </div>
                                        {/* <div className="min-w-[200px] max-w-[200px] h-[200px]">
                                            <Slider {...preViewImgSlider}>
                                            </Slider>
                                        </div> */}
                                        {/* <div className="flex col overflow-x-scroll scroll-d-none gap-3 me-5 pe-5"> */}
                                        <Horizontalscroll sensitivity={80}>
                                            <div className="flex w-fit me-5 pe-5 gap-3 relative">
                                                {genralSelectedImages && genralSelectedImages.map((image, index) => {
                                                    return (
                                                        <div key={index} className="relative rounded-md shadow-1 w-100 h-100 m-3 flex items-center justify-center">
                                                            <div className="hover:!opacity-75 duration-300 ease-in-out h-100 w-100 bs-red opacity-0 rounded-md absolute z-0 tx-white flex items-center justify-center fs-1 font-bold">{index + 1}</div>
                                                            <img className=' min-w-[190px] max-w-[190px] min-h-[190px] max-h-[190px] rounded-md object-cover tx-red fs-6 font-bold text-center' src={image} alt="Not Supported File" />
                                                            <div className="absolute pointer z-10 top-0 start-100 translate-middle" onClick={() => setGenralSelectedImages(genralSelectedImages.filter((e) => e !== image))}>
                                                                <i class="fa-solid fa-trash tx-red"></i>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </Horizontalscroll>
                                        {/* </div> */}
                                    </div>
                                    {genralSelectedImages.length > 0 &&
                                        (genralSelectedImages.length && (
                                            <>
                                                <p className={`${genralSelectedImages.length <= 3 ? "opacity-0" : "opacity-100"}  bs-red fs-7 py-1 px-4 duration-700 ease-in-out w-fit font-bold tx-white`}>{genralSelectedImages.length >= 3 && <span>Delete {genralSelectedImages.length - 3} Imgs From List Max Limit Is Only 3</span>}</p>
                                            </>
                                        ))
                                    }
                                </div>

                                <div className="bs-red col rounded-full min-h-[2px] max-h-[2px]"></div>

                                <div className="col-2 relative drop-shadow-md">
                                    <Select placeholder="Select Rooms Type"
                                        options={RoomTypes} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                        className="w-100 absolute z-30 border-red border-2 rounded bs-transparent focus:outline-0" onChange={(roomnumber) => { setRoomselector("roomnumber", roomnumber); }}
                                    />
                                </div>
                                <div className="col-2 relative drop-shadow-md">
                                    <Select placeholder="Select Rooms View"
                                        options={RoomView} value={RoomView.find(option => option.value === RoomView) || RoomView.find(option => option === RoomView)}
                                        className="w-100 absolute z-20 border-red border-2 rounded bs-transparent focus:outline-0" onChange={(roomnumber) => { setRoomselector("roomnumber", roomnumber); }}
                                    />
                                </div>
                                <div className="col-2 relative drop-shadow-md">
                                    <Select placeholder="Select Bed Type"
                                        options={BedType} value={BedType.find(option => option.value === BedType) || BedType.find(option => option === BedType)}
                                        className="w-100 absolute z-10 border-red border-2 rounded bs-transparent focus:outline-0" onChange={(roomnumber) => { setRoomselector("roomnumber", roomnumber); }}
                                    />
                                </div>
                                <div className="drop-shadow-md  border-red border-2 rounded w-fit h-fit overflow-hidden relative m-0">
                                    <input className=' px-2 py-1' placeholder='Total Rooms' type='number' /> 
                                </div>

                                <div className="input-container drop-shadow-sm w-fit h-fit relative m-0">
                                    <input className='input-field px-2 py-1' placeholder='Display Name' type='text' />
                                    <span className="input-highlight"></span>
                                </div>



                                <div className="bs-transparent h-fit border-2 border-red rounded-md pointer">
                                    <Link to="/rooms" className='!m-0 !p-0'>
                                        <p className='tx-red text-center fs-6 py-1 px-5 font-bold'>Find</p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    }

                    {toggleState === "rooms-type" &&
                        <div className="flex flex-col gap-3 h-fit w-100">
                            <div className="">
                                <p className='tx-red font-bold fs-3'>Add Room Type</p>
                            </div>
                            <form className='flex w-100 px-4 gap-4 '>

                                <div className="h-fit border-2 border-red rounded-md p-3">
                                    <div className="flex flex-col gap-3">

                                        <div className="">
                                            {coverSelectedImages.length === 0 ?
                                                <label htmlFor="coverphoto" className="relative border-3 shadow-1 border-dashed rounded-lg border-red w-fit px-[90px] py-[80px]">
                                                    <input className='hidden' onChange={coverImageFile} type="file" id="coverphoto" name="coverphoto" />
                                                    <p className='bs-red tx-white absolute top-0 start-50 translate-middle-x whitespace-nowrap px-3 fs-7 rounded-b font-bold'>Cover Photo </p>
                                                    <i className="fa-solid fa-plus tx-red"></i>
                                                </label>
                                                :
                                                <div className="w-fit h-fit ">
                                                    {coverSelectedImages && coverSelectedImages.map((image, index) => {
                                                        return (
                                                            <div key={index} className="relative rounded-md shadow-1 w-fit h-fit m-3">
                                                                <div className="hover:!opacity-75 duration-300 ease-in-out h-100 w-100 bs-red opacity-0 rounded-md absolute z-0 tx-white flex items-center justify-center fs-3 font-bold">Cover Img</div>
                                                                <img className=' min-w-[190px] max-w-[190px] min-h-[190px] max-h-[190px] rounded-md object-cover' src={image} alt="" />
                                                                <div className="absolute pointer z-10 top-0 start-100 translate-middle" onClick={() => setCoverSelectedImages(coverSelectedImages.filter((e) => e !== image))}>
                                                                    <i class="fa-solid fa-trash tx-red"></i>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            }
                                        </div>
                                        <div className="input-container drop-shadow-sm w-100 h-fit relative m-0">
                                            <input className='input-field px-2' placeholder='Add Room Category Name' type='text' />
                                            <span className="input-highlight"></span>
                                        </div>
                                        <div className="input-container drop-shadow-sm w-100 h-fit relative m-0">
                                            <input className='input-field px-2' placeholder='Total Available Rooms' type='number' />
                                            <span className="input-highlight"></span>
                                        </div>
                                    </div>

                                    <Link to="/rooms" className=''>
                                        <div className="border-2 border-red mt-3 rounded-md">
                                            <p className='tx-red text-center fs-6 py-1 px-5 font-bold'>Add</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="bs-red min-w-[2px] rounded-full h-[calc(100vh-150px)]"></div>


                                <div className="h-[calc(100vh-150px)] w-100 bg-[#ffcaca63] shadow-1 rounded-lg overflow-hidden overflow-y-scroll scroll-d-none">
                                    <div className="h-fit flex flex-col gap-3 p-3">
                                        <div className="flex border-2 bs-white gap-4 py-3 px-3 border-red rounded-md">
                                            <div className="min-w-[150px] max-w-[150px] min-h-[150px] max-h-[150px] rounded-md overflow-hidden shadow-md">
                                                <img className='h-100 w-100 object-cover object-center' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c" alt="" />
                                            </div>
                                            <div className="bs-red min-w-[2px] max-w-[2px] rounded-full col"></div>

                                            <div className="">
                                                <p>hello</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    }
                </div >
            </div >
        </>
    )
}
