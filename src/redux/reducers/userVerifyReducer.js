import { USER_VERIFY, USER_VERIFY_WITH_OTP, RESET_GLOBAL_STATE, USER_ADD_PROPERTY_DETAILS_ID } from '../type'

const initialState = {
    userVerifyData: [],
    userVerifyWithOtpData: [],
    userId: "",

}

const userVerifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_VERIFY:
            return {
                ...state,
                userVerifyData: action.payload
            };
        case USER_VERIFY_WITH_OTP:
            return {
                ...state,
                userVerifyWithOtpData: action.payload
            };
        case USER_ADD_PROPERTY_DETAILS_ID:
            return {
                ...state,
                userId: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;

    }
}
export default userVerifyReducer;