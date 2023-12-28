import { ADD_BLOG, UPDATE_BLOG, DELETE_BLOG, GET_ALL_BLOG, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllBlog: [],
    addBlog: [],
    updateBlog: [],
    deleteBlog: [],
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BLOG:  
            return {
                ...state, 
                getAllBlog: action.payload
            };
        case ADD_BLOG:
            return {
                ...state,
                addBlog: action.payload
            };
        case UPDATE_BLOG:
            return {
                ...state,
                updateBlog: action.payload
            };
        case DELETE_BLOG:
            return {
                ...state,
                deleteBlog: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default blogReducer;