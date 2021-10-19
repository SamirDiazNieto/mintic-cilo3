import React from 'react';
import './VistaTabla.css';
import { Table, Button, Container } from 'reactstrap';
import ModalCrear from '../ModalCrear/ModalCrear';
import ModalEditar from '../ModalEditar/ModalEditar';

////////////////////////////// DATOS DE PRUEBA
const data = [
<<<<<<< HEAD
	{ id: 1, email: 'homero.simpson@gmail.com', phoneNumber: '12345667', address: 'Av Simpre Viva 123', firstName: 'Homero', lastName: 'Simpson' },
	{ id: 2, email: 'bart.simpson@gmail.com', phoneNumber: '12345667', address: 'Av Simpre Viva 123', firstName: 'Bart', lastName: 'Simpson' },
	{ id: 3, email: 'marge.simpson@gmail.com', phoneNumber: '12345667', address: 'Av Simpre Viva 123', firstName: 'Marge', lastName: 'Simpson' },
	{ id: 4, email: 'lisa.simpson@gmail.com', phoneNumber: '12345667', address: 'Av Simpre Viva 123', firstName: 'Lisa', lastName: 'Simpson' },
	{ id: 5, email: 'maggy.simpson@gmail.com', phoneNumber: '12345667', address: 'Av Simpre Viva 123', firstName: 'Maggy', lastName: 'Simpson' },
];

const variable = 'Samir';

const VistaTabla = () => {
	const [modalActualizar, setModalActualizar] = React.useState(false);
	const [modalInsertar, setModalInsertar] = React.useState(false);
	const [usuario, setUsuario] = React.useState({
		data: data,
		form: {
			id: '',
			email: '',
			phoneNumber: '',
			address: '',
			firstName: '',
			lastName: '',
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
				let opcion = window.confirm('¿Está seguro que desea eliminar el valor ' + registro.firstName + '?');
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
=======
<<<<<<< HEAD
  { id: 1, email: "homero.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Homero", lastName: "Simpson" },
  { id: 2, email: "bart.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Bart", lastName: "Simpson" },
  { id: 3, email: "marge.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Marge", lastName: "Simpson" },
  { id: 4, email: "lisa.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Lisa", lastName: "Simpson" },
  { id: 5, email: "maggy.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Maggy", lastName: "Simpson" }
];

const variable = "Samir";
=======
  // { id: 1, email: "homero.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Homero", lastName: "Simpson" },
  // { id: 2, email: "bart.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Bart", lastName: "Simpson" },
  // { id: 3, email: "marge.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Marge", lastName: "Simpson" },
  // { id: 4, email: "lisa.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Lisa", lastName: "Simpson" },
  // { id: 5, email: "maggy.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Maggy", lastName: "Simpson" }
];

const variable = "Samir";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_CUSTOMERS_PATH;
>>>>>>> JeisonEslava


const VistaTabla = () => {
  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);
<<<<<<< HEAD
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      id: "",
      email: "",
      phoneNumber: "",
      address: "",
      firstName: "",
      lastName: ""
=======
  const [newVal, setNewVal] = React.useState(0);
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      // id: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: ""
>>>>>>> JeisonEslava
    }
  });
  let arregloUsuarios = usuario.data;

  const handleChange = (datosImput) => {
    setUsuario((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [datosImput.target.name]: datosImput.target.value,
      }
    }));
  };
<<<<<<< HEAD
  const mostrarModalActualizar = (datoId) => {
    let userToModify;
    arregloUsuarios.map((registro) => {
      if ( parseInt(datoId.target.id) === registro.id) {
=======
  
  React.useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          //setIsLoaded(true);
          setUsuario({
            ...usuario,
            data: result
          });
        },
        (error) => {
          //setIsLoaded(true);
          //setErrors(error);
        }
      )
  }, [newVal]);
  
  const mostrarModalActualizar = (datoId) => {
    let userToModify;
    
    arregloUsuarios.map((registro) => {
      if ( datoId.target.id === registro._id) {
>>>>>>> JeisonEslava
        userToModify = registro;
        }
        return console.log("Mostro Modal Actualizar");
    });
<<<<<<< HEAD
    // listarUsuarios(userToModify);
=======
>>>>>>> JeisonEslava
     setUsuario({
       ...usuario,
     form: userToModify
     });
    setModalActualizar(true);
  };
<<<<<<< HEAD
=======

>>>>>>> JeisonEslava
  const mostrarModalInsertar = () => {
    setModalInsertar(true);
    return console.log("Mostro Modal Actualizar");
  };
