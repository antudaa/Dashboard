'use client';

import GlobalButton from "@/Components/Buttons/GlobalButton/GlobalButton";


const page = () => {
    return (
        <div className="bg-[aliceblue] text-gray-700">
            <div className="flex justify-end pr-6">
                <GlobalButton text={"Add User"} />
            </div>
        </div>
    );
};

export default page;