import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((state) => state.user);
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
                <div className="flex-grow items-center">
                    <Link
                        className="text-xl text-white pr-2 font-semibold"
                        to="/"
                    >
                        CDSA365
                    </Link>
                </div>
                <div className="flex items-center relative">
                    <div className="dropdown relative">
                        {user.isLoggedIn ? (
                            <Link
                                to="/profile"
                                className="flex items-center space-x-3"
                            >
                                <FaUserAlt size={18} /> <p>Profile</p>
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="flex items-center space-x-3"
                            >
                                <FaSignInAlt size={18} /> <p>Sign In</p>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
