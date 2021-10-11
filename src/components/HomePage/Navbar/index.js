import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElement';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/'>
					<h4 className='logo-letras'>TEAM WB - JS</h4>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to='/servicios' activeStyle>
						Servicios
					</NavLink>
					<NavLink to='/acerca-de' activeStyle>
						Acerca de
					</NavLink>
					<NavLink to='/registrarse' activeStyle>
						Registrarse
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/entrar'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
