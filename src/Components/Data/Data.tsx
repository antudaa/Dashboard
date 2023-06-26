'use client';

import { AiOutlineHome } from "react-icons/ai";
// Department & Designation 
import { FaRegBuilding } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";
import { BsBuildingAdd } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi";
import { MdAssignmentAdd } from "react-icons/md";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
// Employee 
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

// Onboarding 
import { FaPersonBooth } from "react-icons/fa";
// Leave 
import { BiPhoneOff } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";
// User 
import { AiOutlineUser } from "react-icons/ai";
// Attendance 
import { MdCoPresent } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";



export const MenuData = [
    {
        id: 1,
        icon: <AiOutlineHome />,
        title: "Home",
        link: "/",
        subMenu: [
        ]
    },
    {
        id: 2,
        icon: <FaRegBuilding />,
        title: "Department",
        link: "",
        subMenu: [
            {
                icon: <BiBuilding />,
                title: "Departmnets",
                link: "/",
            },
            {
                icon: <BsBuildingAdd />,
                title: "Add Department",
                link: "/",
            },
        ]
    },
    {
        id: 3,
        icon: <HiOutlineIdentification />,
        title: "Designation",
        link: "",
        subMenu: [
            {
                icon: <HiOutlineIdentification />,
                title: "Designations",
                link: "/",
            },
            {
                icon: <MdAssignmentAdd />,
                title: "Add Designaitons",
                link: "/",
            },
            {
                icon: <MdOutlineAssignmentTurnedIn />,
                title: "Assign Designation",
                link: "/",
            },
        ]
    },
    {
        id: 4,
        icon: <FaUserTie />,
        title: "Employee",
        link: "",
        subMenu: [
            {
                icon: <FaUsers />,
                title: "All Employee",
                link: "/",
            },
            {
                icon: <FaUserPlus />,
                title: "Add Employee",
                link: "/",
            },
            {
                icon: <FaUserEdit />,
                title: "Modify Employee",
                link: "/",
            },
        ]
    },
    {
        id: 5,
        icon: <FaPersonBooth />,
        title: "Onboarding",
        link: "",
        subMenu: [
            {
                icon: <AiOutlineHome />,
                title: "Onboarding",
                link: "/",
            },
            {
                icon: <AiOutlineHome />,
                title: "Add Department",
                link: "/",
            },
        ]
    },
    {
        id: 6,
        icon: <MdCoPresent />,
        title: "Attendance",
        link: "",
        subMenu: [
            {
                icon: <BiDetail />,
                title: "Attendance List",
                link: "/",
            },
            {
                icon: <AiOutlineFundView />,
                title: "Attendance View",
                link: "/",
            },
        ]
    },
    {
        id: 7,
        icon: <BiPhoneOff />,
        title: "Leave",
        link: "",
        subMenu: [
            {
                icon: <AiOutlineSetting />,
                title: "Leave Settings",
                link: "/",
            },
            {
                icon: <BsReceiptCutoff />,
                title: "Leave Applications",
                link: "/",
            },
        ]
    },
    {
        id: 8,
        icon: <AiOutlineUser />,
        title: "User",
        link: "",
        subMenu: [
            {
                icon: <FaUsers />,
                title: "User List",
                link: "/userList",
            },
            {
                icon: <MdOutlineAssignmentTurnedIn />,
                title: "Assign User",
                link: "/",
            },
        ]
    },
]