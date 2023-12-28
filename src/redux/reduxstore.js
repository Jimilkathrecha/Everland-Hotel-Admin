import { createStore, combineReducers, applyMiddleware } from "redux"; 
import authReducer from "./reducers/authReducer";   
import blogReducer from "./reducers/blogReducer"; 
import userVerifyReducer from "./reducers/userVerifyReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  blogState: blogReducer, 
  authState: authReducer,
  userState: userReducer,
  userVerifyState: userVerifyReducer,
}); 

const reduxstore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
  applyMiddleware(thunk)
);

export default reduxstore;
