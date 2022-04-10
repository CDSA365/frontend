import React from "react";

const Placeholder = ({ message }) => {
    return (
        <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-400 flex justify-center items-center rounded-md text-slate-400 font-semibold">
            {message ?? ""}
        </div>
    );
};

export default Placeholder;
