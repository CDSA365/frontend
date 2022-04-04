import { DECREMENT, INCREMENT, SETUSER } from "../types/types";

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const setUser = (data) => (dispatch) =>
    Promise.resolve().then(() => {
        return dispatch({
            type: SETUSER,
            payload: {
                data,
            },
        });
    });
