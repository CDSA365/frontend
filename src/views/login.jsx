import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "../components/alert";
import { config } from "../config/config";
import { setUser } from "../redux/actions/actions";

const Login = () => {
    const [formData, setFormData] = useState({});
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [error, setError] = useState(null);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        !formData.email ? setEmailInvalid(true) : setEmailInvalid(false);
        !formData.password
            ? setPasswordInvalid(true)
            : setPasswordInvalid(false);
        if (formData?.email?.length && formData?.password?.length) {
            axios
                .post(config.api.login, formData)
                .then(({ data }) => {
                    if (error) setError(null);
                    console.log(data);
                    dispatch(setUser({ ...data, isLoggedIn: true })).then(() =>
                        navigate("/profile")
                    );
                })
                .catch((err) => setError(err.response.data.message))
                .finally(() => setFormData({}));
        }
    };

    return (
        <div className="container mx-auto flex h-screen justify-center items-center">
            <div className="card w-1/4 flex flex-col space-y-4">
                {error && <Alert color="red">{error}</Alert>}
                <div className="w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email ?? ""}
                        className={`input ${emailInvalid ? "invalid" : ""}`}
                        onChange={handleChange}
                    />
                    {emailInvalid && (
                        <span className="text-xs text-red-400">
                            This field is required!
                        </span>
                    )}
                </div>
                <div className="w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password ?? ""}
                        className={`input ${passwordInvalid ? "invalid" : ""}`}
                        onChange={handleChange}
                    />
                    {passwordInvalid && (
                        <span className="text-xs text-red-400">
                            This field is required!
                        </span>
                    )}
                </div>
                <div className="pt-4">
                    <button
                        className="btn btn-primary w-full"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
