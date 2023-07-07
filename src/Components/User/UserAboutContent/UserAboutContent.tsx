'use client';


import { MdOutlineEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { BsGenderMale } from "react-icons/bs";

const UserAboutContent = () => {
    return (
        <div className="card h-[408px]">
            <div>
                <h2 className="text-sm capitalize text-gray-400 my-4">Contact Information</h2>
                <div className="flex gap-8">
                    <div>
                        <div className="flex gap- my-1">
                            <span className="my-auto flex gap-2">
                                <BiPhone className="my-auto text-gray-500" />
                                Phone:
                            </span>
                        </div>
                        <div className="flex gap- my-1">
                            <span className="my-auto flex gap-2">
                                <HiLocationMarker className="my-auto text-gray-500" />
                                Address:
                            </span>
                        </div>
                        <div className="flex gap-8 my-1">
                            <span className="my-auto flex gap-2">
                                <MdOutlineEmail className="my-auto text-gray-500" />
                                Email:
                            </span>
                        </div>
                        <div className="flex gap-8 my-1">
                            <span className="my-auto flex gap-2">
                                <BsGenderMale className="my-auto text-gray-500" />
                                Gender:
                            </span>
                        </div>

                    </div>
                    <div className="flex flex-col">

                        <span className="text-sky-500 text-sm my-auto">Contact Number</span>
                        <span className="text-sky-500 text-sm my-auto">Parmanent Address</span>
                        <span className="text-sky-500 text-sm my-auto">nishanet@mail.com</span>
                        <span className="text-sky-500 text-sm my-auto">Male</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAboutContent;