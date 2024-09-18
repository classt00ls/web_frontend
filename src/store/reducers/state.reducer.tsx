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
	showProducts: false,
	showChangePlans: false,
	showCancelPlan: false,
	showRemoveUser: false,
	warningBilling: false,
	lastRequestTstp: 0
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