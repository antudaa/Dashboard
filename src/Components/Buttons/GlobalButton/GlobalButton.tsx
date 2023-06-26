'use client';
import "./GlobalButton.modul.css"

const GlobalButton = ({ text }: any) => {
    return (
        <button className="ripple">{text}</button>
    );
};

export default GlobalButton;