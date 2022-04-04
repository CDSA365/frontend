import React from "react";

const Loader = ({ load, className }) => {
    return (
        load && (
            <div
                className={`spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full ${
                    className ?? ""
                }`}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    );
};

export default Loader;
