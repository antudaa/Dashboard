'use client';

import UserDetailsCard from "@/Components/Cards/UserManagement/UserDetailsCard/UserDetailsCard";
import { useRouter } from "next/navigation";

const page = ({ params }: any) => {

    const router = useRouter();

    const logout = async () => {
        try {
            
        } catch (error: any) {
            console.log(error.message  )
        }
    }

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