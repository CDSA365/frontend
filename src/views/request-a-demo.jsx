import React from "react";
import { ReactComponent as IMG1SVG } from "../assets/img/support.svg";

const RequestADemo = () => {
    return (
        <div className="items-center" style={{ height: "100vh" }}>
            <div className="container mx-auto h-full flex content-center items-center">
                <div className="w-6/12 space-y-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-sky-900">
                            Request a demo
                        </h1>
                    </div>
                    <div className="flex w-full space-x-6">
                        <div className="w-1/2">
                            <label
                                className="text-gray-600 text-sm"
                                htmlFor="first_name"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                className="input"
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                className="text-gray-600 text-sm"
                                htmlFor="last_name"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                className="input"
                            />
                        </div>
                    </div>
                    <div className="flex w-full space-x-6">
                        <div className="w-1/2">
                            <label
                                className="text-gray-600 text-sm"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                className="text-gray-600 text-sm"
                                htmlFor="phone"
                            >
                                Phone
                            </label>
                            <input
                                type="phone"
                                name="phone"
                                className="input"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label
                            className="text-gray-600 text-sm"
                            htmlFor="program"
                        >
                            Program
                        </label>
                        <select name="program" id="program" className="input">
                            <option value="kids">
                                Spoken english training for kids
                            </option>
                            <option value="adults">
                                Spoken english training for adults
                            </option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label
                            className="text-gray-600 text-sm"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            className="input"
                        />
                    </div>
                    <button className="p-2 bg-sky-500 text-white rounded inline-block font-bold uppercase">
                        Request a demo
                    </button>
                </div>
                <div className="w-6/12">
                    <IMG1SVG />
                </div>
            </div>
            <div className="container mx-auto pb-10">
                <hr className="my-6 border-blueGray-500" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © {new Date().getFullYear()} Carpe Diem
                            Skills Academy .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestADemo;
