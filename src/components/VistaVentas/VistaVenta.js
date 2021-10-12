import React from 'react';
import './VistaVenta.css';
import { Table, Button, Container } from 'reactstrap';
import ModalCrear from '../ModalCrearVenta/ModalCrear';
import ModalEditar from '../ModalEditarVenta/ModalEditar';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

////////////////////////////// DATOS DE PRUEBA
const data = [
	{
		id: 1,
		IdProducto: 'cafe',
		cantidad: 3,
		precioUnitario: 10000,
		valorTotal: 10000,
		fechaVenta: '2021-10-20',
		cedulaCliente: 11111,
		nombreCliente: 'pablo',
		estado: 'en proceso',
		cedulaCliente: 11221222,
		nombreCliente: 'pepito',
		IdVendedor: 'samir',
	},
	{
		id: 2,
		IdProducto: 'cacao',
		cantidad: 3,
		precioUnitario: 10000,
		valorTotal: 10000,
		fechaVenta: '2021-10-20',
		cedulaCliente: 11111,
		nombreCliente: 'pablo',
		estado: 'en proceso',
		cedulaCliente: 11221222,
		nombreCliente: 'pepito',
		IdVendedor: 'samir',
	},
	{
		id: 3,
		IdProducto: 'azucar',
		cantidad: 3,
		precioUnitario: 10000,
		valorTotal: 10000,
		fechaVenta: '2021-10-20',
		cedulaCliente: 11111,
		nombreCliente: 'pablo',
		estado: 'en proceso',
		cedulaCliente: 11221222,
		nombreCliente: 'pepito',
		IdVendedor: 'samir',
	},
	{
		id: 5,
		IdProducto: 'caña',
		cantidad: 3,
		precioUnitario: 10000,
		valorTotal: 10000,
		fechaVenta: '2021-10-20',
		cedulaCliente: 11111,
		nombreCliente: 'pablo',
		estado: 'en proceso',
		cedulaCliente: 11221222,
		nombreCliente: 'pepito',
		IdVendedor: 'samir',
	},
];

const IdVendedor = 'Jeison';

const VistaVenta = () => {
	const [modalActualizar, setModalActualizar] = React.useState(false);
	const [modalInsertar, setModalInsertar] = React.useState(false);
	const [venta, setVenta] = React.useState({
		data: data,
		form: {
			id: '',
			IdProducto: '',
			cantidad: '',
			precioUnitario: '',
			valorTotal: '',
			fechaVenta: '',
		},
	});
	let arregloVentas = venta.data;

	const handleChange = (datosImput) => {
		console.log('ejecute handle');
		console.log(datosImput);
		console.log('fin handle');
		setVenta((prevState) => ({
			...prevState,
			form: {
				...prevState.form,
				[datosImput.target.name]: datosImput.target.value,
			},
		}));
	};
	const mostrarModalActualizar = (datoId) => {
		let saleToModify;
		arregloVentas.map((registro) => {
			if (parseInt(datoId.target.id) === registro.id) {
				saleToModify = registro;
			}
			return console.log('Mostro Modal Actualizar');
		});
		// listarVentas(saleToModify);
		setVenta({
			...venta,
			form: saleToModify,
		});
		setModalActualizar(true);
	};

	const mostrarModalInsertar = () => {
		setModalInsertar(true);
		return console.log('Mostro Modal Actualizar');
	};
	const eliminar = (datoID) => {
		let contador = 0;
		//let arregloVentas = venta.data;
		arregloVentas.map((registro) => {
			if (parseInt(datoID.target.id) === registro.id) {
				let opcion = window.confirm('¿Está seguro que desea eliminar el valor ' + registro.firstName + '?');
				if (opcion) {
					arregloVentas.splice(contador, 1);
				}
			}
			contador++;
			return console.log('Elimino Correctamente');
		});
		listarVentas(arregloVentas);
	};
	const listarVentas = (datos) => {
		setVenta({
			...venta,
			data: datos,
		});
	};

	return (
		<>
			<Sidebar />
			<Container>
				<h1 className='titulos'>Registro de Ventas</h1>
				<br />
				<Button color='success' onClick={mostrarModalInsertar}>
					Registrar Nueva Venta
				</Button>
				<br />
				<br />
				<div id='lista'>
					<Table>
						<thead className='encabezados'>
							<tr>
								<th>ID</th>
								<th>Producto</th>
								<th>Cantidad</th>
								<th>Precio Unitario</th>
								<th>Total</th>
								<th>Estado</th>
								<th>Fecha</th>
							</tr>
						</thead>

						<tbody>
							{venta.data.map((dato) => (
								<tr key={dato.id}>
									<td> {dato.id}</td>
									<td>{dato.IdProducto}</td>
									<td>{dato.cantidad}</td>
									<td>{dato.precioUnitario}</td>
									<td>{dato.valorTotal}</td>
									<td>{dato.estado}</td>
									<td>{dato.fechaVenta}</td>
									<td>
										<Button color='primary' id={dato.id} onClick={mostrarModalActualizar}>
											Editar
										</Button>
										{'     '}
										<Button id={dato.id} color='danger' onClick={eliminar}>
											Eliminar
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<ModalCrear
						IdVendedor={IdVendedor}
						venta={venta}
						arregloVentas={arregloVentas}
						listarVentas={listarVentas}
						handleChange={handleChange}
						setModalInsertar={setModalInsertar}
						isOpen={modalInsertar}
					/>
					<ModalEditar
						IdVendedor={IdVendedor}
						venta={venta}
						arregloVentas={arregloVentas}
						listarVentas={listarVentas}
						handleChange={handleChange}
						setModalActualizar={setModalActualizar}
						isOpen={modalActualizar}
					/>
				</div>
			</Container>
		</>
	);
};

export default VistaVenta;
