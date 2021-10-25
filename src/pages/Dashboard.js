import React, { useState } from 'react';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import Foto from "../assets/foto-perfil.png"
import { useHistory } from "react-router-dom";




function Dashboard() {
	const auth = getAuth();

	
	const [user] = useAuthState(auth);
	const history = useHistory();
   


	// // // // // // PREGUNTAR COMO SE HACE ESTO DE OTRA FORMA
	if (!user) {
		history.replace("/");
		return(
			<>
			<h1 className="title-dashboard">Bienvenidos al mejor gestor de ventas </h1><br/>
			<h2>Grupo WB-JS</h2>
			</>
		);
	} else {

	
	return (
		<>
			<Sidebar />
		<center>
			<div className="bienvenido-dashboard">
				<h1 className="title-dashboard">Bienvenidos al mejor gestor de ventas </h1><br/>
				<h2>Grupo WB-JS</h2>
				<img className="imagen-login" src={(user.photoURL) ? user.photoURL: Foto} alt="" />
				<h3>Hola, {user.displayName ? user.displayName:'Usuario'}</h3>
				<h3>Tu correo es: {user.email} </h3>
			</div>
		</center>
		</>
		
	)
}
}
export default Dashboard;
