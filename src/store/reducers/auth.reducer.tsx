import { ToolApi } from "../../api/ToolApi";
import { IAuthState } from "../../Domain/Store";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, ME_SUCCESS, ME_UNAUTHORIZED, SUGGESTIONS_SUCCESS } from "../actions/userActions";
import { REGISTER_SUCCESS } from "../actionTypes";

const initialState: IAuthState = {
  logginIn: false, 
  loggedIn: false, 
  user: null,
  suggestions: []
};

// A partir del estado inicial y de la action se actualiza el estado
export function authenticationReducer(state: IAuthState = initialState, action): IAuthState {
  switch (action.type) {
    case LOGIN_REQUEST.type:

    console.log('LOGIN_REQUEST *********** ');
      return {
        ...state,
        logginIn: true
      };
    case REGISTER_SUCCESS.type:
      return {
        ...state
      };
    case LOGOUT_REQUEST.type:
      localStorage.setItem('access_token', 'false');
      return {
        ...state,
        logginIn: false,
        loggedIn: false,
        user: null
      };

    case LOGIN_SUCCESS.type:

      localStorage.setItem('access_token', action.payload.access_token);

      return Object.assign({}, state, {
        loggedIn: true,
        logginIn: false
      });
      
    case ME_SUCCESS.type:

      ToolApi.getSuggestedTools(action.payload.id);
      
      return Object.assign({}, state, {
        loggedIn: true,
        user: action.payload
      });
      break;
      
      case ME_UNAUTHORIZED.type:
      console.log('Setting logged to false')
      return Object.assign({}, state, {
        loggedIn: false,
        user: null
      });
      break;

      case SUGGESTIONS_SUCCESS.type:
        console.log('recibimos el /suggested', action.payload);

        return Object.assign({}, state, {
          suggestions: action.payload.data
        });
      break;
    default:
      return state
  }
}