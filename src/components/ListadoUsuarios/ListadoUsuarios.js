import React, { useState } from 'react';
import './ListadoUsuarios.css';
import { Table, Button, Container } from 'reactstrap';
import ModalCrearUsuario from '../ModalCrearUsuario/ModalCrearUsuario';
import ModalEditarUsuario from '../ModalEditarUsuario/ModalEditarUsuario';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useTable } from "react-table";


import  { useEffect, useMemo, useRef } from "react";
////////////////////////////// DATOS DE PRUEBA
const data = [

  // { id: 1, nombre: "Producto 1", password: "1000", rol: "vendedor", estado:"Pendiente"},
  // { id: 2, nombre: "Producto 1", password: "1000", rol: "Administrador", estado:"Aceptado"},
  // { id: 3, nombre: "Producto 1", password: "1000", rol: "vendedor", estado:"No aceptado"},

];


const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_USUARIOS_PATH;

const ListadoUsuarios = () => {

  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);
  const [newVal, setNewVal] = React.useState(0);
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      // id: "",
      nombreUsuario: "",
      password: "",
      rol: "",
      estado:""
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
        userToModify = registro;
        }
        return console.log("Mostro Modal Actualizar");
    });
    // listarUsuarios(userToModify);
     setUsuario({
       ...usuario,
     form: userToModify
     });
    setModalActualizar(true);
    
  };
  const mostrarModalInsertar = () => {
    setModalInsertar(true);
    return console.log("Mostro Modal Actualizar");
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
          console.log(error);
        }
      );
  }

  return (
    <>
    <Sidebar />
      <Container>
        <h1 className="titulos">Listado Usuarios</h1>
        <br />
        <Button disabled={true} color="success" onClick={mostrarModalInsertar}>Crear</Button>
        <br />
        <br />
        <div id="lista">
        
        <Table >
          <thead className="encabezados">
            <tr>
              <th>nombre</th>
              <th>rol</th>
              <th>estado</th>
              <th>opciones</th>
            </tr>
          </thead>

          <tbody>
            {usuario.data.map((dato) => (
              <tr key={dato._id}>
                <td>{dato.nombreUsuario}</td>
                
                <td>{dato.rol}</td>
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
          <ModalCrearUsuario 
                    usuario={usuario} 
                    handleChange={handleChange}
                    setModalInsertar={setModalInsertar}
                    isOpen={modalInsertar}
                    setNewVal={setNewVal}
                    newVal={newVal}
                    BASE_URL={BASE_URL}
                    PATH_CUSTOMERS={PATH_CUSTOMERS}
          />
          <ModalEditarUsuario 
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

export default ListadoUsuarios;
