import React from 'react';
import './ModalEditar.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



const ModalEditar = ({usuario, arregloUsuarios, listarUsuarios, handleChange,setModalActualizar,isOpen}) => {

  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };
  const editar = () => {
    let contador = 0;
    let usuarioAModificar = { ...usuario.form };
    //let arregloUsuarios = usuario.data;
    arregloUsuarios.map((registro) => {
      if (usuarioAModificar.id === registro.id) {
        arregloUsuarios[contador]= usuarioAModificar;
      }
      contador++;
      return console.log("Edito Correctamente");
    });
    listarUsuarios(arregloUsuarios);
    setModalActualizar(false);
    
  };

  return (
  <Modal isOpen={isOpen}>
        <ModalHeader>
          <div><h3>Actualizar Usuario {usuario.form.id}</h3></div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>
              Id:
            </label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={usuario.form.id}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Email:
            </label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={handleChange}
              value={usuario.form.email}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>
              Nombre:
            </label>
            <input
              className="form-control"
              name="firstName"
              type="text"
              onChange={handleChange}
              value={usuario.form.firstName}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Apellido:
            </label>
            <input
              className="form-control"
              name="lastName"
              type="text"
              onChange={handleChange}
              value={usuario.form.lastName}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Dirección:
            </label>
            <input
              className="form-control"
              name="address"
              type="text"
              onChange={handleChange}
              value={usuario.form.address}
            />
          </FormGroup>
          <FormGroup>
            <label>
              Telefóno:
            </label>
            <input
              className="form-control"
              name="phoneNumber"
              type="text"
              onChange={handleChange}
              value={usuario.form.phoneNumber}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={editar}
          >
            Actualizar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={cerrarModalActualizar}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
  );
}

export default ModalEditar;
