import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import options from "./reducers/options";
import auth from "./reducers/login/auth";
import posts from "./reducers/posts";

const reducer = combineReducers({
    options,
    auth,
    posts
});

const logger = store => next => action => {
    console.log('entrando')
    let result = next(action)
    console.log('siguiente store')
    return result
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;