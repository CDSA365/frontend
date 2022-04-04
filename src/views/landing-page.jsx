import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Landing = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Landing;
