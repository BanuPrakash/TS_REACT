import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import contactReducer from "./contactReducer";

// Root Reducer
export default combineReducers({
    profile: profileReducer,
    contacts: contactReducer
})