import React from 'react';
import './ModalCrear.css';

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


const ModalCrear = ({IdVendedor, venta, arregloVentas, listarVentas, handleChange, setModalInsertar, isOpen }) => {
  const estados = ["en proceso", "cancelada", "entregada"]
  const listarEstados = estados.map((Producto) =>

    <option name="estado" value={Producto}>{Producto}</option>
  );
  const productos = [{ Element: "Pollo", valorUnitario: 2000 },
  { Element: "carne", valorUnitario: 6000 },
  { Element: "cerdo", valorUnitario: 10000 }]
  const listItemsProducto = productos.map((Producto) =>

    <option name="IdProducto" value={Producto.Element}>{Producto.Element}</option>
  );
  let IdProducto = 0;
  const listItemsValor = productos.map((Producto) =>

    <input
      className="form-control"
      readOnly
      name="valorProducto"
      type="text"
      value={Producto.valorUnitario}
    />
  );
  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  function Precio(datoId) {
    return (venta.form.IdProducto)
  }

  const insertar = () => {
    console.log(venta)
    let ventaACrear = { ...venta.form };
    ventaACrear.id = venta.data.length + 1;
    arregloVentas.push(ventaACrear);
    listarVentas(arregloVentas);
    setModalInsertar(false);
  }

  return (
    <Modal isOpen={isOpen} >
      <ModalHeader>
        <div><h3>Insertar Venta</h3></div>
      </ModalHeader>

      <ModalBody>
        
          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
            <label>
              Id:
            </label>

            <input
              className="form-control"
              readOnly
              name="id"
              type="text"
              value={venta.data.length + 1}
            />
          </FormGroup>
          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>


            <Label for="selector">Producto:</Label>
            <Input type="select" name="IdProducto" onChange={handleChange}>
              {listItemsProducto}
            </Input>

          </FormGroup>

          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
            <label>
              Cantidad:
            </label>
            <input
              className="form-control"
              name="cantidad"
              type="number"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
            <label>
              Valor Unitario:
            </label>
            <input

              className="form-control"
              name="precioUnitario"
              type="number"
              onChange={handleChange}


            />
          </FormGroup>

          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }}>
            <label>
              valor Total:
            </label>
            <input
              readOnly
              className="form-control"
              name="valorTotal"
              type="number"
              onChange={handleChange}
              value={venta.form.precioUnitario * venta.form.cantidad}
            />
          </FormGroup>

          <FormGroup style={{ padding: '0px 5px', position: 'relative', float: 'left' }} >
            <label>
              Estado:
            </label>
            <Label for="selector"></Label>
            <Input type="select" name="estado" onChange={handleChange}>
              {listarEstados}
            </Input>
          </FormGroup>

       


        <Container>
          <br />
          <div>
          <Label>Datos del Cliente</Label><hr />
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