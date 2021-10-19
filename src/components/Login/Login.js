import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../assets/logo.png';

export const NavBtnLink = styled(Link)``;

const Login = () => (
	<>
		<img className='logo' src={Logo} alt='' />
		<h2>Inicia Sesión</h2>
		<input type='text' placeholder='Correo Electronico' />
		<input type='password' placeholder='Contraseña' />
		<NavBtnLink to='/entrar-a-dashboard'>
			<button>Entrar</button>
		</NavBtnLink>
		<button id='ingreso-gmail' disabled={true}>
			Ingresar con Gmail
		</button>
	</>
);

export default Login;
