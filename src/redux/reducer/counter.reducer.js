import { DECREMENT, INCREMENT } from "../types/types";

const INITIAL_STATE = {
    count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            break;
        case DECREMENT:
            break;

        default:
            return state;
    }
};

export default counterReducer;
