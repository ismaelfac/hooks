import { createAction } from "redux-actions";
import api from "../services/api";


export const handleApiError = createAction('handleApiError');
export const getPostSuccess = createAction('getPostSuccess');
export const getPosts = () => async (dispatch) => {
    try {
        const response = await api.posts.get();
        dispatch(getPostSuccess(response.data))
    } catch (error) {
        dispatch(handleApiError(error))
    }
};
export const createPost = createAction('createPost');

export const createComment = createAction('createComment');
export const getComments = createAction('getComments');