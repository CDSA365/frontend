const { REACT_APP_API_BASE_URL } = process.env;
const BASE_URL = REACT_APP_API_BASE_URL;

export const config = {
    api: {
        registerStudent: BASE_URL + "/student/register",
        login: BASE_URL + "/student/login",
    },
};
