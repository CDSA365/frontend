import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import bgCurls from "../assets/img/bg-curls.png";
import logo from "../assets/img/cdsa-logo.png";
import { FaStar } from "react-icons/fa";
import Testimonials from "../components/testimonials";
import Modal from "../components/modal";
import LeadCaptureForm from "../components/lear-capture-form";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <main>
                <div
                    className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 bg-sky-500"
                    style={{
                        backgroundImage: "url(" + bgCurls + ")",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="space-y-6">
                                    <div>
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="w-48 h-48 mx-auto"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-blueGray-800 font-semibold text-5xl font-bree">
                                            Carpe Diem Skills Academy
                                        </h1>
                                        <p className="mt-4 text-lg text-white">
                                            WELCOME TO THE #1 PUBLIC SPEAKING
                                            ACADEMY IN THE WORLD
                                        </p>
                                    </div>
                                    <div className="flex justify-center space-x-6">
                                        <Link to={"/enroll"}>
                                            <button className="bg-blueGray-800 rounded-lg p-4 text-white w-64 font-bold font-sriracha">
                                                ENROLL NOW
                                            </button>
                                        </Link>
                                        <button
                                            className="bg-blueGray-800 rounded-lg p-4 text-white w-64 font-bold font-sriracha"
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            REQUEST A DEMO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="pb-20 bg-rose-500 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <FaStar />
                                        </div>
                                        <h6 className="text-xl font-semibold font-sriracha text-blueGray-800">
                                            Public Speaking Online Classes for
                                            Kids
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Watch your kid transform as a
                                            Fluent, Public Speaker in 3 months
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <FaStar />
                                        </div>
                                        <h6 className="text-xl font-semibold font-sriracha text-blueGray-800">
                                            Spoken English and Public Speaking
                                            for Adults
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            You will voice your opinions with
                                            utmost Confidence in front of a
                                            crowd or on stage within 3 months
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center my-16 space-y-6">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto space-y-6 text-white text-bold">
                                <h3 className="text-3xl mb-2 font-semibold leading-normal font-bree">
                                    Public Speaking Classes for Kids
                                </h3>
                                <ul className="list-disc pl-3 space-y-3 font-sriracha">
                                    <li>Personal Trainer Guidance</li>
                                    <li>Live Online Classes</li>
                                    <li>Fluency Guaranteed!</li>
                                    <li>
                                        Confidence in Communication Guaranteed!
                                    </li>
                                    <li>Stage Fear Eradication Guaranteed!</li>
                                </ul>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                                    <img
                                        alt="..."
                                        src={require("../assets/img/kids.jpg")}
                                        className="w-full align-middle rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative py-20 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap space-y-6">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src={require("../assets/img/adults.jpg")}
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12 space-y-4">
                                    <h3 className="text-3xl font-semibold text-white font-bree">
                                        Spoken English &amp; Public Speaking for
                                        Adults
                                    </h3>
                                    <ul className="list-disc space-y-3 pl-3 text-white font-sriracha">
                                        <li>Personal Trainer Guidance</li>
                                        <li>Live Online Classes</li>
                                        <li>Fluency Guaranteed!</li>
                                        <li>
                                            Confidence in Communication
                                            Guaranteed!
                                        </li>
                                        <li>
                                            Stage Fear Elimination Guaranteed!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20 pb-48 bg-emerald-500">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold font-bree text-blueGray-800">
                                    CDSA Advantage
                                </h2>
                                <p className="leading-relaxed m-4 text-white font-sriracha text-xl">
                                    Communication has to be learnt on a
                                    consistent basis and we promise to engage
                                    you every single day of your stay with us.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="p-6 lg:mb-6 rounded-lg bg-blueGray-200 border border-blueGray-300">
                                    <div className="text-center">
                                        <h5 className="text-xl font-bold font-bree">
                                            Everyday Sessions
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="p-6 lg:mb-6 rounded-lg bg-blueGray-200 border border-blueGray-300">
                                    <div className="text-center">
                                        <h5 className="text-xl font-bold font-bree">
                                            Lifetime Assistance
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="p-6 lg:mb-6 rounded-lg bg-blueGray-200 border border-blueGray-300">
                                    <div className="text-center">
                                        <h5 className="text-xl font-bold font-bree">
                                            Expert Sessions
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="p-6 lg:mb-6 rounded-lg bg-blueGray-200 border border-blueGray-300">
                                    <div className="text-center">
                                        <h5 className="text-xl font-bold font-bree">
                                            Competitions
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                                    <div className="p-6 lg:mb-6 rounded-lg bg-blueGray-200 border-1 border-blueGray-300">
                                        <div className="text-center">
                                            <h5 className="text-xl font-bold font-bree">
                                                Cambridge Accredited Training
                                                Centre Certification{" "}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-20 relative block bg-blueGray-800">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-24 mb-8">
                        <Testimonials />
                    </div>
                </section>
                <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4 flex justify-center">
                                <Link to={"/enroll"}>
                                    <button className="p-4 bg-sky-500 text-white font-bold w-64 rounded-lg font-sriracha">
                                        ENROLL
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <LeadCaptureForm setIsOpen={setIsOpen} />
            </Modal>
        </>
    );
};

export default Home;
