import axios from "axios";
import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import { FaUser, FaVideo } from "react-icons/fa";
import { useSelector } from "react-redux";
import Placeholder from "../components/placeholder";
import { config } from "../config/config";

const ListClasses = () => {
    const user = useSelector((state) => state.user);
    const [cls, setCls] = useState([]);
    const [classes, setClasses] = useState(cls);
    const [activeBtn, setActiveBtn] = useState("SCHEDULED");

    useEffect(() => {
        axios
            .get(config.api.getStudentClasses + `/${user.id}`)
            .then(({ data }) => {
                console.log("CLASSES", data);
                setCls([...data]);
            })
            .catch((err) => console.log(err.response.data));
    }, []);

    useEffect(() => {
        setClasses(cls.filter((o) => o.progress_state === activeBtn));
    }, [cls, activeBtn]);

    return (
        <div>
            <div className="clearfix">
                <div
                    className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg float-right mb-4"
                    role="group"
                >
                    <button
                        type="button"
                        className={`btn-group rounded-l ${
                            activeBtn === "SCHEDULED" ? "btn-group-active" : ""
                        }`}
                        onClick={() => setActiveBtn("SCHEDULED")}
                    >
                        Scheduled
                    </button>
                    <button
                        type="button"
                        className={`btn-group rounded-r ${
                            activeBtn === "COMPLETED" ? "btn-group-active" : ""
                        }`}
                        onClick={() => setActiveBtn("COMPLETED")}
                    >
                        Completed
                    </button>
                </div>
            </div>
            {classes.length > 0 ? (
                classes.map((cls, i) => (
                    <div
                        key={i}
                        className="card mb-4 border-1 flex items-center p-0"
                    >
                        <div className="w-1/12 h-full flex flex-col items-center p-4 border-r-1 bg-slate-100">
                            <p className="font-semibold text-lg text-gray-500">
                                {moment(cls.start_time).format("MMM")}
                            </p>
                            <p className="font-bold text-2xl text-slate-700">
                                {moment(cls.start_time).format("DD")}
                            </p>
                            <p className="font-bold text-xs text-slate-700">
                                {moment(cls.start_time).format("YYYY")}
                            </p>
                        </div>
                        <div className="w-2/12 flex flex-col px-2 border-r-1 justify-evenly space-y-1">
                            <p className="text-xs text-center py-1 rounded-full bg-yellow-50 text-yellow-600">
                                START:{" "}
                                <b>{moment(cls.start_time).format("LT")}</b>
                            </p>
                            <p className="text-xs text-center py-1 rounded-full bg-red-50 text-red-500 ">
                                END: <b>{moment(cls.end_time).format("LT")}</b>
                            </p>
                            <p className="text-xs text-center py-0.5 rounded-full bg-slate-100 text-slate-500">
                                {cls.progress_state}
                            </p>
                        </div>
                        <div className="w-9/12 overflow-hidden p-4 space-y-1">
                            <p className="font-medium">{cls.title}</p>
                            <p className="font-normral text-sm block truncate">
                                {cls.description}
                            </p>
                            <div className="flex space-x-6">
                                <p className="text-xs text-zinc-400 flex space-x-2 items-center">
                                    <FaUser size={11} />
                                    <span>{cls.trainer_name}</span>
                                </p>
                                {cls.video_link && (
                                    <p className="text-xs text-zinc-400 flex space-x-2 items-center">
                                        <FaVideo size={11} />
                                        <a
                                            href={cls.video_link}
                                            target="_blank"
                                            title={cls.video_link}
                                        >
                                            <span className="truncate">
                                                {cls.video_link.substring(
                                                    0,
                                                    40
                                                )}
                                                {cls.video_link.length > 40 &&
                                                    "..."}
                                            </span>
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <Placeholder message={"No classes to list"} />
            )}
        </div>
    );
};

export default ListClasses;
