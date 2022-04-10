import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((state) => state.user);
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
                <button
                    className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        className="w-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </button>
                <div
                    className="collapse navbar-collapse flex-grow items-center"
                    id="navbarSupportedContent1"
                >
                    <a
                        className="text-xl text-white pr-2 font-semibold"
                        href="/"
                    >
                        Navbar
                    </a>
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li className="nav-item p-2">
                            <a className="nav-link text-white" href="/">
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a
                                className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                                href="/"
                            >
                                Team
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a
                                className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                                href="/"
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center relative">
                    <div className="dropdown relative">
                        {user.isLoggedIn ? (
                            <Link to="/profile">
                                <FaUserAlt size={18} />
                            </Link>
                        ) : (
                            <Link to="/login">
                                <FaSignInAlt size={18} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
