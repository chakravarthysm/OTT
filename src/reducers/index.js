import { combineReducers } from 'redux';
import profileReducer from "./features/profile/profileSlice";

export default combineReducers({
    profile: profileReducer
})