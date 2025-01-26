
import React, { useState } from "react";
import {
  FaUserAlt,
  FaLock,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserApi } from './../../api/UserApi';
import { isEmpty, size } from 'lodash';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { auth, googleProvider } from "./../../firebaseConfig"; // Asegúrate de usar la ruta correcta
import { signInWithPopup } from "firebase/auth";

const AuthPage = () => {

  const { t } = useTranslation()
  const navigate = useNavigate();

  const defaultFormValue = () => {
		return {
			email: "",
			password: ""
		}
	}

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [formData, setformData] = useState(defaultFormValue());

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  // Cada vez que cambian los datos del formulario
	const onChange = (e, fieldName) => {
		setformData({ ...formData, [fieldName]: e.nativeEvent.target.value });
    console.log(' ... formdata: ', formData)
	}

    const handleGoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user; // Datos del usuario autenticado
        console.log("Usuario logueado:", user);
      } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
      }
    };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if ((isEmpty(formData.email) || isEmpty(formData.password)) ) {

			toast.error(t('login.error-fields-mandatory'));

		} else if (size(formData.password) < 6 ) {

			toast.error(t('login.error-password-minimum'));

		} else {

      try {
        await UserApi.loginCall(formData.email, formData.password);

        console.log('vamos al mecall ...')

        await UserApi.meCall();
        
				navigate("/");

      } catch (error) {
        console.log('error: ', error)
        toast.error("Failed to sign in. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r shadow-lg transform rotate-6 sm:rotate-0 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">
                {isSignUp ? "Sign Up" : t('auth.sign_in_title')}
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                onSubmit={handleSubmit}
              >
                {isSignUp && (
                  <div className="relative">
                    <FaUserAlt className="absolute left-3 top-4 text-gray-400" />
                    <input
                      type="text"
                      className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Username"
                      onChange={(e) => onChange(e, "username")}
                      required
                    />
                  </div>
                )}
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="email"
                    className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Email"
                    onChange={(e) => onChange(e, "email")}
                    required
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="password"
                    className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder={t('auth.password')}
                    value={formData.password}
                    onChange={(e) =>  onChange(e, "password")}
                    required
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    {isSignUp ? t('auth.sign_up') : t('auth.sign_in')}
                  </button>
                </div>
              </form>
              <div className="relative flex items-center justify-center py-4">
                <hr className="w-full border-gray-300" />
                <span className="absolute bg-white px-4 text-gray-500">{t('auth.or')}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300">
                  <FaGoogle className="mr-2" /> {t('auth.continue_with_google')}
                </button>
                {/* <button className="flex items-center justify-center w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300">
                  <FaFacebook className="mr-2" /> Sign in with Facebook
                </button> */}
              </div>
              <div className="text-center text-sm mt-4">
                {isSignUp ? (
                  <span>
                    Already have an account?{" "}
                    <button
                      onClick={toggleSignUp}
                      className="text-blue-500 hover:underline"
                    >
                      Sign In
                    </button>
                  </span>
                ) : (
                  <span>
                    {t('auth.have_account')}{" "}
                    <button
                      onClick={toggleSignUp}
                      className="text-blue-500 hover:underline"
                    >
                      {t('auth.sign_up')}
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AuthPage;
