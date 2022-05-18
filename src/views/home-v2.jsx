import React from "react";
import { ReactComponent as IMG1SVG } from "../assets/img/growth.svg";
import { ReactComponent as IMG2SVG } from "../assets/img/testimonial.svg";
import { ReactComponent as IMG4SVG } from "../assets/img/success.svg";
import { SectionDivider } from "../components/section-divider";
import Testimonials from "../components/testimonials";
import IMG3 from "../assets/img/meditation.png";
import LOGO from "../assets/img/cdsa-logo.png";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Buttons = () => {
    return (
        <>
            <div className="flex-col space-y-6 md:flex md:space-x-6 md:space-y-0 md:flex-row justify-center">
                <Link to={"/request-a-demo"}>
                    <button className="mt-6 p-4 rounded font-bold inline-block bg-rose-900 text-white uppercase">
                        Request a demo
                    </button>
                </Link>
                <Link to={"/"}>
                    <button className="mt-6 p-4 rounded font-bold inline-block border-1 border-rose-900 bg-rose-50 text-rose-900 uppercase">
                        View more
                    </button>
                </Link>
            </div>
        </>
    );
};

const RequestDemoButton = ({ color }) => {
    color =
        color === "inverse"
            ? "border-yellow-600 bg-yellow-500 text-yellow-50 font-bold"
            : "border-rose-900 bg-rose-900 text-white";
    return (
        <div className="flex justify-center md:block md:justify-start">
            <Link to={"/request-a-demo"}>
                <button
                    className={`rounded p-4 inline-block border-1 ${color} uppercase font-bold`}
                >
                    Request a demo
                </button>
            </Link>
        </div>
    );
};

const Ticker = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 py-6">
            <div className="flex-row items-center py-6 text-white">
                <p className="text-center text-3xl font-black">3000+</p>
                <p className="text-center">Students</p>
            </div>
            <div className="flex-row items-center py-6 text-white">
                <p className="text-center text-3xl font-black">500+</p>
                <p className="text-center">Sessions per day</p>
            </div>
            <div className="flex-row items-center py-6 text-white">
                <p className="text-center text-3xl font-black">100+</p>
                <p className="text-center">Corporate Clients</p>
            </div>
        </div>
    );
};

