import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="bg-slate-200 py-6 min-h-screen w-full flex justify-center items-center">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
