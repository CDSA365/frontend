import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ContactForm from "./contact-form";

export default function Footer() {
    return (
        <>
            <footer className="relative bg-blueGray-900 ">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-wrap text-center lg:text-left py-16">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold text-white">
                                Let's keep in touch!
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-white">
                                Find us on any of these platforms, we respond
                                1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6 flex space-x-6">
                                <button
                                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <FaTwitter />
                                </button>
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <FaFacebook />
                                </button>
                                <button
                                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <FaInstagram />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <ContactForm />
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-700" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © {new Date().getFullYear()} Carpe
                                Diem Skills Academy
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
