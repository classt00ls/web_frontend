import axios from 'axios';
/// <reference types="vite/client" />

// Usar directamente la variable de entorno de Vite
const API_URL = import.meta.env.VITE_API_URL || 'https://6408-92-59-163-224.ngrok-free.app';

// Llamadas que requeriran de auth token
export const authApiCall = axios.create({
	withCredentials: false,
	baseURL: API_URL,
	headers: {
		'ngrok-skip-browser-warning': 'skip',
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

// Llamadas que no requeriran de auth token
export const anonApiCall = axios.create({
	withCredentials: false,
	baseURL: API_URL,
	headers: {
		'ngrok-skip-browser-warning': 'skip',
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});



const addToken = (request) => {

	const token = localStorage.getItem('access_token');

// console.log('TRACE / authApiCall.interceptors -> Token recovered: ', token);

	if (token) {
		request.headers["Authorization"] = `Bearer ${token}`;
	} else {
		return Promise.reject('No token founded');
	}
	
	return request;
}

const requestError = (error) => {
	if (error && error.response == undefined) {
		console.log('Intercepting Error: ', error);
		return Promise.reject('Interceptor Error.');
	} else if (error && error.response && error.response.status === 401) {
		console.log('Intercepting Error: (401) ', error);
		return Promise.reject(error.response);
	}
}

const authResponse = async (response) => {
	console.log('TRACE / authApiCall.interceptors -> authResponse ');
	//Store last request timestamp in Local Storage
	localStorage.setItem('session_classtools_timestamp', new Date().getTime().toString());
	if (response.status === 200 || response.status === 201) {
		return Promise.resolve(response);
	} else {
		console.log('Interceptor auth call error: ', response);
		return Promise.reject(response);
	}
}

const authError = async (error) => {
	console.log('TRACE / authApiCall.interceptors -> authError ');
	console.log('Token expired, refreshing ... ');
	
}

const anonError = async (error) => {
	console.log(' ************************************** ', error)
	if (error) {
		switch (error) {
			case " Error: Request failed with status code 400":
				console.log('Error 400 detected in interceptor ')
				break;
			default:
				console.log(`Intercepted error. Code: ${error}, message: ${error}`);
		}
		return error;
	}
}



// Interceptor antes de enviar una petición
authApiCall.interceptors.request.use(addToken, requestError);

// Interceptor antes de enviar una petición
anonApiCall.interceptors.request.use(addToken, requestError);

// Interceptor antes de procesar la respuesta recibida
authApiCall.interceptors.response.use(authResponse);