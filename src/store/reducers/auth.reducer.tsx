import { IAuthState } from "../../Domain/Store";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, ME_SUCCESS } from "../actions/userActions";
import { REGISTER_SUCCESS } from "../actionTypes";

const initialState: IAuthState = {logginIn: false, loggedIn: false, user: null};

// A partir del estado inicial y de la action se actualiza el estado
export function authenticationReducer(state: IAuthState = initialState, action): IAuthState {
  switch (action.type) {
    case LOGIN_REQUEST.type:
      return {
        ...state,
        logginIn: true
      };
    case REGISTER_SUCCESS.type:
      return {
        ...state
      };
    case LOGOUT_REQUEST.type:
      localStorage.setItem('logged', 'false');
      return {
        ...state,
        logginIn: false,
        loggedIn: false,
        user: null
      };

    case LOGIN_SUCCESS.type:
      localStorage.setItem('logged', 'true');
      return Object.assign({}, state, {
        loggedIn: true,
        logginIn: false
      });
      
    case ME_SUCCESS.type:
      localStorage.setItem('logged', 'true');
      return Object.assign({}, state, {
        loggedIn: true,
        user: action.payload
      });
      
    default:
      return state
  }
}