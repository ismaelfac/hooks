import { createStore, combineReducers } from "redux";
import Options from "./reducers/options";

const reducer = combineReducers({
    Options
});

const store = createStore(reducer);

export default store;