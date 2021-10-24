import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
// import Foto from '../../assets/foto-perfil.png'



function Dashboard() {
	const auth = getAuth();
	const [user, loading] = useAuthState(auth);
	const URL = "../../assets/logo.png'"
	return (
		<>
			<Sidebar />
			<center>
				<h1 >Bienvenidos al mejor gestor de ventas </h1><br/>
				<h2>Grupo WB-JS</h2>
				<img className="logo" src={URL} alt="" />
		<h1>Hola,{user.displayName ? user.displayName:''}  bienvenido</h1>
		<h1>Tu correo es, {user.email}  bienvenido</h1>
			</center>
		</>
		
	);
}
export default Dashboard;
