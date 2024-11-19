import React, { useEffect, useState } from 'react';
import '../Estilos/login.css'; 

import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });

      if (response.data.role === 'admin') {
        navigate("/dashboard");
      } else {
        navigate("/dashboardU");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Error al iniciar sesión');
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        email,
        password
      });

      navigate("/dashboardU");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Error al registrar usuario');
      }
    }
  }
  useEffect(() => {
    const btnRegister = document.getElementById("btnRegister");
    const btnLogin = document.getElementById("btnLogin");

    btnRegister.addEventListener("click", register);
    btnLogin.addEventListener("click", inicioSesion);

    return () => {
      btnRegister.removeEventListener("click", register);
      btnLogin.removeEventListener("click", inicioSesion);
    };
  }, []);

  const register = () => {
    document.querySelector(".FormularioRegistro").style.display = "block";
    document.querySelector(".ContenedorLogin").style.left = "510px";
    document.querySelector(".FormularioLogin").style.display = "none";
    document.querySelector(".CajaRegister").style.opacity = "0";
    document.querySelector(".CajaLogin").style.opacity = "1";
  };

  const inicioSesion = () => {
    document.querySelector(".FormularioRegistro").style.display = "none";
    document.querySelector(".ContenedorLogin").style.left = "10px";
    document.querySelector(".FormularioLogin").style.display = "block";
    document.querySelector(".CajaRegister").style.opacity = "1";
    document.querySelector(".CajaLogin").style.opacity = "0";
  };

  return (
    <>
      <div className="overly">
        <a href="../">
        <button className="btnBack">
            Volver
          </button>
          </a>
        <div className="container">
          <div className="CajaAtras">
            <div className="CajaLogin">
              <h3>¿Ya Tienes Cuenta?</h3>
              <p>Inicia sesión para que puedas ver el menú</p>
              <button id="btnLogin">
                Iniciar Sesión
              </button>
            </div>
            <div className="CajaRegister">
              <h3>¿Aun no tienes Cuenta?</h3>
              <p>Regístrate para que puedas iniciar sesión</p>
              <button id="btnRegister">
                Registrarte
              </button>
            </div>
          </div>
          <div className="ContenedorLogin">
            <form className="FormularioLogin" onSubmit={handleLogin}>
              <h2>Iniciar Sesión</h2>
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Entrar</button>
            </form>

            <form className="FormularioRegistro" onSubmit={handleRegister}>
              <h2>Regístrate</h2>
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Registrarte</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
