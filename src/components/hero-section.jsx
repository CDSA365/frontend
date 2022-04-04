import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="bg-yellow-100 text-gray-800 py-20 px-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="w-full ">
                        <h1 className="text-5xl font-bold mt-0 mb-6">
                            Heading
                        </h1>
                        <h3 className="text-2xl font-bold mb-8">Subeading</h3>
                        <Link
                            className="btn btn-primary"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            to="/enroll"
                            role="button"
                        >
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
