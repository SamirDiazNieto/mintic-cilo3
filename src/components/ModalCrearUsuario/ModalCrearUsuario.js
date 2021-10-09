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


const ModalCrearProducto = ({ usuario, arregloUsuarios, listarUsuarios, handleChange, setModalInsertar, isOpen }) => {


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
            Nombre:
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
            password:
          </label>
          <input
            className="form-control"
            name="valor"
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
          <select name="rol" className="form-control" onChange={handleChange}>
            <option value="-1">Seleccione una opción</option>
            <option value="administrador">Administrador</option>
            <option value="Vendedor">Vendedor</option>            
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
          <select name="estado" className="form-control" onChange={handleChange}>
            <option value="-1">Seleccione una opción</option>
            <option value="pendiente">Pendiente</option>
            <option value="noAutorizado">No Autorizado</option>
            <option value="autorizado">Autorizado</option>

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
