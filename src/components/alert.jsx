import React, { useEffect, useState } from "react";

const Alert = ({ color, className, children }) => {
    const [alertColor, setAlertColor] = useState("bg-green-100 text-green-700");
    useEffect(() => {
        switch (color) {
            case "red":
                setAlertColor("bg-red-100 text-red-700");
                break;
            case "yellow":
                setAlertColor("bg-yellow-100 text-yellow-700");
                break;
            case "blue":
                setAlertColor("bg-blue-100 text-blue-700");
                break;
            default:
                break;
        }
    }, [color]);

    return (
        <div
            className={`rounded-lg py-4 px-6 mb-4 text-base ${alertColor} ${
                className ?? ""
            }`}
            role="alert"
        >
            {children}
        </div>
    );
};

export default Alert;
