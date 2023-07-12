'use client';

import profileImage from "@/Assets/Images/ProfileImage.jpg";
import Logo from "@/Assets/Icons/logobgdark.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { MenuData } from "@/Data/Data";
import { AiOutlineRight } from "react-icons/ai"


const SideNav = () => {

    const [openMenus, setOpenMenus] = useState([]);

    const toggleDropdown = (menuId: never) => {
        if (openMenus.includes(menuId)) {
            setOpenMenus(openMenus.filter((id) => id !== menuId));
        } else {
            setOpenMenus([...openMenus, menuId]);
        }
    };

    return (


        <nav >

            <div className="bg-[#1C2536] z-50 dark:bg-gray-900 dark:border-gray-700 flex h-full flex-col border-r border-gray-800">
                <aside className="flex flex-col md:w-72 w-64 py-8 bg-white dark:bg-gray-900 dark:border-gray-700">
                    <Link href="#" className="mx-auto">
                        {/* Profile Image  */}
                        <Image src={Logo} width={160} height={60} alt="Image not found" />
                    </Link>
                    {/* Profile Card Info */}
                    <div className="flex flex-col items-center mt-6 -mx-2">
                        <Image className="rounded-full cursor-pointer" src={profileImage} width={96} height={96} alt="Image not found" />
                        <h4 className="mt-2 font-medium text-gray-800 dark:text-gray-200">Habib Habibullah</h4>
                        <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">habib@admin.com</p>
                    </div>

                    <div className="px-5 py-8 overflow-y-auto bg-white sm:w-64 w-64 dark:bg-gray-900 dark:border-gray-700">

                        {/* Search Bar to search Options */}
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                        </div>

                        {/* Menus  */}
                        <nav className="mt-4 -mx-3 space-y-6 ">

                            <ul className="py-4">
                                {MenuData.map((menu: any) => (

                                    // Main Menu 
                                    <li key={menu?.id}>
                                        <>
                                            <Link href={`${menu?.link}`} onClick={() => toggleDropdown(menu.id)} className="flex px-4 py-3 text-gray-600 transition-transform duration-500 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                                <span className="flex ">
                                                    <span className="flex items-center ">
                                                        <span>
                                                            {/* Subtitle Icon  */}
                                                            {menu?.icon}
                                                        </span>

                                                        <span className="mx-2 text-sm font-medium">
                                                            {/* Main Title Name  */}
                                                            {menu?.title}
                                                        </span>
                                                    </span>
                                                    {
                                                        menu.subMenu.length > 1 &&
                                                        <span className="flex my-auto justify-end">
                                                            {/* Subtitle Icon  */}
                                                            <AiOutlineRight />
                                                        </span>
                                                    }
                                                </span>
                                            </Link>
                                            {openMenus.includes(menu?.id) && (
                                                <span>
                                                    {menu.subMenu.map((item, i) => (

                                                        // SubMenu 
                                                        <span key={i}>
                                                            <Link href={item?.link} className="flex items-center ml-6 px-3 py-3 text-gray-600 transition-colors duration-700 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                                                <span>
                                                                    {/* SubTitle Icon  */}
                                                                    {item?.icon}
                                                                </span>

                                                                <span className="mx-2 text-sm font-medium">
                                                                    {/* Subtitle Name  */}
                                                                    {item?.title}
                                                                </span>
                                                            </Link>
                                                        </span>
                                                    ))}
                                                </span>
                                            )}
                                        </>
                                    </li>
                                ))}
                            </ul>

                            {/* Customization Section */}
                            <div className="space-y-3 ">
                                <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Customization</label>

                                <Link href="/Pages/auth/signUp" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                    </svg>

                                    <span className="mx-2 text-sm font-medium">Sign Up</span>
                                </Link>
                                <Link href="/Pages/auth/login" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                    </svg>

                                    <span className="mx-2 text-sm font-medium">Login</span>
                                </Link>

                                <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span className="mx-2 text-sm font-medium">Setting</span>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </aside>

            </div>
        </nav>
    );
};

export default SideNav;