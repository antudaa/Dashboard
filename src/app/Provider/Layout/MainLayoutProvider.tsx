'use client';

import SideNav from "@/Components/Global/SideNav/SideNav";
import TopNav from "@/Components/Global/TopNav/TopNav";
import { useState } from "react";
import AuthGuardLayout from "./AuthGuardLayout ";
import { store } from "@/Redux/store";


const MainLayoutProvider = ({ children }: any) => {

    const [open, setOpen] = useState(false);
    const toggleNav = () => {
        setOpen((prev) => !prev)
    }

    return (
        // <AuthGuardLayout store={store}>
        <div className="flex flex-col bg-[aliceblue] md:flex-row h-screen">
            {/* Sidebar */}
            <aside
                className={`${open ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 h-screen md:block fixed top-0 left-0 bottom-0  md:static md:w-auto transition-transform duration-500 ease-in-out`}>
                {/* Sidebar content goes here */}
                <SideNav />
            </aside>

            {/* Main content */}
            <main className="md:flex-1">
                {/* Top navigation */}
                <header className="flex justify-between items-center">
                    {/* Top navigation content goes here */}
                    <TopNav toggleNav={toggleNav} open={open} />
                </header>

                {/* Content */}
                <div className="pl-6 h-full pt-6 ml-auto overflow-y-auto overflow-x-auto">
                    {children}
                </div>
            </main>
        </div>
        // {/* // </AuthGuardLayout> */}
    );
};

export default MainLayoutProvider;