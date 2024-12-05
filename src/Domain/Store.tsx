export interface AppState {
	sidebarShow: boolean,
	sidebarUnfoldable: boolean,
	showError: boolean,
	showMessage: boolean,
	infoMessage: string,
	showRemoteMessage: boolean,
	remoteMessage: string,
	errorMessage: string,
	showPlans: boolean,
	refreshTools: boolean
}

// @MF TODO: establecer modelo de usuario que nos llegará del backend
export interface IAppUser {
	id : string, 
	email : string, 
	name : string,
	role : string,
	contactsNumber : number,
	leadsNumber : number,
	company : {
		id: string,
    	name : string,
	 	cif : string,
    	street : string,
    	cp: string,
		monthlySubscriptionStatus: boolean
	},
	plan : {
		name : string,
    	caducity : Date,
    	nextPayment : Date,
    	amount : number,
    	leadsNumber : number,
    	leadsLimit : number,
    	finished : boolean
	}
}

export interface IAuthState {
	loggedIn: boolean, 
	user: IAppUser|null, 
	logginIn: boolean,
	suggestions: Array<any>
}