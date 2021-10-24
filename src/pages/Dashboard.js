import React, { useState } from 'react';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

import { useTable, useGlobalFilter, useAsyncDebounce } from "react-table";
import { useMemo } from "react";
import { Button } from 'reactstrap';

function Dashboard() {

   
	return (
		<>
			<Sidebar />
			<center>
				<h1 >Bienvenidos al mejor gestor de ventas </h1><br/>
				<h2>Grupo WB-JS</h2>
			</center>
			</>
		
	)
}

export default Dashboard;
