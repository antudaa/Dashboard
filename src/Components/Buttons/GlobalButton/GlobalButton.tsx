'use client';
import Link from "next/link";
import "./GlobalButton.modul.css"

const GlobalButton = ({ text, link }: any) => {
    return (
        <Link href={`${link}`} className="ripple">{text}</Link>
    );
};

export default GlobalButton;