import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    FaEnvelope,
    FaGlobe,
    FaHome,
    FaMap,
    FaMapMarker,
    FaPhoneAlt,
    FaWhatsapp,
} from "react-icons/fa";
import ListClasses from "./list-classes";
import PaymentAndHistory from "./payment-and-history";
import { setUser } from "../redux/actions/actions";
import Announcements from "../components/announcements";

const Profile = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setUser(null));
    };

    return (
        <div className="container mx-auto px-6">
            <div className="py-5">
                <div className="w-full flex space-x-6">
                    <div className="w-1/4 space-y-4">
                        <div className="space-y-2 my-4 border rounded text-sm">
                            <div className="p-4 bg-slate-100 border-b">
                                <p className="text-slate-600 uppercase font-semibold">
                                    Profile
                                </p>
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-xl font-semibold text-slate-700">
                                    {user.first_name} {user.last_name}
                                </p>
                                <hr />
                                <p>
                                    Student ID: <b>{user.id}</b>
                                </p>
                                <hr />
                                <p className="flex space-x-2 items-center">
                                    <FaEnvelope size={14} color="#6366f1" />
                                    <span>{user.email}</span>
                                </p>
                                <p className="flex space-x-2 items-center">
                                    <FaPhoneAlt size={14} color="#6366f1" />
                                    <span>{user.phone}</span>
                                </p>
                                <p className="flex space-x-2 items-center">
                                    <FaWhatsapp size={14} color="#6366f1" />
                                    <span>{user.whatsapp}</span>
                                </p>

                                <p className="flex space-x-2 items-center">
                                    <FaHome size={14} color="#6366f1" />
                                    <span>{user.address_one}</span>
                                </p>
                                <p className="flex space-x-2 items-center">
                                    <FaHome size={14} color="#6366f1" />
                                    <span>{user.address_two}</span>
                                </p>
                                <p className="flex space-x-2 items-center">
                                    <FaMapMarker size={14} color="#6366f1" />
                                    <span>{user.city}</span>
                                </p>
                                <p className="flex space-x-2 items-center">
                                    <FaMap size={14} color="#6366f1" />
                                    <span>{user.district}</span>
                                </p>
                                <p className="flex space-x-2 items-center">
                                    <FaGlobe size={14} color="#6366f1" />
                                    <span>
                                        {user.state} - {user.pincode}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button
                            className="w-full btn btn-primary"
                            onClick={logout}
                        >
                            Sign out
                        </button>
                    </div>
                    <div className="w-3/4">
                        <div className="mt-4">
                            <Announcements />
                        </div>
                        <ul
                            className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                            id="tabs-tabFill"
                            role="tablist"
                        >
                            <li
                                className="nav-item flex-auto text-center"
                                role="presentation"
                            >
                                <a
                                    href="#tabs-homeFill"
                                    className="tab-link active"
                                    id="tabs-home-tabFill"
                                    data-bs-toggle="pill"
                                    data-bs-target="#tabs-homeFill"
                                    role="tab"
                                    aria-controls="tabs-homeFill"
                                    aria-selected="true"
                                >
                                    Classes
                                </a>
                            </li>
                            <li
                                className="nav-item flex-auto text-center"
                                role="presentation"
                            >
                                <a
                                    href="#tabs-profileFill"
                                    className="tab-link"
                                    id="tabs-profile-tabFill"
                                    data-bs-toggle="pill"
                                    data-bs-target="#tabs-profileFill"
                                    role="tab"
                                    aria-controls="tabs-profileFill"
                                    aria-selected="false"
                                >
                                    Payment
                                </a>
                            </li>
                            {/* <li
                                className="nav-item flex-auto text-center"
                                role="presentation"
                            >
                                <a
                                    href="#tabs-messagesFill"
                                    className="tab-link"
                                    id="tabs-messages-tabFill"
                                    data-bs-toggle="pill"
                                    data-bs-target="#tabs-messagesFill"
                                    role="tab"
                                    aria-controls="tabs-messagesFill"
                                    aria-selected="false"
                                >
                                    Messages
                                </a>
                            </li> */}
                        </ul>
                        <div className="tab-content" id="tabs-tabContentFill">
                            <div
                                className="tab-pane fade show active"
                                id="tabs-homeFill"
                                role="tabpanel"
                                aria-labelledby="tabs-home-tabFill"
                            >
                                <ListClasses />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tabs-profileFill"
                                role="tabpanel"
                                aria-labelledby="tabs-profile-tabFill"
                            >
                                <PaymentAndHistory />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tabs-messagesFill"
                                role="tabpanel"
                                aria-labelledby="tabs-profile-tabFill"
                            >
                                Tab 3 content fill
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
