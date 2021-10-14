import React from 'react';
import './ModalEditarUsuario.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



const ModalEditarUsuario = ({usuario, arregloUsuarios, listarUsuarios, handleChange,setModalActualizar,isOpen}) => {

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
          <div><h3>Actualizar usuario {usuario.form.id}</h3></div>
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
              Nombre:
            </label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={handleChange}
              value={usuario.form.nombre}
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
              type="password"
              onChange={handleChange}
              value={usuario.form.password}
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

export default ModalEditarUsuario;
