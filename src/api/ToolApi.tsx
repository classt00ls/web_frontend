import { useSelector } from "react-redux";
import { anonApiCall, authApiCall } from "./apiCalls";
import store from "../store/store";
import { PROMPT_SUGGESTIONS_SUCCESS, SUGGESTIONS_SUCCESS, TOOLS_RECEIVED } from "../store/actions/userActions";

interface ToolFilters {
    lang?: string;
    [key: string]: any;
}

/** Recupera los tool dados de alta para el usuario */
const getAllTools = (
    page = 0, 
    pageSize = null
): Promise<any> => {
	return new Promise((resolve, reject) => {
		const params = { page, pageSize };
        
		anonApiCall.get("/tool/search/lang", { params })
			.then(({ data, status }) => { resolve(data) })
			.catch((error) => { reject(processError(error)) })
            
	});
}

const getDetailTool = (
    id,
    language = 'es'
): Promise<any> => {
	return new Promise((resolve, reject) => {
		// Extraemos solo el código de idioma base (es, en, etc.)
		const baseLanguage = language.split('-')[0];
		const params = { id, lang: baseLanguage };
        
		anonApiCall.get("/tool/detail", { params })
			.then(({ data, status }) => { resolve(data) })
			.catch((error) => { reject(processError(error)) })
            
	});
}

const getSuggestedTools = (
    userId
): Promise<any> => {
	return new Promise((resolve, reject) => {
		const params = { userId };
        
		authApiCall.get("/user_tool_suggestions", { params })
			.then(({ data, status }) => { 
                store.dispatch({type: SUGGESTIONS_SUCCESS.type, payload: data});
            })
			.catch((error) => { console.log('No hay sugestions'); resolve(true)})
            
	});
}

const getSuggestedToolsFromPrompt = (
    prompt
): Promise<any> => {
	return new Promise((resolve, reject) => {
		const params = { prompt };
        
		authApiCall.get("/tool/suggestions/prompt", { params })
			.then(({ data, status }) => { 
                store.dispatch({type: PROMPT_SUGGESTIONS_SUCCESS.type, payload: data});
            })
			.catch((error) => { reject(processError(error)) })
            
	});
}

// El SEARCH principal
const getFilteredlTool = (
    page = 0, 
    pageSize = null,
    filters: ToolFilters = {},
    language = 'es'
): Promise<any> => {

	return new Promise((resolve, reject) => {
		// Extraemos solo el código de idioma base (es, en, etc.)
		const baseLanguage = language.split('-')[0];
		// Añadimos el language a los filters
		filters.lang = baseLanguage;
		const params = { page, pageSize, filters };
        
		anonApiCall.get("/tool/search/lang", { params })
			.then(({ data, status }) => { 
                store.dispatch({type: TOOLS_RECEIVED.type, payload: data});

                resolve(data) 
            })
			.catch((error) => { 
                reject(processError(error)) 
            })
            
	});
}

const toggleFavorite = (
    toolId
): Promise<any> => {

	return new Promise((resolve, reject) => {
		const params = { id: toolId };
        
		authApiCall.get("/tool/favorite", { params })
			.then(({ data, status }) => { 
                console.log('favorito añadido')
                resolve(data) 
            })
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
    toggleFavorite,
    getAllTools,
    getDetailTool,
    getFilteredlTool,
    getSuggestedTools,
    getSuggestedToolsFromPrompt
  };