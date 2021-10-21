import React from 'react';
import './ModalCrearUsuario.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";


const ModalCrearUsuario = ({ usuario, handleChange, setModalInsertar, isOpen, setNewVal, newVal,BASE_URL,PATH_CUSTOMERS }) => {


  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };
  const insertar = () => {
    let usuarioACrear = { ...usuario.form };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuarioACrear)
    };
    console.log(usuarioACrear);
    console.log(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions);
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
      .then(
        (response) => {
          response.json();
          setNewVal(newVal + 1);
        },
        (error) => {
          // setIsLoaded(true);
          // setErrors(error);
        })
    setModalInsertar(false);
  }

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div><h3>Insertar Usuario</h3></div>
      </ModalHeader>

      <ModalBody>
        {/* <FormGroup>
          <label>
            Id:
          </label>

          <input
            className="form-control"
            readOnly
            type="text"
            value={usuario.data.length + 1}
          />
        </FormGroup> */}
        <FormGroup>
          <label>
            Nombre:
          </label>
          <input
            className="form-control"
            name="nombreUsuario"
            type="text"
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>
            password:
          </label>
          <input
            className="form-control"
            name="password"
            // type="password"
            type="text"
            min="1"
            step="any"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Rol:
          </label>
          <select name="rol" className="form-control"  type="text" onChange={handleChange}>
            <option value="-1" type="text">Seleccione una opción</option>
            <option value="administrador" type="text">Administrador</option>
            <option value="Vendedor" type="text">Vendedor</option>            
          </select>
          {/* <input
            className="form-control"
            name="estado"
            type="text"
            onChange={handleChange}
          /> */}
        </FormGroup>

        <FormGroup>
          <label>
            Estado:
          </label>
          <select name="estado" className="form-control" type="text" onChange={handleChange}>
            <option value="-1" type="text">Seleccione una opción</option>
            <option value="pendiente" type="text"> Pendiente</option>
            <option value="noAutorizado" type="text">No Autorizado</option>
            <option value="autorizado" type="text">Autorizado</option>

          </select>
          {/* <input
            className="form-control"
            name="estado"
            type="text"
            onChange={handleChange}
          /> */}
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={insertar}
        >
          Insertar
        </Button>
        <Button
          className="btn btn-danger"
          onClick={cerrarModalInsertar}
        >
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
}



export default ModalCrearUsuario;
