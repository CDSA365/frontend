import { combineReducers } from "redux";
import counterReducer from "./reducer/counter.reducer";
import userReducer from "./reducer/user.reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export default rootReducer;
