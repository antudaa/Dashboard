'use client';

import Link from "next/link";

const SideNavButton = ({ toggleDropdown, id, icon, title, }: any) => {
    return (
        <Link onClick={() => toggleDropdown(id)} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <li>
                {icon}
            </li>

            <span className="mx-2 text-sm font-medium">{title}</span>
        </Link>
    );
};

export default SideNavButton;