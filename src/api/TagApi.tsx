import { authApiCall } from "./apiCalls";


/** Recupera los tool dados de alta para el usuario */
const getAllCategories = (
): Promise<any> => {
	return new Promise((resolve, reject) => {
		const params = { };
        
		authApiCall.get("/web/category", { params })
			.then(({ data, status }) => { 
                // Incorporar aquí algún mapper que organize estas variables de forntend a añadir
                resolve(data.map(element => {element.clicked = false; return element;})) 
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

export const TagApi = {
    getAllCategories
  };