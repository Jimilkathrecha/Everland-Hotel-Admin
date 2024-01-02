import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment';
import Slider from 'react-slick';
import Horizontalscroll from '../../components/Horizontalscroll';


export default function AddRoom() {
    const [startdate, setStartDate] = useState(new Date());
    const [coverSelectedImages, setCoverSelectedImages] = useState([]);

    const [genralSelectedImages, setGenralSelectedImages] = useState([]);
    const [ActiveTabState, setActiveTabState] = useState(
        localStorage.getItem('Room Detail page')
    );
    const [filtredAmenitiesType, setFiltredAmenitiesType] = useState("Bathroom");


    const [selectedBedType, setSelectedBedType] = useState();
    const [selectedRoomView, setSelectedRoomView] = useState();
    const [selectedRoomTypes, SelectedsetRoomTypes] = useState();
    console.log("🚀 ~ file: AddRoom.jsx:28 ~ AddRoom ~ selectedBedType:", selectedBedType)
    console.log("🚀 ~ file: AddRoom.jsx:24 ~ AddRoom ~ selectedRoomView:", selectedRoomView)
    console.log("🚀 ~ file: AddRoom.jsx:26 ~ AddRoom ~ selectedRoomTypes:", selectedRoomTypes)





    const selectedRoomViewHandler = (e) => {
        const data = e.target.value
        setSelectedRoomView(data)
    }
    const selectedRoomTypesHandler = (e) => {
        SelectedsetRoomTypes(e.target.value)
    }
    const selectedBedTypeHandler = (e) => {
        setSelectedBedType(e.target.value)
    }





    const [adultnum, setAdultNum] = useState(1);
    const [maxadultnum, setmaxadultNum] = useState(1);

    const [addRoomData, setAddRoomData] = useState({
        email: "",
        password: "",

        emailError: "",
        passwordError: "",
    })


    const validateInput = (name, value) => {
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address';
            }
        } else if (name === 'password') {
            const passwordRegex = /.{8,}/;
            if (!passwordRegex.test(value)) {
                return 'Password must be at least 8 characters long';
            }
        }
        return '';
    };

    const handleChangeLoginData = (e) => {
        const { name, value } = e.target;
        setAddRoomData((prevData) => ({
            ...prevData,
            [name]: value,
            [`${name}Error`]: validateInput(name, value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailError = validateInput('email', addRoomData.email);
        const passwordError = validateInput('password', addRoomData.password);

        setAddRoomData((prevData) => ({
            ...prevData,
            emailError,
            passwordError,
        }));

        if (!emailError && !passwordError) {
            // setAddRoomData({ email: "", password: "" })
            Navigate('/home')
        }
    };




    const preViewImgSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const adultincNum = () => {
        // if (adultnum < 1) {
        setAdultNum(Number(adultnum) + 1);
        // }
    };
    const adultdecNum = () => {
        if (adultnum > 1) {
            setAdultNum(adultnum - 1);
        }
    }
    const adulthandleChange = (e) => {
        setAdultNum(e.target.value);
    }
    const maxadultincNum = () => {
        // if (maxadultnum < 5) {
        setmaxadultNum(Number(maxadultnum) + 1);
        // }
    };
    const maxadultdecNum = () => {
        if (maxadultnum > 1) {
            setmaxadultNum(maxadultnum - 1);
        }
    }
    const maxadulthandleChange = (e) => {
        setmaxadultNum(e.target.value);
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
    const amenities = [
        { id: 1, amenitiesname: 'Bathroom', amenitiesType: "Bathroom" },
        { id: 2, amenitiesname: "Features", amenitiesType: 'Room Features' },
        { id: 3, amenitiesname: "Entertainment", amenitiesType: 'Media and Entertainment' },
        { id: 4, amenitiesname: "hh", amenitiesType: 'Food and Drinks' },
        { id: 5, amenitiesname: "hh", amenitiesType: 'Kitchen and Appliances' },
        { id: 6, amenitiesname: "hh", amenitiesType: 'Beds and Blanket' },
        { id: 7, amenitiesname: "hh", amenitiesType: 'Safety and Security' },
        { id: 8, amenitiesname: "hh", amenitiesType: 'Childcare' },
        { id: 9, amenitiesname: "hh", amenitiesType: 'Other Facilities' },
    ];

    const filteredAmenitiesData = amenities.filter(type => type.amenitiesType === filtredAmenitiesType)

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

    // useEffect to update the localStorage whenever the state changes
    useEffect(() => {
        localStorage.setItem('Room Detail page', ActiveTabState);
    }, [ActiveTabState]);



    return (
        <>
            <div className=" h-[100vh] w-[calc(100vw-0px)] flex flex-col items-start gap-3 rounded-lg">
                <div className="w-100 h-[50px] flex text-center border-l-2 border-b-2 shadow-1 border-red rounded-bl-lg">
                    <div className="flex gap-3 px-3">
                        <div onClick={() => setActiveTabState("rooms")} className={`${ActiveTabState === "rooms" ? "bs-red tx-white shadow-1" : ""}  pointer border-x-2 border-b-2 border-red py-1 px-5 h-fit rounded-b-md`}>
                            <p className='fs-6 font-bold'>Add Room</p>
                        </div>
                        <div onClick={() => setActiveTabState("rooms-type")} className={`${ActiveTabState === "rooms-type" ? "bs-red tx-white shadow-1" : ""}  pointer border-x-2 border-b-2 border-red py-1 px-5 h-fit rounded-b-md`}>
                            <p className='fs-6 font-bold'>Add Room Type</p>
                        </div>
                    </div>
                </div>

                <div className="w-[calc(100vw-120px)] h-[calc(100vh-0px)] flex mx-auto text-center relative border-l-2 border-t-2 shadow-1 border-red rounded-tl-lg scroll-d-none overflow-y-scroll">
                    {ActiveTabState === "rooms" &&
                        <div className="flex flex-col gap-3 h-fit w-100">
                            <div className="w-fit px-3 border-b-2 border-red rounded-bl-lg drop-shadow-md">
                                <p className='tx-red font-bold fs-3'>Add Room details</p>
                            </div>

                            <form className='flex flex-col w-100 gap-4'>
                                <div className="w-100 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="">
                                            {coverSelectedImages.length === 0 ?
                                                <label htmlFor="coverphoto" className="relative pointer border-3 shadow-1 border-dashed rounded-lg border-red w-fit px-[90px] py-[80px]">
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
                                                                    <i className="fa-solid fa-trash tx-red"></i>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            }
                                        </div>
                                        <div className="">
                                            <label htmlFor="roommultiplephoto" className="relative pointer border-3 shadow-1 border-dashed rounded-lg border-red w-fit px-[90px] py-[80px]">
                                                <input className='hidden' onChange={getAllImageFile} type="file" id="roommultiplephoto" name="roommultiplephoto" multiple />
                                                <p className='bs-red tx-white absolute top-0 start-50 translate-middle-x whitespace-nowrap px-3 fs-7 rounded-b-lg font-bold'>Only 3 Photo </p>
                                                <i className="fa-solid fa-plus tx-red"></i>
                                            </label>
                                        </div> 
                                        <Horizontalscroll sensitivity={80}>
                                            <div className="flex col w-fit me-5 pe-5 gap-3 relative">
                                                {genralSelectedImages && genralSelectedImages.map((image, index) => {
                                                    return (
                                                        <div key={index} className="relative rounded-md shadow-1 w-100 h-100 m-3 flex items-center justify-center">
                                                            <div className="hover:!opacity-75 duration-300 ease-in-out h-100 w-100 bs-red opacity-0 rounded-md absolute z-0 tx-white flex items-center justify-center fs-1 font-bold">{index + 1}</div>
                                                            <img className=' min-w-[190px] max-w-[190px] min-h-[190px] max-h-[190px] rounded-md object-cover tx-red fs-6 font-bold text-center' src={image} alt="Not Supported File" />
                                                            <div className="absolute pointer z-10 top-0 start-100 translate-middle" onClick={() => setGenralSelectedImages(genralSelectedImages.filter((e) => e !== image))}>
                                                                <i className="fa-solid fa-trash tx-red"></i>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </Horizontalscroll>
                                    </div>
                                </div>
                                {genralSelectedImages.length > 0 &&
                                    (genralSelectedImages.length && (
                                        <>
                                            <p className={`${genralSelectedImages.length <= 3 ? "opacity-0" : "opacity-100"}  bs-red fs-7 py-1 px-4 duration-700 ease-in-out w-fit font-bold tx-white`}>{genralSelectedImages.length >= 3 && <span>Delete {genralSelectedImages.length - 3} Imgs From List Max Limit Is Only 3</span>}</p>
                                        </>
                                    ))
                                }

                                <div className="bs-red w-50 rounded-full relative min-h-[2px] max-h-[2px]">
                                    <span className='bs-red tx-white fs-5 font-bold absolute top-50 -mt-[1px] start-100 translate-middle-x rounded-b-lg float-right px-3 text-center'>Occupancy</span>
                                </div>

                                <div className="flex px-4 my-4 gap-3">
                                    <div className="flex flex-col col-2 gap-3">
                                        <div className="drop-shadow-md border-red border-2 rounded h-fit overflow-hidden m-0">
                                            <input className='w-100 px-2 py-1 focus:!outline-none' placeholder='Total Rooms' type='number' />
                                        </div>

                                        <div className="relative z-30 drop-shadow-md">
                                            <Select placeholder="Select Rooms Type"
                                                options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                className="w-100 border-red border-2 rounded bs-transparent focus:outline-0"
                                            />
                                            {console.log("🚀 ~ file: AddRoom.jsx:337 ~ AddRoom ~ RoomTypes:", RoomTypes)}
                                        </div>
                                        <div className="relative z-20 drop-shadow-md">
                                            <Select placeholder="Select Rooms View"
                                                options={RoomView} onChange={selectedRoomTypesHandler} value={RoomView.find(option => option.value === RoomView) || RoomView.find(option => option === RoomView)}
                                                className="w-100 border-red border-2 rounded bs-transparent focus:outline-0"
                                            />
                                        </div>
                                        <div className="relative z-10 drop-shadow-md">
                                            <Select placeholder="Select Bed Type"
                                                options={BedType} onChange={selectedBedTypeHandler} value={BedType.find(option => option.value === BedType) || BedType.find(option => option === BedType)}
                                                className="w-100 border-red border-2 rounded bs-transparent focus:outline-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="col flex flex-col justify-between">
                                        <div className="w-100 flex justify- items-center h-fit gap-5">
                                            <div className="">
                                                <p className='w-fit fs-6 text-center font-semibold tx-red'>Dimensions(Sq.ft)</p>
                                                <div className="flex gap-3">
                                                    <div className="drop-shadow-md border-red border-2 rounded h-fit overflow-hidden m-0">
                                                        <input className='w-100 px-2 py-1 focus:!outline-none' placeholder='Length' type='number' />
                                                    </div>

                                                    <div className="drop-shadow-md border-red border-2 rounded h-fit overflow-hidden m-0">
                                                        <input className='w-100 px-2 py-1 focus:!outline-none' placeholder='Breadth' type='number' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-5 col justify-center items-center">
                                                <div className="">
                                                    <p className='fs-6 text-center font-semibold tx-red'>Base Adults(12+ yr)</p>
                                                    <div className="flex items-center rounded-md shadow-1 w-fit h-fit mx-auto">
                                                        <div className="px-3 rounded-l-md bs-red pointer" onClick={adultdecNum}>
                                                            <i className="fa-solid fa-minus tx-white fs-6"></i>
                                                        </div>
                                                        <input type="text" className="font-semibold text-center min-w-[30px] !max-w-[30px]" value={adultnum} onChange={adulthandleChange} />
                                                        <div className="px-3 rounded-r-md bs-red pointer" onClick={adultincNum}>
                                                            <i className="fa-solid fa-plus tx-white fs-6"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <p className='fs-6 text-center font-semibold tx-red'>Max Adults</p>
                                                    <div className="flex items-center rounded-md shadow-1 w-fit h-fit mx-auto">
                                                        <div className="px-3 rounded-l-md bs-red pointer" onClick={maxadultdecNum}>
                                                            <i className="fa-solid fa-minus tx-white fs-6"></i>
                                                        </div>
                                                        <input type="text" className="font-semibold text-center min-w-[30px] !max-w-[30px]" value={maxadultnum} onChange={maxadulthandleChange} />
                                                        <div className="px-3 rounded-r-md bs-red pointer" onClick={maxadultincNum}>
                                                            <i className="fa-solid fa-plus tx-white fs-6"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="drop-shadow-md h-fit overflow-hidden m-0">
                                            <textarea className='w-100 vertical-xl rounded border-red border-dashed border-3 h-100 p-2 focus:!outline-none ' placeholder='Add Discription Here' type='text' />
                                        </div>

                                    </div>
                                </div>

                                <div className="bs-red w-50 rounded-full relative min-h-[2px] max-h-[2px]">
                                    <span className='bs-red tx-white fs-5 font-bold absolute top-50 -mt-[1px] start-100 translate-middle-x rounded-b-lg float-right px-3 text-center whitespace-nowrap'>All Amenities</span>
                                </div>

                                <div className="w-100 my-4 px-4">
                                    <div className="w-100 border-2 flex p-3 gap-3 border-red rounded-md">
                                        <div className="w-[20%] flex flex-col gap-2 ">
                                            {amenities.map((item, index) => (
                                                <div key={index} className="">
                                                    <p value={item?.amenitiesType} onClick={() => setFiltredAmenitiesType(item?.amenitiesType)}
                                                        className={`${item?.amenitiesType === filtredAmenitiesType ? "tx-red border-2 border-red shadow-1" : "tx-white bs-red"}  pointer fs-6 font-bold py-1 rounded`}>{item?.amenitiesType}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bs-red w-[2px] rounded-full relative  "></div>

                                        <div className="col flex flex-col gap-3">
                                            {filteredAmenitiesData.map((item, index) => {
                                                return (
                                                    <div key={index} className="flex w-100 justify-between h-fit rounded px-3 py-1 items-center border-b-2 border-red gap-3">
                                                        <div className=" h-fit">
                                                            <p className='fs-6 font-bold'>{item?.amenitiesname}</p>
                                                        </div>
                                                        <input className='accent-[#db3f3f] pointer' type="checkbox" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* <Link to="/rooms" > */}
                                <div className="bs-transparent top-0 end-0 mt-[62px] fixed h-fit w-fit bs-red border-2 border-red rounded-bl-md pointer">
                                    <p className='w-fit tx-white text-center py-1 px-5 font-bold'>Submit & Save</p>
                                </div>
                                {/* </Link> */}
                            </form>
                        </div>
                    }

                    {ActiveTabState === "rooms-type" &&
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
                                                                    <i className="fa-solid fa-trash tx-red"></i>
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
