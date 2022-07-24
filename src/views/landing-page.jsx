import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import SEO from "../components/seo";

const Landing = () => {
    return (
        <>
            <SEO />
            <Header />
            <Outlet />
        </>
    );
};

export default Landing;
