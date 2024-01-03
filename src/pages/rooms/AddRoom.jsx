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



    const [baseAdultnum, setBaseAdultNum] = useState(1);
    const [maxAdultnum, setMaxAdultNum] = useState(1);
    const [maxChildrentnum, setMaxChildrentNum] = useState(1);
    const [maxOccupancy, setMaxOccupancy] = useState();
    console.log("🚀 ~ file: AddRoom.jsx:53 ~ AddRoom ~ maxOccupancy:", maxOccupancy)

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

    const baseadultincNum = () => {
        // if (adultnum < 1) {
        setBaseAdultNum(Number(baseAdultnum) + 1);
        // }
    };
    const baseadultdecNum = () => {
        if (baseAdultnum > 1) {
            setBaseAdultNum(baseAdultnum - 1);
        }
    }
    const baseadulthandleChange = (e) => {
        setBaseAdultNum(e.target.value);
    }

    const maxadultincNum = () => {
        // if (maxAdultnum < 5) {
        setMaxAdultNum(Number(maxAdultnum) + 1);
        // }
    };
    const maxadultdecNum = () => {
        if (maxAdultnum > 1) {
            setMaxAdultNum(maxAdultnum - 1);
        }
    }
    const maxadulthandleChange = (e) => {
        setMaxAdultNum(e.target.value);
    }

    const maxchildrenincNum = () => {
        // if (maxChildrentnum < 5) {
        setMaxChildrentNum(Number(maxChildrentnum) + 1);
        // }
    };
    const maxchildrendecNum = () => {
        if (maxChildrentnum > 1) {
            setMaxChildrentNum(maxChildrentnum - 1);
        }
    }
    const maxchildrenhandleChange = (e) => {
        setMaxChildrentNum(e.target.value);
    }

    useEffect(() => {
        const totaloccupancy = maxAdultnum + maxChildrentnum
        setMaxOccupancy(totaloccupancy)
    }, [maxadulthandleChange, maxchildrenhandleChange])





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
    const amenitiesNames = [
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Bathroom Phone' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Bathtub' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Bubble Bath' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Dental Kit' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Geyser/ Water heater' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Hot & Cold Water' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Slippers' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Toiletries' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Shower Cap' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Hammam' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Bathrobes' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Western Toilet Seat' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Shower cubicle' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Weighing Scale' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Shaving Mirror' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Sewing kit' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Bidet' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Toilet with grab rails' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Ensuite Bathroom/Common Bay' },
        { id: 1, amenitiesType: "Bathroom", amenitiesname: 'Jetspray' },

        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Closet" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Blackout curtains" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Center Table" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Charging points" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Couch" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Dining Table" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Fireplace" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Mini Bar" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Mini Fridge" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Sofa" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Telephone" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Work Desk" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Pillow menu" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Hypoallergenic Bedding" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Living Area" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Dining Area" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Seating Area" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Chair" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Fireplace Guards" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Coffee Machine" },
        { id: 2, amenitiesType: 'Room Features', amenitiesname: "Jaccuzi" },

        { id: 3, amenitiesType: 'Media and Entertainment', amenitiesname: "TV" },
        { id: 3, amenitiesType: 'Media and Entertainment', amenitiesname: "Smart Controls" },
        { id: 3, amenitiesType: 'Media and Entertainment', amenitiesname: "Sound Speakers" },
        { id: 3, amenitiesType: 'Media and Entertainment', amenitiesname: "Smartphone" },

        { id: 4, amenitiesType: 'Food and Drinks', amenitiesname: "BBQ Grill" },
        { id: 4, amenitiesType: 'Food and Drinks', amenitiesname: "Cook & Butler Service" },

        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Dishwasher" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Induction" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Stove/Induction" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Cooking Basics" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Washing machine" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Dishes and Silverware" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Rice Cooker" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Kitchenette" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Refrigerator" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Toaster" },
        { id: 5, amenitiesType: 'Kitchen and Appliances', amenitiesname: "Microwave" },

        { id: 6, amenitiesType: 'Beds and Blanket', amenitiesname: "Blanket" },

        { id: 7, amenitiesType: 'Safety and Security', amenitiesname: "Cupboards with locks" },
        { id: 7, amenitiesType: 'Safety and Security', amenitiesname: "Safe" },

        { id: 8, amenitiesType: 'Childcare', amenitiesname: "Child safety socket covers" },

        { id: 9, amenitiesType: 'Other Facilities', amenitiesname: "Mosquito Net" },
        { id: 9, amenitiesType: 'Other Facilities', amenitiesname: "Newspaper" },
        { id: 9, amenitiesType: 'Other Facilities', amenitiesname: "Balcony" },
        { id: 9, amenitiesType: 'Other Facilities', amenitiesname: "Jacuzzi" },
        { id: 9, amenitiesType: 'Other Facilities', amenitiesname: "Private Pool" },
        { id: 9, amenitiesType: 'Other Facilities', amenitiesname: "Terrace" },
        { id: 9, amenitiesType: 'Other Facilities', amenitiesname: "Fan" },
    ];

    const amenitiesTypes = [
        { id: 1, amenitiesType: "Popular with Guests" },
        { id: 1, amenitiesType: "Bathroom" },
        { id: 2, amenitiesType: 'Room Features' },
        { id: 3, amenitiesType: 'Media and Entertainment' },
        { id: 4, amenitiesType: 'Food and Drinks' },
        { id: 5, amenitiesType: 'Kitchen and Appliances' },
        { id: 6, amenitiesType: 'Beds and Blanket' },
        { id: 7, amenitiesType: 'Safety and Security' },
        { id: 8, amenitiesType: 'Childcare' },
        { id: 9, amenitiesType: 'Other Facilities' },
    ];

    const filteredAmenitiesData = amenitiesNames.filter(type => type.amenitiesType === filtredAmenitiesType)

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
                            <div className="w-100 px-3 py-1 shadow-1">
                                <p className='font-bold fs-4 text-left'>Add Room</p>
                            </div>

                            <form className='flex flex-col w-100 gap-4'>
                                {/* <div className="w-100 px-4">
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
                                }*/}

                                {/* <div className="bs-red w-50 rounded-full relative min-h-[2px] max-h-[2px]">
                                    <span className='bs-red tx-white fs-5 font-bold absolute top-50 -mt-[1px] start-100 translate-middle-x rounded-b-lg float-right px-3 text-center'>Occupancy</span>
                                </div> */}
                                <div className="w-fit">
                                    <span className='w-fit fs-6 font-bold px-3'>ROOM INFO</span>
                                </div>


                                <div className="flex flex-col w-100 gap-3">
                                    <div className="flex w-100 px-5 h-fit gap-5">
                                        <div className="flex flex-col w-50 gap-3">
                                            <div className="h-fit text-start m-0">
                                                <p className='fs-7 font-semibold my-1'>Display Name</p>
                                                <input className='w-100 drop-shadow- border-[1px] border-grey rounded px-2 py-1 focus:!outline-none' placeholder='Room Name' type='text' />
                                            </div>

                                            <div className="text-start  m-0">
                                                <p className='fs-7 font-semibold py-1'>Disciption</p>
                                                <textarea className='w-100 rounded border-[1px] border-grey h-100 p-2 focus:!outline-none ' placeholder='Add Discription Here' type='text' />
                                            </div>
                                        </div>

                                        <div className="w-50 flex gap-4 justify-between">

                                            <div className="w-50 flex flex-col justify-between">
                                                <div className="relative z-30 text-start drop-shadow-">
                                                    <p className='fs-7 font-semibold py-1'>Room Type</p>
                                                    <Select placeholder="Select Rooms Type"
                                                        options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                        className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                    />
                                                </div>
                                                <div className="relative z-20 text-start drop-shadow-">
                                                    <p className='fs-7 font-semibold py-1'>Room View</p>
                                                    <Select placeholder="Select Rooms View"
                                                        options={RoomView} onChange={selectedRoomTypesHandler} value={RoomView.find(option => option.value === RoomView) || RoomView.find(option => option === RoomView)}
                                                        className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                    />
                                                </div>
                                                <div className="relative z-10 text-start drop-shadow-">
                                                    <p className='fs-7 font-semibold py-1'>Bed Type</p>
                                                    <Select placeholder="Select Bed Type"
                                                        options={BedType} onChange={selectedBedTypeHandler} value={BedType.find(option => option.value === BedType) || BedType.find(option => option === BedType)}
                                                        className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-50 text-start h-fit m-0">
                                                <p className='fs-7 font-semibold py-1'>Disciption</p>
                                                <input className='drop-shadow- border-[1px] border-grey rounded w-100 px-2 py-1 focus:!outline-none' placeholder='Total Rooms' type='number' />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="w-100 px-5 h-fit gap-5">
                                        <div className="text-start">
                                            <p className='fs-7 font-semibold py-1'>Dimensions(Sq.ft)</p>
                                            <div className=" flex gap-5 justify- items-center text-start">
                                                <div className="flex gap-3">
                                                    <div className="border-[1px] border-grey py-1 px-3 rounded pointer">
                                                        <p className=''>Size</p>
                                                    </div>
                                                    <div className="border-[1px] border-grey py-1 px-3 rounded pointer">
                                                        <p className=''>Area</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="drop-shadow- border-[1px] border-grey rounded h-fit overflow-hidden m-0">
                                                        <input className='w-100 px-2 py-1 focus:!outline-none' placeholder='Length' type='number' />
                                                    </div>
                                                    <i className="fa-regular fa-xmark fs-5"></i>
                                                    <div className="drop-shadow- border-[1px] border-grey rounded h-fit overflow-hidden m-0">
                                                        <input className='w-100 px-2 py-1 focus:!outline-none' placeholder='Breadth' type='number' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-100 text-start">
                                        <p className='w-fit fs-6 font-bold py-3 px-3'>OCCUPANCY</p>
                                        <div className="flex py-3 px-5 w-100 gap-5 items-center">
                                            <div className="flex justify-between col gap-3 items-center">
                                                <div className="text-start col">
                                                    <p className='fs-7 font-bold'>Base Adults</p>
                                                    <p className='fs-8 font-semibold tx-grey'>Ideal number of adults that can be accommodated in this room</p>
                                                </div>

                                                <div className="flex items-center rounded-md border-[1px] border-grey  w-fit h-fit mx-auto">
                                                    <div className="px-3 py-1 rounded-l border-r-[1px] border-grey pointer" onClick={baseadultdecNum}>
                                                        <i className="fa-solid fa-minus fs-6"></i>
                                                    </div>
                                                    <input type="text" className="font-semibold text-center min-w-[35px] !max-w-[35px]" value={baseAdultnum} onChange={baseadulthandleChange} />
                                                    <div className="px-3 py-1 rounded-r border-l-[1px] border-grey pointer" onClick={baseadultincNum}>
                                                        <i className="fa-solid fa-plus fs-6"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between col gap-3 items-center">
                                                <div className="text-start col">
                                                    <p className='fs-7 font-bold'>Maximum Adults</p>
                                                    <p className='fs-8 font-semibold tx-grey'>Maximum number of adults that can be accommodated in this room</p>
                                                </div>

                                                <div className="flex items-center rounded-md border-[1px] border-grey  w-fit h-fit mx-auto">
                                                    <div className="px-3 py-1 rounded-l border-r-[1px] border-grey pointer" onClick={maxadultdecNum}>
                                                        <i className="fa-solid fa-minus fs-6"></i>
                                                    </div>
                                                    <input type="text" className="font-semibold text-center min-w-[35px] !max-w-[35px]" value={maxAdultnum} onChange={maxadulthandleChange} />
                                                    <div className="px-3 py-1 rounded-r border-l-[1px] border-grey pointer" onClick={maxadultincNum}>
                                                        <i className="fa-solid fa-plus fs-6"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex py-3 px-5 w-100 gap-5 items-center">
                                            <div className="flex justify-between col gap-3 items-center">
                                                <div className="text-start col">
                                                    <p className='fs-7 font-bold'>Number of Max Children</p>
                                                    <p className='fs-8 font-semibold tx-grey'>Mention the maximum number of children who can stay in the room</p>
                                                </div>
                                                <div className="flex items-center rounded-md border-[1px] border-grey  w-fit h-fit mx-auto">
                                                    <div className="px-3 py-1 rounded-l border-r-[1px] border-grey pointer" onClick={maxchildrendecNum}>
                                                        <i className="fa-solid fa-minus fs-6"></i>
                                                    </div>
                                                    <input type="text" className="font-semibold text-center min-w-[35px] !max-w-[35px]" value={maxChildrentnum} onChange={maxchildrenhandleChange} />
                                                    <div className="px-3 py-1 rounded-r border-l-[1px] border-grey pointer" onClick={maxchildrenincNum}>
                                                        <i className="fa-solid fa-plus fs-6"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between col gap-3 items-center">
                                                <div className="text-start col">
                                                    <p className='fs-7 font-bold'>Maximum Occupancy (adults & children)</p>
                                                    <p className='fs-8 font-semibold tx-grey'>Mention the total number of adults & children that can be accommodated in this room</p>
                                                </div>

                                                <div className="flex items-center rounded-md border-[1px] border-grey  w-fit h-fit mx-auto">
                                                    <div className="px-3 py-1 rounded-l border-r-[1px] border-grey cursor-not-allowed" >
                                                        <i className="fa-solid fa-minus fs-6"></i>
                                                    </div>
                                                    <input type="text" className="font-semibold text-center min-w-[35px] !max-w-[35px]" disabled value={maxOccupancy} />
                                                    <div className="px-3 py-1 rounded-r border-l-[1px] border-grey cursor-not-allowed" >
                                                        <i className="fa-solid fa-plus fs-6"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 my-4 px-4">
                                    <div className="rounded border-2">
                                        <div className="w-100 border-b-1 text-start py-2">
                                            <span className=' fs-5 font-bold px-3 whitespace-nowrap'>All Amenities</span>
                                        </div>
                                        <div className="w-100 p-3  flex gap-3 rounded-md">
                                            <div className="w-[20%] flex flex-col overflow-y-scroll scroll-d-none max-h-[500px] gap-2 ">
                                                {amenitiesTypes.map((item, index) => (
                                                    <div key={index} className="">
                                                        <p value={item?.amenitiesType} onClick={() => setFiltredAmenitiesType(item?.amenitiesType)}
                                                            className={`${item?.amenitiesType === filtredAmenitiesType ? "tx-white bs-blue drop-shadow-md first-letter:" : "border-2"}  pointer fs-6 font-semibold py-2 rounded`}>{item?.amenitiesType}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="bs-blue w-[2px] rounded-full relative "></div>

                                            <div className="col flex flex-col overflow-y-scroll scroll-d-non max-h-[500px] gap-3">
                                                {filteredAmenitiesData.map((item, index) => (
                                                    <div key={index} className="flex w-100 h-fit rounded px-3 py-1 items-center border-b-2 border-blue gap-3">
                                                        <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                        <div className=" h-fit">
                                                            <p className='fs-6 font-bold'>{item?.amenitiesname}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {filtredAmenitiesType === "Popular with Guests" &&
                                                    <>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'>Air Conditioning</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[9] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'>Heater</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[8] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'>Housekeeping</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[7] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'>In Room dining</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[6] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'> Iron/Ironing Board </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'> Mineral Water</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[5] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'>Room service</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[4] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'> Study Room </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'>Kettle</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[3] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'>Wifi</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[2] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'>Bathroom</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative z-[1] text-start drop-shadow-">
                                                                <Select placeholder="Select Rooms Type"
                                                                    options={RoomTypes} onChange={selectedRoomViewHandler} value={RoomTypes.find(option => option.value === RoomTypes) || RoomTypes.find(option => option === RoomTypes)}
                                                                    className="w-100 border-[1px] border-grey rounded bs-transparent focus:outline-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex w-100 h-fit rounded px-3 py-1 items-center justify-between border-b-2 border-blue gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <input className='accent-[#2c74b3] pointer' type="checkbox" />
                                                                <div className="h-fit">
                                                                    <p className='fs-6 font-bold'> Air Purifier </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                }














                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <Link to="/rooms" > */}
                                <div className="mb-5 h-fit w-fit mx-auto bs-blue rounded-md pointer">
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
