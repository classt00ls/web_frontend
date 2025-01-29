import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, ME_SUCCESS, ME_UNAUTHORIZED } from "../store/actions/userActions";
import store from "../store/store";
import { anonApiCall, authApiCall } from "./apiCalls";

/** Recupera los leads dados de alta para el usuario */
const getUserWithCompany = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		authApiCall.get("/user/auth/company")
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}

const confirmEmail = (userId: string): Promise<any> => {
	const params = {id: userId};

	return new Promise((resolve, reject) => {
		authApiCall.post("/user/auth/confirm", params)
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}

const hasCompanyInfo = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		authApiCall.get("/stripe/customer/hasinfo")
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}

const getAllUsers = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		authApiCall.get("/user/all")
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}

const impersonateUser = (userId): Promise<any> => {
	const params = {id: userId}
	return new Promise((resolve, reject) => {
		authApiCall.get("/user/impersonate", {params})
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}

const recoverPassword = (token, email, password): Promise<any> => {
	const params = {token, email, password};

	return new Promise((resolve, reject) => {
		authApiCall.post("/web/auth/changePassword", params)
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}

const recoverPasswordSendEmail = (email): Promise<any> => {
	const params = {email};

	return new Promise((resolve, reject) => {
		authApiCall.get("/user/recoverpassword", {params})
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}

const getRole = (email): Promise<any> => {
	return new Promise((resolve, reject) => {
		authApiCall.get("/web/auth/getRole")
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}

const confirmationSendEmail = (email): Promise<any> => {
	const params = {email};

	return new Promise((resolve, reject) => {
		authApiCall.post("/user/confirmationsend", params)
			.then(({ data, status }) => resolve(data))
			.catch((error) => reject(processError(error)))
	});
}


/** Realiza el login mediante username/password */
const loginCall = (email: string, password: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const params = {
			email,
			password
		};
		if (!email || !password) {
			reject('Username and password are required');
		}

		store.dispatch({type: LOGIN_REQUEST.type});
		
		anonApiCall.post("/web/auth/login", params, {
			withCredentials: true //correct
		  })
			.then(async ({ data, status }) => {
				// Emitimos el evento de login success
				store.dispatch({type: LOGIN_SUCCESS.type, payload: data});

				resolve(data);
			})
			.catch((error) => { reject(processError(error)); })
	});
}


 const meCall = (token = null): Promise<any> => {
	if(token) {
		store.dispatch({type: LOGIN_SUCCESS.type, payload: {access_token: token}});
	}

	return new Promise((resolve, reject) => {
		authApiCall.get("/web/auth/me",{withCredentials: true})
			.then(async ({ data, status }) => {

				store.dispatch({type: ME_SUCCESS.type, payload: data});

				resolve(data);
			})
			.catch((error) => { reject(processError(error)); })
	});
}


const processError = (error: any) => {
	
    if (error.response) {
        const serverError = error.response.data;
        if(serverError.statusCode === 403) {
            store.dispatch({type: LOGOUT_REQUEST.type});
            return 'error.0003';
        }
		else if(serverError.statusCode === 500) {
            return 'error.0001';
        }
		else if(serverError.statusCode === 400) {
            return 'error.'+serverError.message;
        }
		else if(serverError.statusCode === 401) {
			store.dispatch({type: ME_UNAUTHORIZED.type, payload: null});
			console.log('Intercepting Error: (401) Unauthorized ');
        }
        return serverError.message;
    } else if (error.request) {
        return 'error.0002';
    } else {
        return 'error.0001';
    }
}



export const UserApi = {
    getAllUsers,
    getUserWithCompany,
    hasCompanyInfo,
	recoverPassword,
	recoverPasswordSendEmail,
	confirmEmail,
	confirmationSendEmail,
	impersonateUser,
	getRole,
	meCall,
	loginCall
  };