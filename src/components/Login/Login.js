import React from 'react';
import './Login.css';
import Logo from '../../assets/logo.png'

const Login = () => (
<>
      <img className="logo" src={Logo} alt="" />
      <h2>Inicia Sesión</h2>
      <input type="text" placeholder="Correo Electronico" />
      <input type="password" placeholder="Contraseña" />
      <button>Entrar</button>
      <button id="ingreso-gmail" disabled={true}>Ingresar con Gmail</button>
  </>
);


export default Login;
