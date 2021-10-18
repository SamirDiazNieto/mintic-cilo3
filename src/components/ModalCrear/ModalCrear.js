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


<<<<<<< HEAD
const ModalCrear = ({usuario, arregloUsuarios, listarUsuarios, handleChange,setModalInsertar,isOpen}) => {
  
=======
const ModalCrear = ({usuario, handleChange,setModalInsertar,isOpen, setNewVal, newVal,BASE_URL,PATH_CUSTOMERS}) => {

  console.log(PATH_CUSTOMERS)
>>>>>>> JeisonEslava

const cerrarModalInsertar = () => {
  setModalInsertar(false);
};
<<<<<<< HEAD
const insertar = () => {
  let usuarioACrear = { ...usuario.form };
  usuarioACrear.id = usuario.data.length + 1;
  arregloUsuarios.push(usuarioACrear);
listarUsuarios(arregloUsuarios);
  setModalInsertar(false);
}
=======

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
};
>>>>>>> JeisonEslava

return (
  <Modal isOpen={isOpen}>
  <ModalHeader>
    <div><h3>Insertar Usuario</h3></div>
  </ModalHeader>

  <ModalBody>
<<<<<<< HEAD
    <FormGroup>
=======
    {/* <FormGroup>
>>>>>>> JeisonEslava
      <label>
        Id:
      </label>

      <input
        className="form-control"
        readOnly
        type="text"
        value={usuario.data.length + 1}
      />
<<<<<<< HEAD
    </FormGroup>
=======
    </FormGroup> */}
>>>>>>> JeisonEslava
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
<<<<<<< HEAD
        type="text"
=======
        type="number"
>>>>>>> JeisonEslava
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
