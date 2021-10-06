import React from 'react';
import './VistaTabla.css';
import {
  Table,
  Button,
  Container,

} from "reactstrap";
import ModalCrear from '../ModalCrear/ModalCrear';
import ModalEditar from '../ModalEditar/ModalEditar';

////////////////////////////// DATOS DE PRUEBA
const data = [
  { id: 1, email: "homero.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Homero", lastName: "Simpson" },
  { id: 2, email: "bart.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Bart", lastName: "Simpson" },
  { id: 3, email: "marge.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Marge", lastName: "Simpson" },
  { id: 4, email: "lisa.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Lisa", lastName: "Simpson" },
  { id: 5, email: "maggy.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Maggy", lastName: "Simpson" }
];

const variable = "Samir";


const VistaTabla = () => {
  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      id: "",
      email: "",
      phoneNumber: "",
      address: "",
      firstName: "",
      lastName: ""
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
              <tr key={dato.id}>
                <td>{dato.email}</td>
                <td>{dato.firstName}</td>
                <td>{dato.lastName}</td>
                <td>{dato.address}</td>
                <td>{dato.phoneNumber}</td>
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
            }


export default VistaTabla;
