import axios from "axios";
import React, { useState } from "react";
import { ReactComponent as IMG1SVG } from "../assets/img/support.svg";
import Alert from "../components/alert";
import { config } from "../config/config";

const RequestADemo = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        program: "kids",
    });
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        let errorCount = 0;

        Object.values(formData).map((item) => {
            if (!item.length) errorCount++;
        });

        if (!errorCount) {
            axios
                .post(config.api.addLeads, formData)
                .then(() => {
                    if (error) setError(null);
                    setInfo("Your request for a demo has been submited");
                })
                .catch(() => {
                    if (info) setInfo(null);
                    setError("Error sending request! Please try again");
                });
        } else {
            setError("Please fill all the required(*) fields");
        }
    };

    return (
        <div className="items-center md:h-[100vh] py-6">
            <div className="container mx-auto ">
                {error && (
                    <Alert
                        color="red"
                        className="rounded-none -mt-6 md:mt-0 text-sm"
                    >
                        {error}
                    </Alert>
                )}
                {info && (
                    <Alert
                        color="green"
                        className="rounded-none -mt-6 md:mt-0 text-sm"
                    >
                        {info}
                    </Alert>
                )}
            </div>
            <div className="container mx-auto h-full md:flex content-center items-center px-4 md:px-0">
                <div className="w-full md:w-6/12 space-y-6">
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
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                className="input"
                                value={formData.first_name || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                className="text-gray-600 text-sm"
                                htmlFor="last_name"
                            >
                                Last name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                className="input"
                                value={formData.last_name || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-full space-x-6">
                        <div className="w-1/2">
                            <label
                                className="text-gray-600 text-sm"
                                htmlFor="email"
                            >
                                Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                value={formData.email || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                className="text-gray-600 text-sm"
                                htmlFor="phone"
                            >
                                Phone<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="phone"
                                name="phone"
                                className="input"
                                value={formData.phone || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label
                            className="text-gray-600 text-sm"
                            htmlFor="program"
                        >
                            Program<span className="text-red-500">*</span>
                        </label>
                        <select
                            name="program"
                            id="program"
                            className="input"
                            value={formData.program || ""}
                            onChange={handleChange}
                        >
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
                            value={formData.message || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="p-2 bg-sky-500 text-white rounded inline-block font-bold uppercase"
                        onClick={handleSubmit}
                    >
                        Request a demo
                    </button>
                </div>
                <div className="w-full md:w-6/12">
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
