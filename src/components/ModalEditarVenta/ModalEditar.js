import React from 'react';
import './ModalEditar.css';

import {
  Row,

  Col,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Alert,
  Container
} from "reactstrap";
import "jsxstyle"

const ModalEditar = ({ IdVendedor, venta, handleChange, arregloVentas, listarVentas, setModalActualizar, isOpen }) => {


  const productos = [{ Element: "Pollo", valorUnitario: 2000 },
  { Element: "carne", valorUnitario: 6000 },
  { Element: "cerdo", valorUnitario: 10000 },
  { Element: "cafe", valorUnitario: 20000 }]
  const listItemsProducto = productos.map((Producto) =>

    <option name="IdProducto" onChange={handleChange} value={Producto.Element}>{Producto.Element}</option>
  );
  console.log(venta)
  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };
  const editar = () => {
    let contador = 0;
    let ventaAModificar = { ...venta.form };
    console.log(venta)
    //let arregloVentas = venta.data;
    arregloVentas.map((registro) => {
      if (ventaAModificar.id === registro.id) {
        arregloVentas[contador] = ventaAModificar;
      }
      contador++;
      return console.log("Edito Correctamente");
    });
    listarVentas(arregloVentas);
    setModalActualizar(false);

  };
  let resultado
  const costoUnitario = () => {
    console.log(venta.form.IdProducto)
    //let arregloVentas = venta.data;
    
    productos.map((Producto) => {
      console.log(Producto.Element)
      if (Producto.Element === venta.form.IdProducto) {
        console.log(Producto.valorUnitario)
        resultado = Producto.valorUnitario;
        

      }
      

      
    },
    console.log(resultado));

  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div><h3>Actualizar Venta ({venta.form.IdProducto}) </h3></div>
      </ModalHeader>

      <ModalBody >
        <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
          <label>
            Id:
          </label>
          <input
            className="form-control"
            readOnly
            type="number"
            value={venta.form.id}

          />
        </FormGroup>
        <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
          <label>
            Producto:
          </label>

          
          <Input type="select" >
            {listItemsProducto}
          </Input>

        </FormGroup>

        <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
          <label background='red'>
            cantidad:
          </label>
          <input
            className="form-control "
            name="cantidad"
            type="number"
            onChange={handleChange}
            value={venta.form.cantidad}


          />
        </FormGroup>


        <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
          <label>
            Precio Unitario:
          </label>
          <input
            
            className="form-control"
            name="precioUnitario"
            type="text"
            onChange={handleChange}
            value={venta.form.precioUnitario}

          />
        </FormGroup>

        <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
          <label>
            Total:
          </label>
          <input
          readOnly
            className="form-control"
            name="valorTotal"
            type="number"
            onChange={handleChange}
            value={venta.form.cantidad*venta.form.precioUnitario}

          />
        </FormGroup>
        <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
          <label>
            Estado:
          </label>
          <input
            className="form-control"
            name="estado"
            type="text"
            onChange={handleChange}
            value={venta.form.estado}

          />
          </FormGroup>
          <Label for="selector">--{venta.form.IdProducto}</Label>
        <Container>
          <br />
          <Label>Datos del Clientes</Label><hr />
          <div>
          
          </div>
          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
          
            <label>
              Fecha:
            </label>
            <input

              className="form-control"
              name="fechaVenta"
              type="date"
              onChange={handleChange}
              value={venta.form.fechaVenta}

            />
          </FormGroup>
          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
            <label>
              Cedula:

            </label>
            <input

              className="form-control"
              name="cedulaCliente"
              type="number"
              onChange={handleChange}
              value={venta.form.cedulaCliente}

            />
          </FormGroup>
          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
            <label>
              Nombre:

            </label>
            <input

              className="form-control"
              name="nombreCliente"
              type="text"
              onChange={handleChange}
              value={venta.form.nombreCliente} 

            />
          </FormGroup>
          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
            <label>
              Vendedor:

            </label>
            <input
              readOnly
              className="form-control"
              name="nombreCliente"
              type="text"
              onChange={handleChange}
              value={IdVendedor}

            />
          </FormGroup>
        </Container>


        
      





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
