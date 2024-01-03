import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, ModalContent, ModalHeader, backdrop, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Select from 'react-select';


export default function Settings() {
    const [filtredAmenitiesType, setFiltredAmenitiesType] = useState("Bathroom");
    const [ActiveTabState, setActiveTabState] = useState(
        localStorage.getItem('Setting page')
    );
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [addAmenitiesTypeModal, setAddAmenitiesTypeModal] = useState(false);
    const [addAmenitieModal, setAddAmenitieModal] = useState(false);
    const [amenitiestypeselector, setamenitiestypeselector] = useState("");

    const handleAmenitiesTypeModal = () => {
        setAddAmenitiesTypeModal(true)
    }
    const closeAmenitiesTypeModal = () => {
        setAddAmenitiesTypeModal(false)
    }

    const handleAmenitieModal = () => {
        setAddAmenitieModal(true)
    }
    const closeAmenitieModal = () => {
        setAddAmenitieModal(false)
    }
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
    const amenitiesTypeOptions = [
        { value: 'Bathroom', label: 'Bathroom' },
        { value: 'Features', label: 'Features' },
        { value: 'Entertainment', label: 'Entertainment' },
        { value: 'Bathroom', label: 'Bathroom' },
        { value: 'Features', label: 'Features' },
        { value: 'Entertainment', label: 'Entertainment' },
        { value: 'Bathroom', label: 'Bathroom' },
        { value: 'Features', label: 'Features' },
        { value: 'Entertainment', label: 'Entertainment' },
        { value: 'Bathroom', label: 'Bathroom' },
        { value: 'Features', label: 'Features' },
        { value: 'Entertainment', label: 'Entertainment' },
    ];

    const filteredAmenitiesData = amenities.filter(type => type.amenitiesType === filtredAmenitiesType)


    // useEffect to update the localStorage whenever the state changes
    useEffect(() => {
        localStorage.setItem('Setting page', ActiveTabState);
    }, [ActiveTabState]);


    return (
        <>
            <div className=" h-[100vh] w-[calc(100vw-0px)] flex flex-col items-start gap-3 rounded-lg">
                <div className="w-100 h-[50px] flex text-center border-l-2 border-b-2 shadow-1 border-red rounded-bl-lg">
                    <div className="flex gap-3 px-3">
                        <div onClick={() => setActiveTabState("Amenities")} className={`${ActiveTabState === "Amenities" ? "bs-red tx-white shadow-1" : ""}  pointer border-x-2 border-b-2 border-red py-1 px-5 h-fit rounded-b-md`}>
                            <p className='fs-6 font-bold'>Amenities</p>
                        </div>
                    </div>
                </div>




                <div className="w-[calc(100vw-120px)] h-[calc(100vh-0px)] flex mx-auto text-center relative border-l-2 border-t-2 shadow-1 border-red rounded-tl-lg scroll-d-none overflow-y-scroll">
                    {ActiveTabState === "Amenities" &&
                        <div className="flex flex-col gap-3 h-fit w-100">

                            <div className="w-fit px-3 border-b-2 border-red rounded-bl-lg drop-shadow-md">
                                <p className='tx-red font-bold fs-3'>Manage Amenities</p>
                            </div>

                            <form className='flex flex-col w-100 gap-4'>

                                <div className="bs-red w-50 rounded-full relative min-h-[2px] max-h-[2px]">
                                    <span className='bs-red tx-white fs-5 font-bold absolute top-50 -mt-[1px] start-100 translate-middle-x rounded-b-lg float-right px-3 text-center whitespace-nowrap'>All Amenities</span>
                                </div>

                                <div className="w-100 flex flex-col gap-3 my-4 px-4">
                                    <div className="w-100 border-2 flex p-3 gap-3 border-red rounded-md">
                                        <div className="w-[20%] flex flex-col gap-2 ">
                                            <div className="" onClick={handleAmenitiesTypeModal}>
                                                <p className="tx-red border-3 border-dashed border-red shadow-1 bs-white pointer fs-6 font-bold py-1 rounded">Add Amenities Type</p>
                                            </div>
                                        </div>
                                        <div className="bs-red w-[2px] rounded-full relative " />
                                        <div className="col flex flex-col gap-3">
                                            <div className="" onClick={handleAmenitieModal}>
                                                <p className="tx-red border-3 border-dashed border-red shadow-1 bs-white pointer fs-6 font-bold py-1 rounded">Add Amenitie Content</p>
                                            </div>
                                        </div>
                                    </div>
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

                                <Link to="/rooms" >
                                    <div className="bs-transparent top-0 end-0 mt-[62px] fixed h-fit w-fit bs-red border-2 border-red rounded-bl-md pointer">
                                        <p className='w-fit tx-white text-center py-1 px-5 font-bold'>Submit & Save</p>
                                    </div>
                                </Link>
                            </form>
                        </div>
                    }

                </div>
            </div>


            <Modal isOpen={addAmenitiesTypeModal} backdrop={"blur"} onOpenChange={closeAmenitiesTypeModal}>
                <ModalContent>
                    {(closeAmenitiesTypeModal) => (
                        <>
                            <ModalHeader className="flex flex-col tx-red font-bold fs-5 gap-1">Add Amenities Type</ModalHeader>
                            <ModalBody>
                                <div className="flex items-center shadow-1 border-2 my-3 border-red rounded overflow-hidden">
                                    <div className="col">
                                        <input className='w-100 py-1 px-2' placeholder='add amenities Type Name' type="text" />
                                    </div>
                                    <div className="w-fit bs-red px-4">
                                        <p className='tx-white py-1'>Add</p>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>


            <Modal isOpen={addAmenitieModal} backdrop={"blur"} onOpenChange={closeAmenitieModal}>
                <ModalContent className="border-2 border-red shadow-">
                    {(closeAmenitieModal) => (
                        <>
                            <ModalHeader className="flex flex-col tx-red font-bold fs-5 gap-1">Add Amenitie Content</ModalHeader>
                            <ModalBody>
                                <div className="col">
                                    <div className="static  h-[40px]">
                                        <div className="w-[396px] fixed">
                                            <Select placeholder="Select Amenitie Type"
                                                options={amenitiesTypeOptions} value={amenitiesTypeOptions.find(option => option.value === amenitiesTypeOptions) || amenitiesTypeOptions.find(option => option === amenitiesTypeOptions)}
                                                className="w-100 border-red border-2 rounded bs-transparent focus:outline-0" onChange={(roomnumber) => { setamenitiestypeselector("roomnumber", roomnumber); }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center shadow-1 border-2 my-3 border-red rounded overflow-hidden">
                                        <div className="col">
                                            <input className='w-100 py-1 px-2' placeholder='add amenitie content here' type="text" />
                                        </div>
                                        <div className="w-fit bs-red px-4">
                                            <p className='tx-white py-1'>Add</p>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>




        </>
    )
}
