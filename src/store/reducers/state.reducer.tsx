import { AppState } from "../../Domain/Store"


const initialState:AppState = {
	sidebarShow: true,
	sidebarUnfoldable: false,
	showError: false,
	showMessage: false,
	showRemoteMessage: false,
	remoteMessage: '',
	errorMessage: '',
	infoMessage: '',
	showPlans: false,
	refreshTools: false
  }
  
const changeState = (state = initialState, {type = 'set', ...rest }) => {
	switch (type) {
		case 'set':
			return { ...state, ...rest }
		case 'plans' : 
		case 'products':
			return { ...state, ...rest }
		case 'billing':
			return { ...state, ...rest }
		case 'session':
			return { ...state, ...rest }
		default:
			return state
	}
}
export default changeState;