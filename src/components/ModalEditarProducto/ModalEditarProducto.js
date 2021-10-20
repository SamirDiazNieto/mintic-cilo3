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

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_PRODUCTOS_VENTAS_PATH;


const ModalEditarProducto = ({usuario, arregloUsuarios, handleChange,setModalActualizar,isOpen}) => {
   const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };
  // const editar = () => {
  //   // let contador = 0;
  //   // let usuarioAModificar = { ...usuario.data[0] };
  //   // //let arregloUsuarios = usuario.data;
  //   // arregloUsuarios.map((registro) => {
  //   //   if (usuarioAModificar._id === registro.id) {
  //   //     arregloUsuarios[contador]= usuarioAModificar;
  //   //   }
  //   //   contador++;
  //   //   return console.log("Edito Correctamente");
  //   // });
    
    
  // };

  const editar = () => {
    let customer = { ...usuario.form };

    const requestOptions = { 
      method: 'PUT', 
      headers: { 
        'Content-Type': 'application/json' 
      }, 
      body: JSON.stringify(customer) };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}/${customer._id}`, requestOptions)
      .then(result => result.json()).then((result) => {
          //setModalActualizar(false);
        },(error) => {console.log(error);
      });
  };

  
  return (
  <Modal isOpen={isOpen}>
        <ModalHeader>
          <div><h3>Actualizar Producto {usuario.form._id}</h3></div>
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
              value={usuario.form._id}
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
            onClick={editar()}
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
