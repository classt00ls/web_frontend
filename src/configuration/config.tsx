/// <reference types="vite/client" />

const Configuration = {
	API_URL: import.meta.env.VITE_API_URL || 'https://6408-92-59-163-224.ngrok-free.app',
	APP_URL: import.meta.env.VITE_APP_URL || 'https://eurega-3af9d.firebaseapp.com/'
}

export default Configuration; 