const HomeV2 = () => {
    return (
        <div>
            <section className="min-h-screen-75 bg-rose-50 relative">
                <div className="container px-6 mx-auto md:flex content-center items-center space-y-6 md:space-x-6 md:h-[75vh]">
                    <div className="w-full md:w-1/2 py-12 text-center md:text-left">
                        <div className="logo flex justify-center md:block md:justify-start mb-8">
                            <img
                                src={LOGO}
                                alt="CDSA Logo"
                                className="w-40 h-40"
                            />
                        </div>
                        <h1 className="text-sky-900 text-[21px] md:text-[36px] font-black leading-tight">
                            Designed to transform you into a more confident
                            speaker
                        </h1>
                        <p className="text-md my-6 text-gray-600">
                            Welcome to Carpe Diem Skills Academy (CDSA). Ever
                            since our inception in 2016, we have placed all our
                            efforts on consistent and comprehensive training
                            because unlike any other skill, teaching
                            communication skills requires personal, dedicated
                            attention, and care. We are a bunch of sincere and
                            dedicated folks passionate about helping those who
                            come to us reach their full potential and
                            communicate with confidence. At CDSA, we treat one
                            another and our students as family.
                        </p>
                        <div className="space-y-6 md:flex md:space-x-6 md:space-y-0">
                            <RequestDemoButton />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <IMG1SVG />
                    </div>
                </div>
            </section>
            <section className="bg-rose-900">
                <div className="container mx-auto px-6">
                    <Ticker />
                </div>
            </section>
            <section className="py-24 relative">
                <div className="container px-6 md:flex mx-auto space-y-6 md:space-y-0 md:space-x-6">
                    <div className="w-full md:w-1/2 space-y-6  text-center">
                        <div className="space-y-6 p-5 py-8 hover:shadow-xl rounded-lg border-1 hover:shadow-slate-400">
                            <h1 className="text-[22px] md:text-[33px] text-sky-900 font-black leading-tight ">
                                Public speaking
                                <br />
                                class for kids
                            </h1>
                            <ul className="pl-3 space-y-3 mb-6">
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Personal Trainer Guidance
                                </li>
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Live Online Classes
                                </li>
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Fluency Guaranteed!
                                </li>
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Confidence in Communication Guaranteed!
                                </li>
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Stage Fear Eradication Guaranteed!
                                </li>
                            </ul>
                            <Buttons />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 text-center">
                        <div className="space-y-6 p-5 py-8 hover:shadow-xl rounded-lg border-1 hover:shadow-slate-400">
                            <h1 className="text-[22px] md:text-[33px] text-sky-900 font-black leading-tight ">
                                Spoken English
                                <br />
                                class for Adults
                            </h1>
                            <ul className="pl-3 space-y-3 mb-6">
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Personal Trainer Guidance
                                </li>
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Live Online Classes
                                </li>
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Fluency Guaranteed!
                                </li>
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Confidence in Communication Guaranteed!
                                </li>
                                <li className="font-bold text-sm md:text-xl text-gray-700">
                                    Stage Fear Eradication Guaranteed!
                                </li>
                            </ul>
                            <Buttons />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24">
                <div className="container px-6 md:flex space-y-6 md:space-x-6 mx-auto">
                    <div className="w-full md:w-1/2">
                        <img src={IMG3} alt="meditation" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-[33px] md:text-[55px] text-sky-900 font-black leading-tight ">
                            Learning levels
                        </h1>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 mb-12">
                            <li className="p-4 rounded border-1 text-center space-y-6 hover:bg-rose-50">
                                <h4 className="uppercase text-rose-900 font-bold text-xl">
                                    Beginner
                                </h4>
                                <p>
                                    30 Hours of Training 50% Improvement in
                                    Communication
                                </p>
                            </li>
                            <li className="p-4 rounded border-1 text-center space-y-6 hover:bg-rose-50">
                                <h4 className="uppercase text-rose-900 font-bold text-xl">
                                    Intermediate
                                </h4>
                                <p>
                                    60 Hours of Training 75% Improvement in
                                    Communication
                                </p>
                            </li>
                            <li className="p-4 rounded border-1 text-center space-y-6 hover:bg-rose-50">
                                <h4 className="uppercase text-rose-900 font-bold text-xl">
                                    Proficient
                                </h4>
                                <p>
                                    90 Hours of Training 90% Improvement in
                                    Communication
                                </p>
                            </li>
                        </ul>
                        <RequestDemoButton />
                    </div>
                </div>
            </section>
            <section className="bg-rose-900 py-16 pb-24 relative">
                <div className="container px-6 mx-auto md:flex space-y-10 md:space-x-10">
                    <div className="w-full md:px-6">
                        <h1 className="text-[33px] md:text-[55px] text-white text-center font-black leading-tight ">
                            What others say about us
                        </h1>
                        <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-white text-center">
                            We are who we are because of the transformation we
                            have made in our students’ lives.
                        </p>
                        <Testimonials />
                    </div>
                </div>
            </section>
            <SectionDivider
                fill={"#881337"}
                className="clear-both bg-rose-100"
            />
            <section className="bg-rose-100 py-24">
                <div className="container px-6 md:flex mx-auto">
                    <div className="w-full md:w-2/3 sapce-y-6">
                        <h1 className="text-[33px] md:text-[55px] text-red-900 font-black leading-tight ">
                            The CDSA Advantage
                        </h1>
                        <p className="text-xl">
                            We are one of the leading public speaking institutes
                            in Coimbatore.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Everyday Sessions
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Lifetime Assistance
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Expert Sessions
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Competitions
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Regular performance reviews
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Sessions by experts
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Daily outcome-based sessions
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Experiential learning through activities
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                Cambridge Accredited Training Centre
                                Certification
                            </li>
                            <li className="p-4 border-1 border-rose-800 rounded-md text-center items-center bg-rose-200 font-semibold">
                                One-on-one review sessions
                            </li>
                        </ul>
                        <RequestDemoButton />
                    </div>
                    <div className="w-full md:w-1/3">
                        <IMG4SVG />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HomeV2;
