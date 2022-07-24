const { REACT_APP_API_BASE_URL } = process.env;
const BASE_URL = REACT_APP_API_BASE_URL;

export const config = {
    api: {
        registerStudent: BASE_URL + "/student/register",
        login: BASE_URL + "/student/login",
        getStudentClasses: BASE_URL + "/student/classes",
        makePayment: BASE_URL + "/payment/create",
        verifyPayment: BASE_URL + "/payment/verify",
        capturePaymentFailure: BASE_URL + "/payment/capture-failure",
        getPaymentHistory: BASE_URL + "/payments",
        addLeads: BASE_URL + "/leads/add",
        getAnnouncement: BASE_URL + "/announcement",
        sendContactForm: BASE_URL + "/contact-form",
        getFeeData: BASE_URL + "/student/fee-data",
        getSeoData: BASE_URL + "/seo/get",
    },
};
