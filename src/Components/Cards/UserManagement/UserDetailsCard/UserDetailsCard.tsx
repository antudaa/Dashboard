'use client';

import { HiLocationMarker } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { useState } from "react";
import UserTimelineCard from "@/Components/User/Cards/UserTimelineCard";
import UserAboutContent from "@/Components/User/UserAboutContent/UserAboutContent";


const UserDetailsCard = () => {

    const [showAbout, setShowAbout] = useState(true);
    const [showTimeline, setShowTimeline] = useState(false);

    const handleAboutClick = () => {
        setShowAbout(true);
        setShowTimeline(false);
    };

    const handleTimelineClick = () => {
        setShowAbout(false);
        setShowTimeline(true);
    };

    return (
        <div className="mt-32 mx-auto p-4 md:p-0 text-gray-800">

            <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">

                <div className="bg-cover bg-top border w-full md:w-1/3 h-64 md:h-auto bg-[url('https://yt3.googleusercontent.com/ytc/AGIKgqPIQV1UuPYVxZil0zXID-cp-js2OG0lfAsL8xRoaTs=s900-c-k-c0x00ffffff-no-rj')]" >
                    <div className="absolute text-xl">
                        <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                    </div>
                </div>
                <div className="bg-white w-full md:w-2/3">
                    <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 ">
                        <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                            <div className="w-full md:w-3/5 lg:border-right lg:border-solid text-center md:text-left">
                                <div className="flex gap-6 mb-4">
                                    <h3 className="my-auto">User Name</h3>
                                    <div className="flex gap-4">
                                        <span className="my-auto">
                                            <HiLocationMarker className="text-gray-500" />
                                        </span>
                                        <span className="my-auto text-sm">Location Country</span>
                                    </div>
                                </div>
                                <span className="bg-[aliceblue] my-auto text-md text-blue-400 font-medium mr-2 px-5 py-0.5 rounded-full ">Admin</span>

                                <hr className="my-4" />
                                {/* Button To Block Delete and Edit User */}
                                <div className="flex gap-6 mt-4">
                                    {/* Edit Button  */}
                                    <button className="rounded-lg px-4 py-1 border-[1px] border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-100 duration-300">Edit</button>
                                    {/* Block Button  */}
                                    <button className="rounded-lg px-4 py-1 border-[1px] border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-orange-100 duration-300">Block</button>
                                    {/* Delete Button  */}
                                    <button className="rounded-lg px-4 py-1 border-[1px] border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300">Delete</button>
                                </div>
                            </div>
                            {/* <!-- ./Card title and subtitle --> */}

                            {/* <!-- Card description --> */}
                            <div className="w-full lg:w-3/5 lg:px-3 mt-6">
                                <div className="flex flex-col">
                                    {/* About Content Buttton */}
                                    <div className="flex gap-6">
                                        <div className="flex gap-4">
                                            <span className="my-auto">
                                                <BiUser className="text-gray-500" />
                                            </span>
                                            <button
                                                className="btn active:text-sky-400"
                                                onClick={handleAboutClick}
                                            >
                                                About
                                            </button>
                                        </div>

                                        {/* Timeline Content Button */}
                                        <div className="flex gap-4">
                                            <span className="my-auto">
                                                <BsEye className="text-gray-500" />
                                            </span>
                                            <button
                                                className="btn active:text-sky-400"
                                                onClick={handleTimelineClick}
                                            >
                                                Timeline
                                            </button>
                                        </div>
                                    </div>
                                    <hr className="mb-4 mt-2" />
                                    {/* Showing User About Content */}
                                    {showAbout && (
                                        <UserAboutContent />
                                    )}
                                    {/* Showing User Timeline Content */}
                                    {showTimeline && (
                                        <div className="card">
                                            <UserTimelineCard />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsCard;