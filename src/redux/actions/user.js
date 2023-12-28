import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_USER, DELETE_USER, GET_ALL_USER, UPDATE_USER, } from "../type";

export const getallUserAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/get-all-users`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_USER,
                    payload: res,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_USER,
                    payload: error,
                });
            });
    };
};

export const addUserAction = (addAttributeData) => {
    return (dispatch) => {
        return ApiPost(`/api/add-user`, addAttributeData)
            .then((res) => {
                console.log("🚀 ~ file: user.js:26 ~ .then ~ res:", res)
                
                dispatch({
                    type: ADD_USER,
                    payload: res.data,
                });

                localStorage.setItem('token', JSON.stringify(res.data.data.token));

            })
            .catch((error) => {
                dispatch({
                    type: ADD_USER,
                    payload: error,
                });
            });
    };
};

export const updateUserAction = (updateAttributeData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/Data/update-attributes/${updateAttributeData.id}`, updateAttributeData)
            .then((res) => {
                dispatch({
                    type: UPDATE_USER,
                    payload: res.data,
                });
                dispatch(getallUserAction());
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_USER,
                    payload: error,
                });
            });
    };
};

export const deleteUserAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/attributes/delete-attributes/${deleteId}`)
            .then((res) => {
                dispatch({
                    type: DELETE_USER,
                    payload: res.data,
                });
                dispatch(getallUserAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_USER,
                    payload: error,
                });
            });
    };
};
