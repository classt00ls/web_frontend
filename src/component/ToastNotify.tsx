import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const error = (message) => toast.error(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
});

const success = (message) => toast.success(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });

export const ToastNotify = { error, success };