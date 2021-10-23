import React from 'react';
import './ListadoProductos.css';
import { Table, Button, Container } from 'reactstrap';
import ModalCrearProducto from '../ModalCrearProducto/ModalCrearProducto';
import ModalEditarProducto from '../ModalEditarProducto/ModalEditarProducto';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

////////////////////////////// DATOS DE PRUEBA
const data = [
	{ id: 1, descripcion: 'Producto 1', valor: '1000', estado: 'Disponible' },
	{ id: 2, descripcion: 'Producto 2', valor: '2000', estado: 'Disponible' },
	{ id: 3, descripcion: 'Producto 3', valor: '3000', estado: 'No Disponible' },
	{ id: 4, descripcion: 'Producto 4', valor: '4000', estado: 'Disponible' },
	{ id: 5, descripcion: 'Producto 5', valor: '5000', estado: 'Disponible' },
];

const ListadoProductos = () => {
	const [modalActualizar, setModalActualizar] = React.useState(false);
	const [modalInsertar, setModalInsertar] = React.useState(false);
	const [usuario, setUsuario] = React.useState({
		data: data,
		form: {
			id: '',
			descripcion: '',
			valor: '',
			estado: '',
		},
	});
	let arregloUsuarios = usuario.data;

	const handleChange = (datosImput) => {
		setUsuario((prevState) => ({
			...prevState,
			form: {
				...prevState.form,
				[datosImput.target.name]: datosImput.target.value,
			},
		}));
	};
	const mostrarModalActualizar = (datoId) => {
		let userToModify;
		arregloUsuarios.map((registro) => {
			if (parseInt(datoId.target.id) === registro.id) {
				userToModify = registro;
			}
			return console.log('Mostro Modal Actualizar');
		});
		// listarUsuarios(userToModify);
		setUsuario({
			...usuario,
			form: userToModify,
		});
		setModalActualizar(true);
	};
	const mostrarModalInsertar = () => {
		setModalInsertar(true);
		return console.log('Mostro Modal Actualizar');
	};
	const eliminar = (datoID) => {
		let contador = 0;
		//let arregloUsuarios = usuario.data;
		arregloUsuarios.map((registro) => {
			if (parseInt(datoID.target.id) === registro.id) {
				let opcion = window.confirm('¿Está seguro que desea eliminar el producto ' + registro.descripcion + '?');
				if (opcion) {
					arregloUsuarios.splice(contador, 1);
				}
			}
			contador++;
			return console.log('Elimino Correctamente');
		});
		listarUsuarios(arregloUsuarios);
	};
	const listarUsuarios = (datos) => {
		setUsuario({
			...usuario,
			data: datos,
		});
	};

	return (
		<>
			<Sidebar />
			<Container>
				<h1 className='titulos'>Listado Productos</h1>
				<br />
				<Button color='success' onClick={mostrarModalInsertar}>
					Crear
				</Button>
				<br />
				<br />
				<div id='lista'>
					<Table>
						<thead className='encabezados'>
							<tr>
								<th>Descripción</th>
								<th>Valor Unitario</th>
								<th>Estado</th>
								<th>Acción</th>
							</tr>
						</thead>

						<tbody>
							{usuario.data.map((dato) => (
								<tr key={dato.id}>
									<td>{dato.descripcion}</td>
									<td>{dato.valor}</td>
									<td>{dato.estado}</td>
									<td>
										<Button color='primary' id={dato.id} onClick={mostrarModalActualizar}>
											Editar
										</Button>{' '}
										<Button id={dato.id} color='danger' onClick={eliminar}>
											Eliminar
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<ModalCrearProducto
						usuario={usuario}
						arregloUsuarios={arregloUsuarios}
						listarUsuarios={listarUsuarios}
						handleChange={handleChange}
						setModalInsertar={setModalInsertar}
						isOpen={modalInsertar}
					/>
					<ModalEditarProducto
						usuario={usuario}
						arregloUsuarios={arregloUsuarios}
						listarUsuarios={listarUsuarios}
						handleChange={handleChange}
						setModalActualizar={setModalActualizar}
						isOpen={modalActualizar}
					/>
				</div>
			</Container>
		</>
	);
};

export default ListadoProductos;
