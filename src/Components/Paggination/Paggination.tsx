'use client';

import Link from "next/link";
import data from "../../../data.json";

const dataLength = data.length;

const Paggination = (currentPage: any, totalPages: any, setCurrentPage: any) => {
    return (
        <div className="flex">
            <Link
                href="#"
                className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md ${currentPage === 1 ? 'cursor-not-allowed rtl:-scale-x-100' : ''
                    }`}
                onClick={() => {
                    if (currentPage > 1) {
                        setCurrentPage((prevPage: any) => prevPage - 1);
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
                        setCurrentPage((prevPage: any) => prevPage + 1);
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>
    );
};

export default Paggination;