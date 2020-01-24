import { handleActions } from "redux-actions";
import { createPost, getPostSuccess } from "../actions";

export default handleActions({
    [createPost] : (state, action) => {
        return [...state, action.payload];
    },
    [getPostSuccess] : (state, action) => {
        return action.payload;
    }
}, []);