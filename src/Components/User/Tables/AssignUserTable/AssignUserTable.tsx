'use client';

import { useState } from "react";
import data from "../../../../../data.json";
import "./AssignUserTable.module.css";
import Link from "next/link";
import GlobalButton from "@/Components/Buttons/GlobalButton/GlobalButton";
import Paggination from "@/Components/Paggination/Paggination";

const AssignUserTable = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRole, setSelectedRole] = useState("");

    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const rowOptions: number[] = [5, 10, 20, 50];
    
    const itemsPerPage = rowsPerPage; // Number of items to display per page

    // Filtering Data from Search 
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Search Functionality 
    const handleSearchChange = (e: any) => {
        setSearchQuery(e.target.value);
    };

    // Functionality to Select Role 
    const handleRoleChange = (e: any, id: any) => {
        setSelectedRole((prevRoles: any) => ({
            ...prevRoles,
            [id]: e.target.value,
        }));
    };

    const handleRowsPerPageChange = (event: any) => {
        setRowsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reset current page when changing rows per page
    };

    const indexOfLastItem = currentPage * rowsPerPage;
    const indexOfFirstItem = indexOfLastItem - rowsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div>
            <div className="flex ml-8 justify-start">
                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>

            {/* Whole Table */}
            <section className="container px-4 py-8 rounded-xl overflow-x-auto mx-auto bg-white">
                <div className="flex items-center gap-x-3 bg-white">
                    <h2 className="text-lg font-medium text-gray-800">Team members</h2>

                    <span className="px-3 py-1 text-xs bg-white text-gray-800">{data.length} users</span>
                    <select
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    >
                        {rowOptions.map((option) => (
                            <option key={option} value={option}>
                                {option} rows per page
                            </option>
                        ))}
                    </select>
                </div>

                {/* Table Data  */}
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-white shadow-xl">
                                        {/* Table Header Row */}
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-800">
                                                <div className="flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded bg-white " />
                                                    <span>Info</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800 ">
                                                <span>Email</span>

                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800">
                                                <span>Number</span>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800">Department</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800">Designation</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800">Select Role</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800">Assign</th>
                                        </tr>
                                    </thead>
                                    {/* Table Body Starts form here */}
                                    <tbody className="bg-white divide-y divide-gray-200 ">
                                        {
                                            currentItems.map((item) => (
                                                <tr key={item.id}>
                                                    {/* Employee Info  */}
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                                                            <div className="flex items-center gap-x-2">
                                                                <img className="object-cover w-10 h-10 rounded-full" src={item?.image} alt="" />
                                                                <div>
                                                                    <h2 className="font-medium text-gray-800 ">{item?.name}</h2>
                                                                    <p className="text-sm font-normal text-gray-800">{item?.username}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    {/* Email  */}
                                                    <td className="px-12 py-4 text-sm font-medium text-sky-500 whitespace-nowrap">
                                                        {item.email}
                                                    </td>
                                                    {/* Contact  */}
                                                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{item?.contact}</td>
                                                    {/* Department  */}
                                                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{item?.department}</td>
                                                    {/* Designation  */}
                                                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{item?.designation}</td>
                                                    {/* Selecting Role Dropdown Buttton  */}
                                                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        <select
                                                            value={selectedRole[item.id] || ""}
                                                            onChange={(e) => handleRoleChange(e, item.id)}
                                                            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="admin">Admin</option>
                                                            <option value="super admin">Super Admin</option>
                                                            <option value="moderator">Moderator</option>
                                                        </select>

                                                    </td>
                                                    {/* Assign Button  */}
                                                    <td className="">
                                                        <GlobalButton text={"Assign"} link={"#"} />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pagination  */}
            <div className="flex justify-end mr-6 my-6">
                <div className="flex">
                    <Link
                        href="#"
                        className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md ${currentPage === 1 ? 'cursor-not-allowed rtl:-scale-x-100' : ''
                            }`}
                        onClick={() => {
                            if (currentPage > 1) {
                                setCurrentPage((prevPage) => prevPage - 1);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>

                    {/* Render the page links */}
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <Link
                            key={index}
                            href="#"
                            className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
                                }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </Link>
                    ))}

                    <Link
                        href="#"
                        className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${currentPage === totalPages ? 'cursor-not-allowed' : ''
                            }`}
                        onClick={() => {
                            if (currentPage < totalPages) {
                                setCurrentPage((prevPage) => prevPage + 1);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
                {/* <Paggination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPage={totalPages} /> */}
            </div>

        </div>
    );
};

export default AssignUserTable;