import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_BLOG, DELETE_BLOG, GET_ALL_BLOG, UPDATE_BLOG, } from "../type";

export const getallBlogAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/Data`)
            .then((res) => {
                    dispatch({
                        type: GET_ALL_BLOG,
                        payload: res,
                    });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_BLOG,
                    payload: error,
                });
            });
    };
};

export const addBlogAction = (addAttributeData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/Data`, addAttributeData)
            .then((res) => {
                    dispatch({
                        type: ADD_BLOG,
                        payload: res.data,
                    });
                    dispatch(getallBlogAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_BLOG,
                    payload: error,
                });
            });
    };
};

export const updateBlogAction = (updateAttributeData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/Data/update-attributes/${updateAttributeData.id}`, updateAttributeData)
            .then((res) => {
                    dispatch({
                        type: UPDATE_BLOG,
                        payload: res.data,
                    });
                    dispatch(getallBlogAction());
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_BLOG,
                    payload: error,
                });
            });
    };
};

export const deleteBlogAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/attributes/delete-attributes/${deleteId}`)
            .then((res) => {
                    dispatch({
                        type: DELETE_BLOG,
                        payload: res.data,
                    });
                    dispatch(getallBlogAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_BLOG,
                    payload: error,
                });
            });
    };
};
