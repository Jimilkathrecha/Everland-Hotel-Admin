import { USER_VERIFY, USER_VERIFY_WITH_OTP, USER_ADD_PROPERTY_DETAILS_ID } from '../type'
import { ApiPost } from "../../helper/axios";
import { toast } from 'react-toastify';


export const userVerifyAction = (userSendData) => {
    return (dispatch) => {
        return ApiPost(`/api/user/send-otp`, userSendData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: USER_VERIFY,
                        payload: res.data,
                    });
                    const userId = res?.data?.user?._id;
                    dispatch(useraddPropertyDetailActionSuccess(userId));
                    toast.success(res?.data?.message, { autoClose: 1000, })
                }
            })
            .catch((error) => {
                dispatch({
                    type: USER_VERIFY,
                    payload: error,
                });
                toast.error(error?.data?.message, { autoClose: 1000, })
            });
    };
};

export const userVerifyWithOtpAction = (userVerifyData) => {
    return (dispatch) => {
        return ApiPost(`/api/user/verify/otp`, userVerifyData)
            .then((res) => { 
                    dispatch({
                        type: USER_VERIFY_WITH_OTP,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000, })
                    window.location.href = "/PropertyCard";

            })
            .catch((error) => {
                console.log("error", error);
                dispatch({
                    type: USER_VERIFY_WITH_OTP,
                    payload: error,
                });
                toast.error(error?.data?.message, { autoClose: 1000, })
            });
    };
};

export const useraddPropertyDetailActionSuccess = (userId) => ({
    type: USER_ADD_PROPERTY_DETAILS_ID,
    payload: userId,
});

