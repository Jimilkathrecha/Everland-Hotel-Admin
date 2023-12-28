import {
  RESET_GLOBAL_STATE,
  ADD_LOGIN_ERROR,
  ADD_LOGIN_LOADING,
  ADD_LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_DATA,
  GET_MY_PROFILE,
  SEND_OTP_DATA,
  GET_ALL_USERS_DATA,
} from "../type";

const initialState = {
  addLoginLoading: false,
  addLoginSuccess: null,
  addLoginError: null,
  isLoggedIn: false,
  signupUserData: [],
  getMyProfile: null,
  sendOtpData: undefined,
  getAllUser: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_DATA:
      return {
        ...state,
        signupUserData: action.payload,
      };
    case ADD_LOGIN_LOADING:
      return {
        ...state,
        addLoginLoading: action.payload,
      };
    case ADD_LOGIN_SUCCESS:
      return {
        ...state,
        addLoginSuccess: action.payload,
      };
    case GET_ALL_USERS_DATA:
      return {
        ...state,
        getAllUser: action.payload,
      };

    case SEND_OTP_DATA:
      return {
        ...state,
        sendOtpData: action.payload,
      };
    case ADD_LOGIN_ERROR:
      return {
        ...state,
        addLoginError: action.payload,
      };
    case GET_MY_PROFILE:
      return {
        ...state,
        getMyProfile: action.payload,
      };

    case LOGOUT:
      return {
        isLoggedIn: false,
      };

    case RESET_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
