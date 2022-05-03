import axios from "axios";
import React, { useEffect, useState } from "react";
import { config } from "../config/config";
import Emoji from "./emoji";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);

    const getAnnoucement = () => {
        axios
            .get(config.api.getAnnouncement + `/student`)
            .then(({ data }) => setAnnouncements(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAnnoucement();
    }, []);

    return (
        <div>
            {announcements.map((announcement, key) => (
                <div
                    className="bg-indigo-200 px-2 py-2 rounded-sm text-md mb-4"
                    key={key}
                >
                    <p className="font-normal mb-0">
                        <Emoji symbol="📢" label="hi!" /> {announcement.message}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Announcements;
