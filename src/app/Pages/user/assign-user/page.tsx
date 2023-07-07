'use client';

import AssignUserTable from "@/Components/User/Tables/AssignUserTable/AssignUserTable";


const pages = () => {

    return (
        <div className="bg-[aliceblue] my-24 text-gray-700">
            {/* <div className="mb-16 mt-4 rounded-xl">
                <div className="flex justify-start pl-3 py-8">
                    <SearchUser />
                </div>
                <UserListTable />
                <div className="flex justify-end p-10">
                    <Paggination />
                </div>
            </div> */}
            <AssignUserTable />
        </div>
    );
};

export default pages;