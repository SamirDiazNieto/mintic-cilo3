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




const ModalEditar = ({usuario, handleChange,setModalActualizar,isOpen, setNewVal, newVal,BASE_URL,PATH_CUSTOMERS}) => {


  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };
  const editar = () => {

    let usuarioAModificar = { ...usuario.form };
    actualizarCustomer(usuarioAModificar);
    setModalActualizar(false);
  };
  const actualizarCustomer = (customer) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}/${customer._id}`, requestOptions)
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
  <Modal isOpen={isOpen}>
        <ModalHeader>
          <div><h3>Actualizar Usuario {usuario.form.name}</h3></div>
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

              value={usuario.form._id}
            />
          </FormGroup> */}


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