<<<<<<< HEAD
  const eliminar = (datoID) => {
    let contador = 0;
    //let arregloUsuarios = usuario.data;
    arregloUsuarios.map((registro) => {
      if ( parseInt(datoID.target.id) === registro.id) {
        let opcion = window.confirm("¿Está seguro que desea eliminar el valor " + registro.firstName + "?");
        if (opcion) {
          arregloUsuarios.splice(contador, 1);
        }
      }
      contador++;
      return console.log("Elimino Correctamente");
    });
listarUsuarios(arregloUsuarios);
  };
const listarUsuarios= (datos) =>{
    setUsuario({
      ...usuario,
      data: datos
    });
  }
=======

  const eliminar = (e) => {
    arregloUsuarios.map((registro) => {
      if (e.target.id === registro._id) {
        let opcion = window.confirm("¿Está seguro que desea eliminar el valor " + registro.firstName + "?");
        if (opcion) {
          borrarCustomer(registro._id);
        }
      }
      return console.log("Elimino Correctamente");
    });
  };

  const borrarCustomer  = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}/${id}`, requestOptions)
      .then(result => result.json())
      .then(
        (result) => {
         setNewVal(newVal + 1);
        },
        (error) => {
          console.log("se presento un erroor en el fetch")
          console.log(error);
        }
      );
  }
  

>>>>>>> JeisonEslava

  return (
    < >
      <Container>
        <h1 className="titulos">Interfaz de ingreso {variable}</h1>
        <br />
        <Button color="success" onClick={mostrarModalInsertar}>Crear</Button>
        <br />
        <br />
        <div id="lista">
        <Table >
          <thead className="encabezados">
            <tr>
              <th>Email</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dirección</th>
              <th>Telefóno</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {usuario.data.map((dato) => (
<<<<<<< HEAD
              <tr key={dato.id}>
=======
              <tr key={dato._id}>
>>>>>>> JeisonEslava
                <td>{dato.email}</td>
                <td>{dato.firstName}</td>
                <td>{dato.lastName}</td>
                <td>{dato.address}</td>
                <td>{dato.phoneNumber}</td>
                <td>
                  <Button
<<<<<<< HEAD
                    color="primary" id={dato.id}
=======
                    color="primary" id={dato._id}
>>>>>>> JeisonEslava
                    onClick={mostrarModalActualizar}
                  >
                    Editar
                  </Button>{" "}
<<<<<<< HEAD
                  <Button id={dato.id} color="danger" onClick={eliminar}>Eliminar</Button>
=======
                  <Button id={dato._id} color="danger" 
                  onClick={eliminar}>Eliminar</Button>
>>>>>>> JeisonEslava
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
          <ModalCrear 
                    usuario={usuario}
<<<<<<< HEAD
                    arregloUsuarios={arregloUsuarios}
                    listarUsuarios={listarUsuarios} 
                    handleChange={handleChange}
                    setModalInsertar={setModalInsertar}
                    isOpen={modalInsertar}
          />
          <ModalEditar 
                    usuario={usuario}
                    arregloUsuarios={arregloUsuarios}
                    listarUsuarios={listarUsuarios} 
                    handleChange={handleChange}
                    setModalActualizar={setModalActualizar}
                    isOpen={modalActualizar}
=======
                    handleChange={handleChange}
                    setModalInsertar={setModalInsertar}
                    isOpen={modalInsertar}
                    setNewVal={setNewVal}
                    newVal={newVal}
                    BASE_URL={BASE_URL}
                    PATH_CUSTOMERS={PATH_CUSTOMERS}
          />
          <ModalEditar 
                    usuario={usuario}
                    handleChange={handleChange}
                    setModalActualizar={setModalActualizar}
                    isOpen={modalActualizar}
                    setNewVal={setNewVal}
                    newVal={newVal}
                    BASE_URL={BASE_URL}
                    PATH_CUSTOMERS={PATH_CUSTOMERS}
>>>>>>> JeisonEslava
          />
        </div>
      </Container>
>>>>>>> 7fa4dd7ef2e766bb964bf6abae43ec33aab2ed57

	return (
		<>
			<Container>
				<h1 className='titulos'>Interfaz de ingreso {variable}</h1>
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
								<th>Email</th>
								<th>Nombre</th>
								<th>Apellido</th>
								<th>Dirección</th>
								<th>Telefóno</th>
								<th>Acción</th>
							</tr>
						</thead>

						<tbody>
							{usuario.data.map((dato) => (
								<tr key={dato.id}>
									<td>{dato.email}</td>
									<td>{dato.firstName}</td>
									<td>{dato.lastName}</td>
									<td>{dato.address}</td>
									<td>{dato.phoneNumber}</td>
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
					<ModalCrear
						usuario={usuario}
						arregloUsuarios={arregloUsuarios}
						listarUsuarios={listarUsuarios}
						handleChange={handleChange}
						setModalInsertar={setModalInsertar}
						isOpen={modalInsertar}
					/>
					<ModalEditar
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

export default VistaTabla;
