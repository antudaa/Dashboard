'use client';

import Image from "next/image";
import logo from "@/Assets/Icons/logobgwhite.png";
import shortLogo from "@/Assets/Icons/logobgwhite.png";
import Hamburger from "@/Assets/Icons/hamburger.png";
import ProfileIcon from "@/Assets/Icons/user.png";
import close from "@/Assets/Icons/close.png";
import Link from "next/link";
import { BsSun } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";


const TopNav = ({ toggleNav, open }: any) => {


    return (
        <div className="flex items-center justify-between px-8 bg-[aliceblue] text-gray-800 w-full shadow-lg py-2">

            <Image className="cursor-pointer" src={logo} width={130} height={60} alt="Image not Found" />
            {

            }
            <div className="flex ml-4 my-auto">
                <div>
                    <nav className="contents">
                        <ul className="flex items-center lg:mr-6 xl:mr-8">
                            <li className="p-1">
                                <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                    <svg className="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" ><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                </a>
                            </li>
                            <li className="p-1">
                                <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                    <svg className="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                </a>
                            </li>
                            <li className="p-1">
                                <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                    <svg className="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                </a>
                            </li>

                            {/* Toggle Button For Side Nav  */}
                            {
                                open ?
                                    <Image onClick={toggleNav} className="cursor-pointer flex md:hidden m-6" src={close} width={20} height={20} alt="Image not Found" />
                                    :
                                    <Image onClick={toggleNav} className="cursor-pointer flex md:hidden m-6" src={Hamburger} width={20} height={20} alt="Image not Found" />
                            }
                        </ul>
                    </nav>
                </div>

                {/* Toggle Icon to toggle the sidebar */}
                <Link href="" className="mr-4 lg:mr-6 xl:mr-8 hidden md:flex items-center justify-center px-4 ml-2 text-sm rounded">
                    <Image onClick={toggleNav} className="cursor-pointer flex md:hidden m-6" src={close} width={20} height={20} alt="Image not Found" />
                    <svg className="h-5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                </Link>

                {/* Profile Icon */}
                <Link href="" className="my-auto">
                    <svg className="h-8 md:h-7" enableBackground="new 0 0 32 32" id="Stock_cut" version="1.1" viewBox="0 0 32 32"><desc /><g><circle cx="16" cy="16" fill="none" r="15" stroke="#000000" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" /><path d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0" fill="none" stroke="#000000" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" /><circle cx="16" cy="11" fill="none" r="6" stroke="#000000" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" /></g></svg>
                </Link>
            </div>
        </div>

    );
};

export default TopNav;