import { ADD_USER, UPDATE_USER, DELETE_USER, GET_ALL_USER, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllReservation: [],
    addReservation: [],
    updateReservation: [],
    deleteReservation: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER:  
            return {
                ...state, 
                getAllReservation: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                addReservation: action.payload
            };
        case UPDATE_USER:
            return {
                ...state,
                updateReservation: action.payload
            };
        case DELETE_USER:
            return {
                ...state,
                deleteReservation: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default userReducer;