import React from 'react';

import './ListadoProductos.css';
import {
  Table,
  Button,
  Container
} from "reactstrap";
import ModalCrearProducto from '../ModalCrearProducto/ModalCrearProducto';
import ModalEditarProducto from '../ModalEditarProducto/ModalEditarProducto';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";
////////////////////////////// DATOS DE PRUEBA
const data = [
  // { id: 1, descripcion: "Producto 1", valor: "1000", estado: "Disponible"},
  // { id: 2, descripcion: "Producto 2", valor: "2000", estado: "Disponible" },
  // { id: 3, descripcion: "Producto 3", valor: "3000", estado: "No Disponible" },
  // { id: 4, descripcion: "Producto 4", valor: "4000", estado: "Disponible"},
  // { id: 5, descripcion: "Producto 5", valor: "5000", estado: "Disponible" }
];
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_PRODUCTOS_VENTAS_PATH;


const ListadoProductos = () => {
  const auth = getAuth(); 
  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);
  const [errors, setErrors] = React.useState(null);
  const [newVal, setNewVal] = React.useState(0);
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: { 
      descripcion: "",
      valor: "",
      estado: ""
    }
  });
  let arregloUsuarios = usuario.data;

  React.useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
  }, [user, loading]);

 

  React.useEffect(() => {
    if (!user) return history.replace("/");
    user.getIdToken(true).then(token => {
      // sessionStorage.setItem("token", token) 
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
            setErrors(error);
          }
        )
    });
  }, [newVal]);

  const handleChange = (datosImput) => {
    setUsuario((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [datosImput.target.name]: datosImput.target.value,
      }
    }));
  };

  const mostrarModalActualizar = (datoId) => {
    debugger
    let userToModify;
    arregloUsuarios.map((registro) => {
      if (datoId.target.id === registro._id) {
        userToModify = registro;
      }
      return console.log("Mostro Modal Actualizar");
    });    
    setUsuario({
      ...usuario,
      form: userToModify
    });
    setModalActualizar(true);
  };
  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };
  
  const eliminar = (datoID) => {
    //let arregloUsuarios = usuario.data;
    arregloUsuarios.map((registro) => {
      if ( datoID.target.id=== registro._id) {
        let opcion = window.confirm("¿Está seguro que desea eliminar el Usuario " + registro.nombreUsuario + "?");
        if (opcion) {
          borrarCustomer(registro._id);
        }
      }
      return console.log("Elimino Correctamente");
    });
  };
  

  const borrarCustomer = (id) => {
    user.getIdToken(true).then(token => {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(`${BASE_URL}${PATH_CUSTOMERS}/${id}`, requestOptions)
        .then(result => result.json())
        .then(
          (result) => {
            setNewVal(newVal + 1);
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  return (
    < >
    <Sidebar  />
      <Container>
        <h1 className="titulos">Listado Productos</h1>
        <br />
        <Button color="success" onClick={mostrarModalInsertar}>Crear</Button>
        <br />
        <br />
        <div id="lista">
          <Table >
            <thead className="encabezados">
              <tr>
                <th>Descripción</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {usuario.data.map((dato) => (
                <tr key={dato._id}>
                  <td>{dato.descripcion}</td>
                  <td>{dato.valor}</td>
                  <td>{dato.estado}</td>
                  <td>
                    <Button
                      color="primary" id={dato._id}
                      onClick={mostrarModalActualizar}
                    >
                      Editar
                    </Button>{" "}
                    <Button id={dato._id} color="danger" onClick={eliminar}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ModalCrearProducto
            usuario={usuario}
            handleChange={handleChange}
            setModalInsertar={setModalInsertar}
            isOpen={modalInsertar}
            setNewVal={setNewVal}
            newVal={newVal}
            BASE_URL={BASE_URL}
            PATH_CUSTOMERS={PATH_CUSTOMERS}
          />
          <ModalEditarProducto
            usuario={usuario}
            handleChange={handleChange}
            setModalActualizar={setModalActualizar}
            isOpen={modalActualizar}
            setNewVal={setNewVal}
            newVal={newVal}
            BASE_URL={BASE_URL}
            PATH_CUSTOMERS={PATH_CUSTOMERS}
          />
        </div>
      </Container>

    </>
  );
}


export default ListadoProductos;
