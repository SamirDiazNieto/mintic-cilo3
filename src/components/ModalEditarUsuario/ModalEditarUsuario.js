import React from 'react';
import './ModalEditarUsuario.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Input,
} from "reactstrap";



const ModalEditarUsuario = ({usuario, handleChange,setModalActualizar,isOpen, setNewVal, newVal,BASE_URL,PATH_CUSTOMERS}) => {
  const estados = ["Seleccione una Opción","Pendiente","No Autorizado","Autorizado"]
  const roles =["Seleccione una Opción","Administrador", "Vendedor"]
  
  const listarRoles = roles.map((Rol) =>{
    if(Rol===usuario.form.rol){
      return (<option name="rol" selected value={Rol}>{Rol}</option>)
    }
    else{
      return (<option name="rol" value={Rol}>{Rol}</option>)
    } 
  });
  const listarEstados = estados.map((Estado) =>{
    if(Estado===usuario.form.estado){
      return (<option name="rol" selected value={Estado}>{Estado}</option>)
    }
    else{
      return (<option name="rol" value={Estado}>{Estado}</option>)
    } 
  });
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
          <div><h3>Actualizar usuario {usuario.form.nombreUsuario}</h3></div>
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
              value={usuario.form.id}
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
              value={usuario.form.nombreUsuario}
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
            <Input type="select" name ="rol" onChange={handleChange}>
              {listarRoles}
            </Input>
          </label>
          
        </FormGroup>

        <FormGroup>
          <label>
            Estado:
          </label>
          <Input type="select" name ="estado" onChange={handleChange}>
              {listarEstados}
            </Input>
          
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
