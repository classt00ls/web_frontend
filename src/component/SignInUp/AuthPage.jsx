import React, { useState, useEffect } from "react";
import {
  FaUserAlt,
  FaLock,
  FaEnvelope,
  FaGoogle,
  FaExclamationCircle
} from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserApi } from './../../api/UserApi';
import { isEmpty, size } from 'lodash';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './AuthStyles.css';

import { auth, googleProvider } from "./../../firebaseConfig";
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
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [lines, setLines] = useState([]);

  // Generar partículas para el fondo
  useEffect(() => {
    // Crear partículas
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        size: Math.random() * 3 + 2 + 'px',
        animationDuration: Math.random() * 5 + 10 + 's',
        animationDelay: Math.random() * 5 + 's'
      });
    }
    setParticles(newParticles);

    // Crear líneas
    const newLines = [];
    for (let i = 0; i < 20; i++) {
      newLines.push({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        width: Math.random() * 200 + 50 + 'px',
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDuration: Math.random() * 8 + 10 + 's',
        animationDelay: Math.random() * 5 + 's'
      });
    }
    setLines(newLines);
  }, []);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  // Cada vez que cambian los datos del formulario
	const onChange = (e, fieldName) => {
		setformData({ ...formData, [fieldName]: e.nativeEvent.target.value });
	}

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
      await UserApi.meCall(token);
      navigate("/");
    } catch (error) {
      toast.error(t('auth.error_google'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if ((isEmpty(formData.email) || isEmpty(formData.password)) ) {
			toast.error(t('auth.error-fields-mandatory'));
		} else if (size(formData.password) < 6 ) {
			toast.error(t('auth.error-password-minimum'));
		} else {
      try {
        setIsLoading(true);
        await UserApi.loginCall(formData.email, formData.password);
        await UserApi.meCall();
				navigate("/");
      } catch (error) {
        toast.error("Failed to sign in. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="auth-container">
      {/* Partículas de fondo */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="neural-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animation: `iconPulse ${particle.animationDuration} infinite alternate ${particle.animationDelay}`
          }}
        />
      ))}
      
      {/* Líneas de conexión */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="neural-line"
          style={{
            left: line.left,
            top: line.top,
            width: line.width,
            transform: line.transform,
            animation: `iconPulse ${line.animationDuration} infinite alternate ${line.animationDelay}`
          }}
        />
      ))}

      <div className="auth-card">
        <div className="card-glow"></div>
        
        <div>
          <h1 className="auth-title">
            <RiAiGenerate style={{ verticalAlign: 'middle', marginRight: '10px', fontSize: '2rem' }} />
            {isSignUp ? t('auth.sign_up_title') : t('auth.sign_in_title')}
          </h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="input-group">
              <FaUserAlt className="input-icon" />
              <input
                type="text"
                className="auth-input"
                placeholder="Username"
                onChange={(e) => onChange(e, "username")}
                required
              />
              <div className="input-focus-effect"></div>
            </div>
          )}
          
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              onChange={(e) => onChange(e, "email")}
              required
            />
            <div className="input-focus-effect"></div>
          </div>
          
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              className="auth-input"
              placeholder={t('auth.password')}
              value={formData.password}
              onChange={(e) => onChange(e, "password")}
              required
            />
            <div className="input-focus-effect"></div>
          </div>
          
          <button
            type="submit"
            className="auth-button primary-button"
            disabled={isLoading}
          >
            {isLoading && <span className="loading-indicator"></span>}
            {isSignUp ? t('auth.sign_up') : t('auth.sign_in')}
          </button>
        </form>
        
        <div className="auth-divider">
          <div className="divider-line"></div>
          <span className="divider-text">{t('auth.or')}</span>
          <div className="divider-line"></div>
        </div>
        
        <button 
          onClick={handleGoogleLogin}
          className="auth-button google-button"
          disabled={isLoading}
        >
          {isLoading ? 
            <span className="loading-indicator"></span> : 
            <FaGoogle className="google-icon" />
          }
          {t('auth.continue_with_google')}
        </button>
        
        <div className="auth-footer">
          {isSignUp ? (
            <span>
              {t('auth.already_have_account')}{" "}
              <span
                onClick={toggleSignUp}
                className="auth-link"
              >
                {t('auth.sign_in')}
              </span>
            </span>
          ) : (
            <span>
              {t('auth.have_account')}{" "}
              <span
                onClick={toggleSignUp}
                className="auth-link"
              >
                {t('auth.sign_up')}
              </span>
            </span>
          )}
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
        theme="dark"
      />
    </div>
  );
};

export default AuthPage;
