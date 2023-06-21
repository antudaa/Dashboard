'use client';

import SideNav from "@/Components/Global/SideNav/SideNav";
import TopNav from "@/Components/Global/TopNav/TopNav";
import { useState } from "react";


const MainLayoutProvider = ({ children }: any) => {

    const [open, setOpen] = useState(false);

    // Toogle Function To Toggle SideNav 
    const toggleNav = () => {
        console.log(open);
        // setOpen(!open);
        setOpen((prev) => !prev)
    }

    return (
        <div className="flex w-screen min-h-screen text-gray-400 bg-gray-900">
            <SideNav open={open} />
            <div className="flex flex-col flex-grow">
                <TopNav toggle={toggleNav} setOpen={setOpen} />
                <main className="flex-grow p-6 overflow-auto bg-[aliceblue]">
                    {/* Main Content  */}
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayoutProvider;