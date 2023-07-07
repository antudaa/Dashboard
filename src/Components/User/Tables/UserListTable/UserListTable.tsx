import Link from "next/link";

import SearchUser from "@/Components/SearchFunctionality/SearchUser/SearchUser";
import Paggination from "@/Components/Paggination/Paggination";
import { useState } from "react";
import data from "../../../../../data.json";

const UserListTable = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (item.role === "admin" || item.role === "super admin")
    );


    const handleSearchChange = (e: any) => {
        setSearchQuery(e.target.value);
    };

    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="mb-16 mt-4 rounded-xl">
            {/* Search Bar  */}
            <div className="flex justify-start pl-3 py-8">
                <SearchUser handleSearchChange={handleSearchChange} />
            </div>
            {/* Table Information  */}

            <section className="container px-4 py-8 rounded-xl overflow-x-auto mx-auto bg-white">
                <div className="flex items-center gap-x-3 bg-white">
                    <h2 className="text-lg font-medium text-gray-800">Team members</h2>

                    <span className="px-3 py-1 text-xs bg-white text-gray-800">{filteredData.length} users</span>
                </div>

                {/* Table Data  */}
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-white shadow-xl">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-800">
                                                <div className="flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded bg-white " />
                                                    <span>Name</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800 ">
                                                <span>Status</span>
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800 ">
                                                <span>Role</span>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800">
                                                <span>Position</span>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800">Email address</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-800">Actions</th>

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 ">
                                        {
                                            currentItems.map((item, i) => (
                                                <tr key={i}>
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
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2  ${item?.role === "super admin" ? "bg-emerald-100/60 " : "bg-sky-100/60"}`}>
                                                            <span className={`h-1.5 w-1.5 rounded-full ${item?.role === "super admin" ? "bg-emerald-500 " : "bg-sky-500 "}`}></span>

                                                            <h2 className={`text-sm font-normal ${item?.role === "super admin" ? "text-emerald-500" : "text-sky-500"}`}>Active</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2  ${item?.role === "super admin" ? "bg-emerald-100/60 " : "bg-sky-100/60"}`}>
                                                            <span className={`h-1.5 w-1.5 rounded-full ${item?.role === "super admin" ? "bg-emerald-500 " : "bg-sky-500 "}`}></span>

                                                            <h2 className={`text-sm font-normal ${item?.role === "super admin" ? "text-emerald-500" : "text-sky-500"}`}>{item?.role}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{item?.designation}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{item?.email}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-2">
                                                            <p className="px-3 py-1 text-xs text-orange-500 rounded-full  bg-indigo-100/60">Block</p>
                                                            <Link href={"/Pages/user/user-details"} className="px-3 py-1 text-xs text-blue-500 rounded-full  bg-pink-100/60">Details</Link>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <button className="text-gray-800 transition-colors duration-200 dark:hover:text-red-500 hover:text-red-500 focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>
                                                            </button>

                                                            <button className="text-gray-800 transition-colors duration-200 dark:hover:text-yellow-500 hover:text-yellow-500 focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </button>
                                                        </div>
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
                        className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-700 capitalize bg-[aliceblue] hover:bg-blue-500 hover:text-white rounded-md ${currentPage === 1 ? 'cursor-not-allowed rtl:-scale-x-100' : ''
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
                            className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline hover:bg-blue-500 hover:text-white ${currentPage === index + 1 ? 'bg-blue-500 text-gray-700' : ''
                                }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </Link>
                    ))}

                    <Link
                        href="#"
                        className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 hover:bg-blue-500 hover:text-white ${currentPage === totalPages ? 'cursor-not-allowed' : ''
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
            </div>
        </div>

    );
};

export default UserListTable;