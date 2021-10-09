import React from 'react';
import './ListadoUsuarios.css';
import {
  Table,
  Button,
  Container,

} from "reactstrap";
import ModalCrearProducto from '../ModalCrearUsuario/ModalCrearUsuario';
import ModalEditarProducto from '../ModalEditarUsuario/ModalEditarUsuario';

////////////////////////////// DATOS DE PRUEBA
const data = [
  { id: 1, nombreUsuario: "Producto 1", password: "1000", rol: "vendedor", estado:"Pendiente"},
  { id: 2, nombreUsuario: "Producto 1", password: "1000", rol: "Administrador", estado:"Aceptado"},
  { id: 3, nombreUsuario: "Producto 1", password: "1000", rol: "vendedor", estado:"No aceptado"},
];

const ListadoUsuarios = () => {
  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      id: "",
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
  const mostrarModalActualizar = (datoId) => {
    let userToModify;
    arregloUsuarios.map((registro) => {
      if ( parseInt(datoId.target.id) === registro.id) {
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
    let contador = 0;
    //let arregloUsuarios = usuario.data;
    arregloUsuarios.map((registro) => {
      if ( parseInt(datoID.target.id) === registro.id) {
        let opcion = window.confirm("¿Está seguro que desea eliminar el Usuario " + registro.descripcion + "?");
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

  return (
    < >
      <Container>
        <h1 className="titulos">Listado Usuarios</h1>
        <br />
        <Button color="success" onClick={mostrarModalInsertar}>Crear</Button>
        <br />
        <br />
        <div id="lista">
        <Table >
          <thead className="encabezados">
            <tr>
              <th>nombre</th>
              <th>password</th>
              <th>rol</th>
              <th>estado</th>
            </tr>
          </thead>

          <tbody>
            {usuario.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.nombreUsuario}</td>
                <td>{dato.password}</td>
                <td>{dato.rol}</td>
                <td>{dato.estado}</td>
                <td>
                  <Button
                    color="primary" id={dato.id}
                    onClick={mostrarModalActualizar}
                  >
                    Editar
                  </Button>{" "}
                  <Button id={dato.id} color="danger" onClick={eliminar}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
          <ModalCrearUsuario 
                    usuario={usuario}
                    arregloUsuarios={arregloUsuarios}
                    listarUsuarios={listarUsuarios} 
                    handleChange={handleChange}
                    setModalInsertar={setModalInsertar}
                    isOpen={modalInsertar}
          />
          <ModalEditarUsuario 
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
            }


export default ListadoUsuarios;
