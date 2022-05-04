import axios from "axios";
import React, { useState } from "react";
import { config } from "../config/config";
import Alert from "./alert";

const ContactForm = () => {
    const [error, setError] = useState(null);
    const [info, setInfo] = useState(null);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        let errorCount = 0;
        Object.values(formData).map((item) => {
            if (!item.length) errorCount++;
        });
        if (!errorCount) {
            if (error) setError(null);
            if (info) setInfo(null);
            axios
                .post(config.api.sendContactForm, formData)
                .then(() => {
                    setInfo("Your message has been sent");
                    setFormData({
                        first_name: "",
                        last_name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                })
                .catch(() =>
                    setError("Unable to send your message. Please try again!")
                );
        } else {
            if (info) setInfo(null);
            setError("All the fields are mandatory");
        }
    };

    return (
        <div className="flex flex-col space-y-6">
            <div className="w-full">
                <h3 className="text-white font-bold text-2xl">Contact us</h3>
            </div>
            <div className="w-full">
                {error && <Alert color="red">{error}</Alert>}
                {info && <Alert color="green">{info}</Alert>}
            </div>
            <div className="w-full space-y-4 md:flex md:space-x-4 md:space-y-0">
                <div className="w-full md:w-4/12">
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        onChange={handleChange}
                        value={formData.first_name || ""}
                        className="input w-full text-white bg-blueGray-600 border-blueGray-700 focus:bg-blueGray-600 focus:border-blueGray-500 focus:text-white placeholder-gray-400"
                    />
                </div>
                <div className="w-full md:w-4/12">
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last name"
                        onChange={handleChange}
                        value={formData.last_name || ""}
                        className="input w-full text-white bg-blueGray-600 border-blueGray-700 focus:bg-blueGray-600 focus:border-blueGray-500 focus:text-white placeholder-gray-400"
                    />
                </div>
                <div className="w-full md:w-4/12">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={formData.email || ""}
                        className="input w-full text-white bg-blueGray-600 border-blueGray-700 focus:bg-blueGray-600 focus:border-blueGray-500 focus:text-white placeholder-gray-400"
                    />
                </div>
            </div>

            <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                value={formData.subject || ""}
                className="input w-full text-white bg-blueGray-600 border-blueGray-700 focus:bg-blueGray-600 focus:border-blueGray-500 focus:text-white placeholder-gray-400"
            />
            <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="message"
                onChange={handleChange}
                value={formData.message || ""}
                className="input text-white bg-blueGray-600 border-blueGray-700 focus:bg-blueGray-600 focus:border-blueGray-500 focus:text-white placeholder-gray-400"
            />
            <button
                className="p-2 bg-sky-500 inline-block uppercase rounded-md font-semibold text-white"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default ContactForm;
