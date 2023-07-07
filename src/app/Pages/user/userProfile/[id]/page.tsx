'use client';

import UserDetailsCard from "@/Components/Cards/UserManagement/UserDetailsCard/UserDetailsCard";

const page = ({ params }: any) => {
    return (
        <div>
            <h2 className="text-2xl text-gray-800">
                {params.id}
            </h2>
            <UserDetailsCard />
        </div>
    );
};

export default page;