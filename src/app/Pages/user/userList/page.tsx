'use client';

import GlobalButton from "@/Components/Buttons/GlobalButton/GlobalButton";
import UserListTable from "@/Components/User/Tables/UserListTable/UserListTable";



const page = () => {

    return (
        <div className="bg-[aliceblue] text-gray-700 overflow-x-hidden">
            <div className="flex gap-6 justify-end pr-6 my-6">
                <GlobalButton text={"Assign User"} link={"/Pages/user/assign-user"} className="" />
                <GlobalButton text={"Send Inivitation"} />
            </div>
            {/* Table Information */}
            <UserListTable />
        </div>
    );
};

export default page;