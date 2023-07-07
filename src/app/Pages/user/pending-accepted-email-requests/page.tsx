'use client';

import PandingEmailRequest from "@/Components/User/Tables/PandingEmailRequestx/PandingEmailRequest";

const pages = () => {
    return (
        <div className="bg-[aliceblue] text-gray-700 mt-4 md:mt-16">
            <div className="mb-16 mt-4 rounded-xl">
                <PandingEmailRequest />
                <div className="flex justify-end p-10">
                    {/* Pagination */}
                </div>
            </div>
        </div>
    );
};

export default pages;