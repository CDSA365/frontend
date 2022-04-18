import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/spinner";
import { config } from "../config/config";
import Alert from "../components/alert";

const Enroll = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        whatsapp: "",
        dob: "",
        address_one: "",
        address_two: "",
        city: "",
        district: "",
        state: "",
        pincode: "",
        aadhar_number: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleOnchange = (e) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        setLoading(true);
        setSubmitDisabled(true);
        axios
            .post(config.api.registerStudent, formData)
            .then(() => {
                setError(null);
                setSubmitDisabled(false);
                setLoading(false);
                setShowSuccessMessage(true);
            })
            .catch((err) => {
                console.log(err);
                setError(err.response.data);
                setSubmitDisabled(false);
                setLoading(false);
            })
            .finally(() => setFormData({}));
    };

    useEffect(() => {
        if (
            formData.first_name &&
            formData.last_name &&
            formData.email &&
            formData.phone &&
            formData.whatsapp &&
            formData.address_one &&
            formData.city &&
            formData.district &&
            formData.state &&
            formData.pincode &&
            formData.aadhar_number &&
            formData.dob &&
            formData.password
        ) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }, [formData]);

    return (
        <div className="container mx-auto flex h-screen justify-center items-center p-4">
            <div className="card py-5 md:w-1/2">
                <div className="w-full space-y-4">
                    {showSuccessMessage && (
                        <Alert color="green">
                            <b>Account created!</b>
                            <br /> We have sent a verification link to your
                            email. Please click the link on the email to verify
                            your account
                        </Alert>
                    )}
                    {error && <Alert color="red">{error}</Alert>}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="first_name"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name ?? ""}
                                className={`input `}
                                onChange={handleOnchange}
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="last_name"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="dob"
                            >
                                Date of birth
                            </label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob ?? "0000-00-00"}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="phone"
                            >
                                Phone number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                        <div className="w-full">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="whatsapp"
                            >
                                Whatsapp number
                            </label>
                            <input
                                type="tel"
                                name="whatsapp"
                                value={formData.whatsapp ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label
                            className="text-sm font-semibold text-gray-400"
                            htmlFor="address_one"
                        >
                            Address line 1
                        </label>
                        <input
                            type="text"
                            name="address_one"
                            value={formData.address_one ?? ""}
                            className={`input`}
                            onChange={handleOnchange}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="address_two"
                            >
                                Address line 2
                            </label>
                            <input
                                type="text"
                                name="address_two"
                                value={formData.address_two ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="city"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/3">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="district"
                            >
                                District
                            </label>
                            <input
                                type="text"
                                name="district"
                                value={formData.district ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                        <div className="w-1/3">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="state"
                            >
                                State
                            </label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                        <div className="w-1/3">
                            <label
                                className="text-sm font-semibold text-gray-400"
                                htmlFor="pincode"
                            >
                                Pincode
                            </label>
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode ?? ""}
                                className={`input`}
                                onChange={handleOnchange}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label
                            className="text-sm font-semibold text-gray-400"
                            htmlFor="aadhar_number"
                        >
                            Aadhar number
                        </label>
                        <input
                            type="text"
                            name="aadhar_number"
                            value={formData.aadhar_number ?? ""}
                            className={`input`}
                            onChange={handleOnchange}
                        />
                    </div>
                    <div className="w-full">
                        <label
                            className="text-sm font-semibold text-gray-400"
                            htmlFor="password"
                        >
                            Create Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password ?? ""}
                            className={`input`}
                            onChange={handleOnchange}
                        />
                    </div>
                    <div>
                        <button
                            className="btn btn-primary w-full"
                            onClick={() => handleSubmit()}
                            disabled={submitDisabled}
                        >
                            Create account <Loader load={loading} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enroll;
