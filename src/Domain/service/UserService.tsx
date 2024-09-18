import { useSelector } from "react-redux";
import store from "../../store/store";

export default class UserService {
	
	public checkLogin() {
		console.log('checking login ...', store.getState().auth);
		store.dispatch({type: "LOGIN_REQUEST"});
		store.getState();
	}
}