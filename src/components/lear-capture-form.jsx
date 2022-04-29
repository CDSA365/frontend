import axios from "axios";
import React, { useState } from "react";
import { config } from "../config/config";
import Alert from "./alert";

const LeadCaptureForm = ({ setIsOpen }) => {
    const [error, setError] = useState(null);
    const [info, setInfo] = useState(null);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        if (
            formData.first_name === "" ||
            formData.last_name === "" ||
            formData.phone === ""
        ) {
            if (info) setInfo(null);
            setError("First name, last name and phone fields are mandatory");
        } else {
            axios
                .post(config.api.addLeads, formData)
                .then(() => {
                    if (error) setError(null);
                    const message =
                        "Your requests for a demo has been submitted.";
                    setInfo(message);
                    setFormData({
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone: "",
                    });
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="relative bg-white rounded max-w-md mx-auto p-4">
            {error && <Alert color="red">{error}</Alert>}
            {info && <Alert color="blue">{info}</Alert>}
            <div className="flex space-x-4">
                <div>
                    <label
                        className="text-sm text-gray-500"
                        htmlFor="first_name"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        name="first_name"
                        className="input mb-4"
                        value={formData.first_name ?? ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label
                        className="text-sm text-gray-500"
                        htmlFor="last_name"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        name="last_name"
                        className="input mb-4"
                        value={formData.last_name ?? ""}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="w-full">
                    <label className="text-sm text-gray-500" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="input mb-4"
                        value={formData.email ?? ""}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="w-full">
                    <label className="text-sm text-gray-500" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="phone"
                        name="phone"
                        className="input mb-4"
                        value={formData.phone ?? ""}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full mb-3">
                <label htmlFor="concent" className="space-x-2 items-center">
                    <input type="checkbox" name="concent" />
                    <span className="text-xs leading-2">
                        By checking this box, you are concenting to receive
                        email communication from Carpe Diem Skills Academy
                    </span>
                </label>
            </div>
            <button onClick={handleSubmit} className="w-full btn btn-success">
                Request a demo
            </button>
        </div>
    );
};

export default LeadCaptureForm;
