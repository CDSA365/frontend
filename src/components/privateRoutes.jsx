import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Landing from "../views/landing-page";

const PrivateRoutes = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    console.log(isLoggedIn);
    return isLoggedIn ? <Landing /> : <Navigate to="/" />;
};

export default PrivateRoutes;
