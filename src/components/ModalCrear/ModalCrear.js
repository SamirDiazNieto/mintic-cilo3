import React from 'react';
import './ModalCrear.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";


const ModalCrear = ({usuario, arregloUsuarios, listarUsuarios, handleChange,setModalInsertar,isOpen}) => {
  

const cerrarModalInsertar = () => {
  setModalInsertar(false);
};
const insertar = () => {
  let usuarioACrear = { ...usuario.form };
  usuarioACrear.id = usuario.data.length + 1;
  arregloUsuarios.push(usuarioACrear);
listarUsuarios(arregloUsuarios);
  setModalInsertar(false);
}

return (
  <Modal isOpen={isOpen}>
  <ModalHeader>
    <div><h3>Insertar Usuario</h3></div>
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
        value={usuario.data.length + 1}
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
      />
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



export default ModalCrear;
