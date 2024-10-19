import { combineReducers } from "redux";
import { authenticationReducer } from "./auth.reducer";
import changeState from "./state.reducer";
import filtersState from "./filters.reducer";

export default combineReducers({ 
	filters: filtersState,
	auth: authenticationReducer,
	changeState
});