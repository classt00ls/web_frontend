import { combineReducers } from "redux";
import { authenticationReducer } from "./auth.reducer";
import changeState from "./state.reducer";

export default combineReducers({ 
	auth: authenticationReducer,
	changeState
});