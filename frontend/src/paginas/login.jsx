import React, { useEffect, useState} from 'react';
import '../stylesheets/login.css'; 
import { FaEnvelope, FaLock } from 'react-icons/fa'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handdelLogin = (e) =>{
    e.preventDefault();
    console.log({
      username : username,
      password : password

    })
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

  return (<>
    <div className="overly">
      <div className="container">
        <div className="CajaAtras">
          <div className="CajaLogin">
            <h3>¿Ya Tienes Cuenta?</h3>
            <p>Inicia sesion para que puedas ver el menú</p>
            <button id="btnLogin" >
              Iniciar Sesión
            </button>
          </div>
          <div className="CajaRegister">
            <h3>¿Aun no tienes Cuenta?</h3>
            <p>Registrate Para que Puedas Iniciar Sesion</p>
            <button id="btnRegister">
              Registrarte
            </button>      
          </div>
        </div>
        <div className="ContenedorLogin">
          <form action="" className="FormularioLogin" method="post">
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Correo Electrónico" onChange = {(event)=>{setUsername(event.target.value)}} />
            <input type="password" placeholder="Contraseña" onChange = {(event)=>{setPassword(event.target.value)}}  />
            <button type="submit" onClick={handdelLogin} >Entrar</button>
          </form>
          <form action="" className="FormularioRegistro" method="post">
            <h2>Registrate</h2>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Correo Electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Registrarte</button>
          </form>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Login;
