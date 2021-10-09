import React from 'react';
import './ModalEditarProducto.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



const ModalEditarProducto = ({usuario, arregloUsuarios, listarUsuarios, handleChange,setModalActualizar,isOpen}) => {

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
          <div><h3>Actualizar Producto {usuario.form.id}</h3></div>
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
              Descripción:
            </label>
            <input
              className="form-control"
              name="descripcion"
              type="text"
              onChange={handleChange}
              value={usuario.form.descripcion}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>
              Valor:
            </label>
            <input
              className="form-control"
              name="valor"
              type="number"
              onChange={handleChange}
              value={usuario.form.valor}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Estado:
            </label>
            <input
              className="form-control"
              name="estado"
              type="text"
              onChange={handleChange}
              value={usuario.form.estado}
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

export default ModalEditarProducto;
