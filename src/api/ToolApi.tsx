import { useSelector } from "react-redux";
import { anonApiCall, authApiCall } from "./apiCalls";
import store from "../store/store";
import { SUGGESTIONS_SUCCESS } from "../store/actions/userActions";

/** Recupera los tool dados de alta para el usuario */
const getAllTools = (
    page = 0, 
    pageSize = null
): Promise<any> => {
	return new Promise((resolve, reject) => {
		const params = { page, pageSize };
        
		anonApiCall.get("/tool", { params })
			.then(({ data, status }) => { resolve(data) })
			.catch((error) => { reject(processError(error)) })
            
	});
}

const getDetailTool = (
    id
): Promise<any> => {
	return new Promise((resolve, reject) => {
		const params = { id };
        
		authApiCall.get("/tool/detail", { params })
			.then(({ data, status }) => { resolve(data) })
			.catch((error) => { reject(processError(error)) })
            
	});
}

const getSuggestedTools = (
    userId
): Promise<any> => {
	return new Promise((resolve, reject) => {
		const params = { userId };
        
		authApiCall.get("/tool/suggestions", { params })
			.then(({ data, status }) => { 
                store.dispatch({type: SUGGESTIONS_SUCCESS.type, payload: data});
            })
			.catch((error) => { reject(processError(error)) })
            
	});
}

const getFilteredlTool = (
    page = 0, 
    pageSize = null,
    filters = []
): Promise<any> => {

	return new Promise((resolve, reject) => {
		const params = { page, pageSize, filters};
        
		anonApiCall.post("/tool/filter", { params })
			.then(({ data, status }) => { resolve(data) })
			.catch((error) => { reject(processError(error)) })
            
	});
}

const processError = (error: any) => {

    if (error.response) {
        const serverError = error.response.data;
        if(serverError.statusCode === 403) {
            //store.dispatch({type: LOGOUT_REQUEST.type});
            return 'error.0003';
        }
		else if(serverError.statusCode === 500) {
            return 'error.0001';
        }
		else if(serverError.statusCode === 400) {
            return 'error.'+serverError.message;
        }
        return serverError.message;
    } else if (error.request) {
        return 'error.0002';
    } else {
        return 'error.0001';
    }
}

export const ToolApi = {
    getAllTools,
    getDetailTool,
    getFilteredlTool,
    getSuggestedTools
  };