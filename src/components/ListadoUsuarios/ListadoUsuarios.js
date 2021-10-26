import React from 'react';
import './ListadoUsuarios.css';
import { Table, Button, Container } from 'reactstrap';
import ModalCrearUsuario from '../ModalCrearUsuario/ModalCrearUsuario';
import ModalEditarUsuario from '../ModalEditarUsuario/ModalEditarUsuario';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router";

import { useTable, useGlobalFilter, useAsyncDebounce } from "react-table";
import useColumns from "../hooks/useColumnsUsuario";
////////////////////////////// DATOS DE PRUEBA
const data = [

  // { id: 1, nombre: "Producto 1", password: "1000", rol: "vendedor", estado:"Pendiente"},
  // { id: 2, nombre: "Producto 1", password: "1000", rol: "Administrador", estado:"Aceptado"},
  // { id: 3, nombre: "Producto 1", password: "1000", rol: "vendedor", estado:"No aceptado"},

];


const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_USUARIOS_PATH;
const PATH_CUSTOMERS_USUARIOS = process.env.REACT_APP_API_USUARIOS_PATH;

const ListadoUsuarios = () => {
  const auth = getAuth();
  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);
  const [errors, setErrors] = React.useState(null);
  const [newVal, setNewVal] = React.useState(0);
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      // id: "",
      nombreUsuario: "",
      password: "",
      rol: "",
      estado:""
    }
  });
  let arregloUsuarios = usuario.data;

  React.useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
  }, [user, loading]);
 
  React.useEffect(() => {
    if (!user) return history.replace("/");
    user.getIdToken(true).then(token => {
      // sessionStorage.setItem("token", token) 
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            //setIsLoaded(true);
            setUsuario({
              ...usuario,
              data: result
            });

            setDataTabla({
              ...dataTabla,
              data: result
            });
          },
          (error) => {
            //setIsLoaded(true);
            setErrors(error);
          }
        )
    });
  }, [newVal]);

  const handleChange = (datosImput) => {
    setDataTabla((prevState) =>({
      ...prevState,
      data: usuario.data
    
    
    })
    )
    setUsuario((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [datosImput.target.name]: datosImput.target.value,
      }
    }));
  };
  


  const mostrarModalActualizar = (datoId) => {
    let userToModify;
    arregloUsuarios.map((registro) => {
      if ( datoId.target.id === registro._id) {
        userToModify = registro;
        }
        return console.log("Mostro Modal Actualizar");
    });
    // listarUsuarios(userToModify);
     setUsuario({
       ...usuario,
     form: userToModify
     });
    setModalActualizar(true);
  };
  const mostrarModalInsertar = () => {
    setModalInsertar(true);
    return console.log("Mostro Modal Actualizar");
  };
  const eliminar = (datoID) => {
    //let arregloUsuarios = usuario.data;
    arregloUsuarios.map((registro) => {
      if ( datoID.target.id=== registro._id) {
        let opcion = window.confirm("¿Está seguro que desea eliminar el Usuario " + registro.nombreUsuario + "?");
        if (opcion) {
          borrarCustomer(registro._id);
        }
      }
      return console.log("Elimino Correctamente");
    });
  };

  const borrarCustomer = (id) => {
    user.getIdToken(true).then(token => {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
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
    });
  }


  const columns = useColumns();
  const [dataTabla, setDataTabla] = React.useState({
    data: usuario.data
  
    
  });
  //setTimeout(2000)
  //const datas =useMemo(() => usuario.data,[])
  console.log("datas")
  console.log(dataTabla)
  
  var table = useTable({ columns, data:dataTabla.data  }, useGlobalFilter);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter }
  } = table;
  function CarsFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const totalCarsAvailable = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
  
  const onFilterChange = useAsyncDebounce(
  (value) => setGlobalFilter(value || undefined),
  200
  );
  
  const handleInputChange = (e) => {
  setValue(e.target.value);
  onFilterChange(e.target.value);
  };
  
  return (
  <span className="cars-filter">
   Buscar Producto:
    <input
      size={50}
      value={value || ""}
      onChange={handleInputChange}
      placeholder={`${totalCarsAvailable} Usuarios disponibles...`}
    />
  </span>
  );
  }


  return (
    <>
      <Sidebar />
        <Container>
          <h1 className="titulos">Listado Usuarios</h1>
          <br />
          <Button disabled={true} color="success" onClick={mostrarModalInsertar}>Crear</Button>
          <br />
          <br />
          <div id="lista">
           {/* Añadimos las propiedades a nuestra tabla nativa */}
 <Table  onCompositionUpdate={handleChange} {...getTableProps()}>
          <thead className="encabezados">
          <tr>
           <th colSpan={4}>
             <CarsFilter
               preGlobalFilteredRows={preGlobalFilteredRows}
               globalFilter={globalFilter}
               setGlobalFilter={setGlobalFilter}
             />
           </th>
         </tr>
         
            {
              // Recorremos las columnas que previamente definimos
              headerGroups.map(headerGroup => (
                // Añadimos las propiedades al conjunto de columnas
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Recorremos cada columna del conjunto para acceder a su información
                    headerGroup.headers.map((column) => (
                      // Añadimos las propiedades a cada celda de la cabecera
                      <th {...column.getHeaderProps()}>
                        {
                          // Pintamos el título de nuestra columna (propiedad "Header")
                          column.render("Header")
                        }
                        
                      </th>
                      
                      
                    ))
                  }
                    <th>Opciones</th>
                </tr>
                
              ))
            }
          </thead>

          
        <tbody {...getTableBodyProps()}>
          {
            // Recorremos las filas
            rows.map(row => {
              // Llamamos a la función que prepara la fila previo renderizado
              prepareRow(row);
              return (
                // Añadimos las propiedades a la fila
                <tr {...row.getRowProps()}>
                  {
                    // Recorremos cada celda de la fila
                    row.cells.map((cell) => {
                      // Añadimos las propiedades a cada celda de la fila
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Pintamos el contenido de la celda
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                  <Button className="text-left text-uppercase m-1 mr-5 " id={row.values._id}
                      color="primary" 
                       onClick={mostrarModalActualizar} 
                    >
                      Editar
                    </Button>{" . "}
                    <Button  className="text-center text-uppercase m-1 ml-5" id={row.values._id} color="danger" onClick={console.log("row"), console.log(row.values._id), eliminar} /* onClick={eliminar} */>Eliminar</Button>
                </tr>
              );
            })
          }
        </tbody>
      </Table>

          {/* <Table >
            <thead className="encabezados">
              <tr>
                <th>nombre</th>
                <th>rol</th>
                <th>estado</th>
                <th>opciones</th>
              </tr>
            </thead>

            <tbody>
              {usuario.data.map((dato) => (
                <tr key={dato._id}>
                  <td>{dato.nombreUsuario}</td>
                  
                  <td>{dato.rol}</td>
                  <td>{dato.estado}</td>
                  <td>
                    <Button
                      color="primary" id={dato._id}
                      onClick={mostrarModalActualizar}
                    >
                      Editar
                    </Button>{" "}
                    <Button id={dato._id} color="danger" onClick={eliminar}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table> */}
            <ModalCrearUsuario 
                      usuario={usuario} 
                      handleChange={handleChange}
                      setModalInsertar={setModalInsertar}
                      isOpen={modalInsertar}
                      setNewVal={setNewVal}
                      newVal={newVal}
                      BASE_URL={BASE_URL}
                      PATH_CUSTOMERS={PATH_CUSTOMERS}
            />
            <ModalEditarUsuario 
                      usuario={usuario}
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

export default ListadoUsuarios;
