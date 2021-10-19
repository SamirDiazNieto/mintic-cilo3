import React from 'react';
import './VistaVenta.css';
import { Table, Button, Container } from 'reactstrap';
import ModalCrear from '../ModalCrearVenta/ModalCrear';
import ModalEditar from '../ModalEditarVenta/ModalEditar';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

////////////////////////////// DATOS DE PRUEBA
const data = [
 //{ _id: 1, IdProducto: 'cafe', cantidad: 3,precioUnitario:10000, valorTotal:10000, fechaVenta: "2021-10-20", cedulaCliente:11111,nombreCliente: "pablo", estado: "en proceso" , cedulaCliente:11221222, nombreCliente:"pepito", IdVendedor:"samir"},
  //{ id: 2, IdProducto: 'cacao', cantidad: 3,precioUnitario:10000, valorTotal:10000,  fechaVenta: "2021-10-20", cedulaCliente:11111,nombreCliente: "pablo", estado: "en proceso", cedulaCliente:11221222, nombreCliente:"pepito", IdVendedor:"samir"},
  //{ id: 3, IdProducto: 'azucar', cantidad: 3,precioUnitario:10000, valorTotal:10000,  fechaVenta: "2021-10-20", cedulaCliente:11111,nombreCliente: "pablo", estado: "en proceso", cedulaCliente:11221222, nombreCliente:"pepito", IdVendedor:"samir"},
  //{ id: 5, IdProducto: 'caña', cantidad: 3,precioUnitario:10000, valorTotal:10000,  fechaVenta:"2021-10-20", cedulaCliente:11111,nombreCliente: "pablo", estado: "en proceso", cedulaCliente:11221222, nombreCliente:"pepito", IdVendedor:"samir"}
];

const IdVendedor = "Jeison";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_CUSTOMERS_VENTAS_PATH;


const VistaVenta = () => {
  console.log(PATH_CUSTOMERS)
  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);
  const [newVal, setNewVal] = React.useState(0);
  const [venta, setVenta] = React.useState({
    data: data,
    form: {
      //id: "",
    
      IdProducto: "",
      cantidad: "",
      precioUnitario: "",
      valorTotal: "",
      fechaVenta: "",
      cedulaCliente:"",
      estado:"",
      nombreCliente:""
      
    }
  });
  let arregloVentas = venta.data;

  const handleChange = (datosImput) => {
    console.log("ejecute handle")
    console.log(datosImput)
    console.log("fin handle")
    setVenta((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [datosImput.target.name]: datosImput.target.value,
      }
    }));
  };

  React.useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
      .then(res => res.json() )
      .then(
        (result) => {
          console.log("data del result")
          console.log(result)
          //setIsLoaded(true);
          setVenta({
            ...venta,
            data: result
          });
        },
        (error) => {
          console.log("se presento un erroor en el get")
          console.log(error);
          //setIsLoaded(true);
          //setErrors(error);
        }
      )
  }, [newVal]);

  const mostrarModalActualizar = (datoId) => {
    let saleToModify;
    console.log("datoId")
    console.log(datoId.target.id)
    arregloVentas.map((registro) => {
        console.log(registro._id)  
      if ( datoId.target.id === registro._id) {
        console.log("registro.id")
        console.log(registro._id)
        
        saleToModify = registro;
        console.log("saleToModify")
        console.log(saleToModify)
        }
        return console.log("Mostro Modal Actualizar");
    });
    // listarVentas(saleToModify);
     setVenta({
       ...venta,
     form: saleToModify
     });
    setModalActualizar(true);
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
    return console.log("Mostro Modal Actualizar");
  };
  const eliminar = (e) => {
    arregloVentas.map((registro) => {
      if (e.target.id === registro._id) {
        let opcion = window.confirm("¿Está seguro que desea eliminar el valor " + registro.firstName + "?");
        if (opcion) {
          borrarCustomer(registro._id);
        }
      }
      return console.log("Elimino Correctamente");
    });
  }
  const borrarCustomer  = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}/${id}`, requestOptions)
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
    < >
		<Sidebar />
      <Container>
        <h1 className="titulos">Registro de Ventas</h1>
        <br />
        <Button  color="success" onClick={mostrarModalInsertar}>Registrar Nueva Venta</Button>
        <br />
        <br />
        <div id="lista">
        <Table >
          <thead className="encabezados">
            <tr>
              <th>Nombre</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Fecha</th>

              <th>Acciones</th>

            </tr>
          </thead>

          <tbody>
            {venta.data.map((dato) => (
              <tr key={dato._id}>
                <td> {dato.nombreCliente}</td>
                <td>{dato.IdProducto}</td>
                <td>{dato.cantidad}</td>
                <td>{dato.precioUnitario}</td>
                <td>{dato.valorTotal}</td>
                <td>{dato.estado}</td>
                <td>{dato.fechaVenta}</td>
                <td >
                  <Button  color="primary" id={dato._id}   
                  onClick={mostrarModalActualizar}  >
                    Editar
                  </Button>{"     "}
                  <Button id={dato._id} color="danger" 
                  onClick={eliminar}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table >
          <ModalCrear 
                    IdVendedor={IdVendedor}
                    venta={venta}
                    handleChange={handleChange}
                    setModalInsertar={setModalInsertar}
                    isOpen={modalInsertar}
                    setNewVal={setNewVal}
                    newVal={newVal}
                    BASE_URL={BASE_URL}
                    PATH_CUSTOMERS={PATH_CUSTOMERS}
          />
          <ModalEditar 
                    IdVendedor={IdVendedor}
                    venta={venta}
                    handleChange={handleChange}
                    setModalActualizar={setModalActualizar}
                    isOpen={modalActualizar}
                    setNewVal={setNewVal}
                    newVal={newVal}
                    BASE_URL={BASE_URL}
                    PATH_CUSTOMERS={PATH_CUSTOMERS}
                    

          />
        </div>


        
      </Container>

      

    </>
  );        
};

export default VistaVenta;
