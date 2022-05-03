import React from "react";
import { ReactComponent as IMG1SVG } from "../assets/img/growth.svg";
import { ReactComponent as IMG2SVG } from "../assets/img/testimonial.svg";
import { ReactComponent as IMG4SVG } from "../assets/img/success.svg";
import { SectionDivider } from "../components/section-divider";
import Testimonials from "../components/testimonials";
import IMG3 from "../assets/img/meditation.png";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const HomeV2 = () => {
    return (
        <div>
            <section className="min-h-screen-75 bg-rose-50">
                <div
                    className="container h-full mx-auto flex content-center items-center space-x-6"
                    style={{ height: "75vh" }}
                >
                    <div className="w-1/2">
                        <p className="uppercase text-sm font-bold">
                            CARPE DIEM SKILLS ACADEMY
                        </p>
                        <h1 className="text-sky-900 text-[55px] font-black leading-tight">
                            Making Your Childs World Better
                        </h1>
                        <p className="text-md my-6 text-gray-600">
                            Replenish seasons may male hath fruit beast were
                            seas saw you arrie said man beast whales his void
                            unto last session for bite. Set have great you'll
                            male grass yielding yielding man
                        </p>
                        <div className="flex space-x-6">
                            <Link to={"/enroll"}>
                                <button className="rounded p-4 inline-block border-1 border-sky-900 uppercase">
                                    Enroll now
                                </button>
                            </Link>
                            <Link to={"/request-a-demo"}>
                                <button className="rounded p-4 inline-block border-1 border-rose-900 bg-rose-900 text-white uppercase">
                                    Request a demo
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <IMG1SVG />
                    </div>
                </div>
            </section>
            <SectionDivider
                fill={"#fff1f2"}
                className="clear-both bg-rose-900"
            />
            <section className="bg-rose-900 py-24 pb-32 -mt-18 min-h-[400px]">
                <div className="container mx-auto grid grid-cols-4 gap-6 mt-18">
                    <div className="space-y-6">
                        <h1 className="text-[55px] text-white font-black leading-tight ">
                            Training Solutions
                        </h1>
                        <p className="text-white">
                            Replenish seasons may male hath fruit beast were
                            seas saw you arrie said man beast whales his void
                            unto last session for bite.
                        </p>
                        <Link to={"/request-a-demo"}>
                            <button className="w-full p-4 inline-block bg-yellow-300 text-red-900 rounded uppercase font-bold">
                                Request a demo
                            </button>
                        </Link>
                    </div>
                    <div className="shadow-box p-4 rounded bg-yellow-50 space-y-6">
                        <h4 className="font-black text-sky-900">
                            Communication Skills Training
                        </h4>
                        <ul className="text-rose-800 list-disc pl-8">
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Incremental learning
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Vocabulary building
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Discussions / debates
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Presentations
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Sentence structure and grammar
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Listening, Speaking, Reading and Writing (LSRW)
                                Model
                            </li>
                        </ul>
                    </div>
                    <div className="shadow-box p-4 rounded bg-yellow-50 space-y-6">
                        <h4 className="font-black text-sky-900">
                            Business English Training
                        </h4>
                        <ul className="text-rose-800 list-disc pl-8">
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Effective speaking and writing skills
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Business vocabulary
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Presentation Skills
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Public speaking skills
                            </li>
                        </ul>
                    </div>
                    <div className="shadow-box p-4 rounded bg-yellow-50 space-y-6">
                        <h4 className="font-black text-sky-900">
                            Cambridge English Exams Training
                        </h4>
                        <ul className="text-rose-800 list-disc pl-8">
                            <li className="py-2 font-bold -mx-4 text-sm">
                                Young Learners English <br />
                                <span className="text-xs">
                                    Pre A1 – Starter, A1 – Movers, A2 – Flyers
                                </span>
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                A2 – Key for Schools (KET)
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                B1 – Preliminary for Schools (PET)
                            </li>
                            <li className="py-2 font-bold -mx-4 text-sm">
                                BEC – Business English Certificate
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-rose-900 py-16 pb-24 relative">
                <div className="container mx-auto flex space-x-10">
                    <div className="w-1/3">
                        <IMG2SVG className="w-full h-full" />
                    </div>
                    <div className="w-2/3 px-6">
                        <h1 className="text-[55px] text-white font-black leading-tight ">
                            What others say about us
                        </h1>
                        <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-white">
                            We are who we are because of the transformations
                            that we have made in our students lives. Please go
                            through their opinion about us.
                        </p>
                        <Testimonials />
                    </div>
                </div>
            </section>
            <section className="py-24 relative">
                <div className="container flex mx-auto space-x-6">
                    <div className="w-1/2 space-y-6 text-center">
                        <div className="space-y-6 p-5 py-8 hover:shadow-xl rounded-lg border-1 hover:shadow-slate-400">
                            <h1 className="text-[33px] text-sky-900 font-black leading-tight ">
                                Public speaking
                                <br />
                                class for kids
                            </h1>
                            <ul className="pl-3 space-y-3">
                                <li className="font-bold text-xl text-gray-700">
                                    Personal Trainer Guidance
                                </li>
                                <li className="font-bold text-xl text-gray-700">
                                    Live Online Classes
                                </li>
                                <li className="font-bold text-xl text-gray-700">
                                    Fluency Guaranteed!
                                </li>
                                <li className="font-bold text-xl text-gray-700">
                                    Confidence in Communication Guaranteed!
                                </li>
                                <li className="font-bold text-xl text-gray-700">
                                    Stage Fear Eradication Guaranteed!
                                </li>
                            </ul>
                            <Link to={"/request-a-demo"}>
                                <button className="p-4 rounded font-bold inline-block bg-rose-900 text-white uppercase">
                                    Request a demo
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 space-y-6 text-center">
                        <div className="space-y-6 p-5 py-8 hover:shadow-xl rounded-lg border-1 hover:shadow-slate-400">
                            <h1 className="text-[33px] text-sky-900 font-black leading-tight ">
                                Spoken English
                                <br />
                                class for Adults
                            </h1>
                            <ul className="pl-3 space-y-3">
                                <li className="font-bold text-xl text-gray-700">
                                    Personal Trainer Guidance
                                </li>
                                <li className="font-bold text-xl text-gray-700">
                                    Live Online Classes
                                </li>
                                <li className="font-bold text-xl text-gray-700">
                                    Fluency Guaranteed!
                                </li>
                                <li className="font-bold text-xl text-gray-700">
                                    Confidence in Communication Guaranteed!
                                </li>
                                <li className="font-bold text-xl text-gray-700">
                                    Stage Fear Eradication Guaranteed!
                                </li>
                            </ul>
                            <Link to={"/request-a-demo"}>
                                <button className="p-4 rounded font-bold inline-block bg-rose-900 text-white uppercase">
                                    Request a demo
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24">
                <div className="container flex space-x-6 mx-auto">
                    <div className="w-1/2">
                        <img src={IMG3} alt="meditation" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-[55px] text-sky-900 font-black leading-tight ">
                            Learning levels
                        </h1>
                        <ul className="grid grid-cols-3 gap-6 mt-24">
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
                                    Profecient
                                </h4>
                                <p>
                                    90 Hours of Training 90% Improvement in
                                    Communication
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <SectionDivider
                fill={"#ffffff"}
                className="clear-both bg-rose-100"
            />
            <section className="bg-rose-100 py-24">
                <div className="container flex mx-auto">
                    <div className="w-2/3 sapce-y-6">
                        <h1 className="text-[55px] text-red-900 font-black leading-tight ">
                            CDSA Advantage
                        </h1>
                        <p className="text-xl">
                            Communication has to be learnt on a consistent basis
                            and we promise
                            <br />
                            to engage you every single day of your stay with us.
                        </p>
                        <ul className="grid grid-cols-3 gap-6 my-12">
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
                                Cambridge Accredited Training Centre
                                Certification
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <IMG4SVG />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HomeV2;
