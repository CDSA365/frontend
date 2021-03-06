import axios from "axios";
import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import Modal from "../components/modal";
import Placeholder from "../components/placeholder";
import { config } from "../config/config";
import QR from "../assets/img/UPIQR.png";

const { REACT_APP_PAYMENT_KEY, REACT_APP_PAYMENT_URL } = process.env;

const PaymentAndHistory = () => {
    const user = useSelector((state) => ({ ...state.user }));
    const [payments, setPayments] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [paymentMode, setPaymentMode] = useState("card");
    const [showQrCode, setShowQrCode] = useState(false);
    const [feeData, setFeeData] = useState({});

    const loadRazorPay = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = REACT_APP_PAYMENT_URL;
            document.head.appendChild(script);
            script.onload = () => resolve(true);
            script.onerror = () => reject(false);
        });
    };

    const postLoadFunction = (paymentData) => {
        const option = {
            key: REACT_APP_PAYMENT_KEY,
            amount: feeData.fee,
            currency: "INR",
            name: "Carpe Diem Skills Academy",
            description: `Class fee for ${user.first_name} ${user.last_name}`,
            image: "",
            order_id: paymentData.id,
            handler: (response) => {
                verifyPayment({
                    ...response,
                    id: user.id,
                    paid: feeData.fee * 100,
                    gap: feeData.gap,
                    period: feeData.period,
                    status: "paid",
                    error_code: null,
                });
            },
            prefill: {
                name: `${user.first_name} ${user.last_name}`,
                email: user.email,
                contact: user.phone,
            },
            theme: {
                color: "#06b6d4",
            },
        };
        const razorPay = new window.Razorpay(option);
        razorPay.on("payment.failed", (response) => {
            captureFailedPayment(response);
        });
        razorPay.open();
    };

    const initiatePayment = () => {
        axios
            .post(config.api.makePayment, {
                amount: feeData.fee,
                student_id: user.id,
            })
            .then(({ data }) => {
                loadRazorPay()
                    .then(() => postLoadFunction(data))
                    .catch(() => {
                        throw new Error("Unable to initiate payment");
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const verifyPayment = (response) => {
        axios
            .post(config.api.verifyPayment, response)
            .then(() => fetchPaymentHistory())
            .catch((err) => console.log(err.response.data));
    };

    const captureFailedPayment = (response) => {
        axios
            .post(config.api.capturePaymentFailure, {
                ...response.error,
                status: "failed",
            })
            .then(() => fetchPaymentHistory())
            .catch((err) => console.log(err.response.data));
    };

    const fetchPaymentHistory = () => {
        axios
            .get(config.api.getPaymentHistory + `/${user.id}`)
            .then(({ data }) => {
                console.log(data);
                setPayments(data);
            })
            .catch((err) => console.log(err.response.data));
    };

    const handlePaymentModeChange = (e) => setPaymentMode(e.target.value);

    const makePayment = () => {
        if (paymentMode === "card") {
            initiatePayment();
        } else {
            setShowQrCode(true);
        }
    };

    const fetchFeeData = () => {
        axios
            .get(config.api.getFeeData + `/${user.id}`)
            .then(({ data }) => setFeeData(data));
    };

    useEffect(() => {
        fetchPaymentHistory();
        fetchFeeData();
    }, []);

    useEffect(() => {
        if (!openModal) {
            setPaymentMode("card");
            setShowQrCode(false);
        }
    }, [openModal]);

    return (
        <div>
            <div className="mb-4 clearfix">
                <button
                    className="btn btn-primary float-right"
                    // onClick={initiatePayment}
                    onClick={() => setOpenModal(true)}
                >
                    Make payment
                </button>
            </div>
            {payments.length > 0 ? (
                <div className="rounded border overflow-auto">
                    <table className="min-w-full">
                        <thead className="border-b bg-slate-100 text-left text-xs uppercase text-slate-600">
                            <tr>
                                <th className="p-4">Receipt #</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Paid</th>
                                <th className="p-4">Due</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Paid on</th>
                                <th className="p-4">Next due</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <tr className="border-b last:border-b-0">
                                    <td className="p-4">
                                        {payment.receipt_id}
                                    </td>
                                    <td className="p-4">
                                        {payment.amount / 100}
                                    </td>
                                    <td className="p-4">
                                        {payment.paid / 100}
                                    </td>
                                    <td className="p-4">{payment.due / 100}</td>
                                    <td className="p-4">
                                        {payment.status === "paid" && (
                                            <FaCheckCircle
                                                color="green"
                                                size={20}
                                            />
                                        )}
                                        {payment.status === "failed" && (
                                            <RiErrorWarningFill
                                                color="red"
                                                size={24}
                                            />
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {moment(payment.updated_at)
                                            .tz("Asia/Kolkata")
                                            .format("LL")}
                                    </td>
                                    <td className="p-4">
                                        {moment(payment.next_due)
                                            .tz("Asia/Kolkata")
                                            .format("LL")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Placeholder message="No payment history!" />
            )}
            <Modal isOpen={openModal} setIsOpen={setOpenModal}>
                <div>
                    {!showQrCode ? (
                        <>
                            <h4 className="font-bold mb-3">
                                Choose payment mode
                            </h4>
                            <hr />
                            <div
                                onChange={handlePaymentModeChange}
                                className="my-3"
                            >
                                {/* <p>
                                    <span className="mr-4">
                                        <input
                                            type="radio"
                                            name="payment_mode"
                                            value="card"
                                        />
                                    </span>
                                    <label htmlFor="payment_mode">
                                        Credit/Debit card
                                    </label>
                                </p> */}
                                <p>
                                    <span className="mr-4">
                                        <input
                                            type="radio"
                                            name="payment_mode"
                                            value="upi"
                                        />
                                    </span>
                                    <label htmlFor="payment_mode">UPI</label>
                                </p>
                            </div>
                            <button
                                className="btn btn-primary my-3 w-full"
                                onClick={makePayment}
                                disabled={paymentMode === "card"}
                            >
                                Make payment
                            </button>
                        </>
                    ) : (
                        <>
                            <h4 className="font-bold uppercase text-center">
                                Pay through UPI
                            </h4>
                            <img
                                src={QR}
                                alt="QR Code"
                                className="w-64 h-64 my-4"
                            />
                            <p className="w-64">
                                Please scan the QR code above to make payment
                                throgh UPI
                            </p>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default PaymentAndHistory;
