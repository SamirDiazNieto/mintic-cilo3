import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import VistaTabla from './components/VistaTabla/VistaTabla';
import ListadoProductos from './components/ListadoProductos/ListadoProductos';

// import reportWebVitals from './reportWebVitals';
import VistaVenta from './components/VistaVentas/VistaVenta';
import ListadoUsuarios from './components/ListadoUsuarios/ListadoUsuarios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export function capturaCampos() {
	const div_register = document.getElementById('div-trasera-register');
	const div_login = document.getElementById('div-trasera-login');
	const div_formularios = document.querySelector('.div-formularios');
	const formulario_register = document.getElementById('formulario-register');
	const formulario_login = document.getElementById('formulario-login');
  
	let arreglo = [];
	arreglo.push(div_register);
	arreglo.push(div_login);
	arreglo.push(div_formularios);
	arreglo.push(formulario_register);
	arreglo.push(formulario_login);
	return arreglo;
}

ReactDOM.render(   
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/dashboard/lista-productos' component={ListadoProductos} />
				<Route exact path='/dashboard/lista-ventas' component={VistaVenta} />
				<Route exact path='/dashboard/lista-usuarios' component={ListadoUsuarios} />
        <Route exact path="/usuarios" component={ListadoUsuarios}/>
        <Route exact path="/listado-productos" component={ListadoProductos}/> 
        <Route exact path="/ventas" component={VistaVenta}/>
				<Route exact component={App} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
