import React from 'react';
import './ModalCrearProducto.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_PRODUCTOS_VENTAS_PATH;

const ModalCrearProducto = ({ usuario, arregloUsuarios, listarUsuarios, handleChange, setModalInsertar, isOpen }) => {


  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const insertar = () => {
    let usuarioACrear = { ...Object.fromEntries(Object.entries(usuario.form).filter(([_, v]) => v != '')) };
    const requestOptions = {
      method: 'POST',
      headers:
        { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuarioACrear)
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
      .then((response) => {
        response.json();
        //setNewVal(newVal + 1);
      },
        (error) => {
          //setIsLoaded(true);
          //setErrors(error);
        })
    //listarUsuarios();
    setModalInsertar(false);
  }

  const insertarUser = () => {
    
    setModalInsertar(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div><h3>Insertar Producto</h3></div>
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
            //value={usuario.data.length + 1}
          />
        </FormGroup>
        <FormGroup>
          <label>
            Descripción:
          </label>
          <input
            className="form-control"
            name="descripcion"
            type="text"
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>
            Valor Unitario:
          </label>
          <input
            className="form-control"
            name="valor"
            type="number"
            min="1"
            step="any"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Estado:
          </label>
          <select name="estado" className="form-control" onChange={handleChange}>
            <option value="-1">Seleccione una opción</option>
            <option value="disponible">disponible</option>
            <option value="nodisponible">nodisponible</option>

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



export default ModalCrearProducto;