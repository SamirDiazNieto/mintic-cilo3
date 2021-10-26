import './Register.css';
import Logo from '../../assets/logo.png'
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { getAuth } from "firebase/auth";
import {
  // auth,
  registerWithEmailAndPassword,
} from "../Firebase/Firebase";


const Register = () =>{

  // const auth = getAuth();
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  // const [userRegister, loadingRegister] = useAuthState(auth);
  // const history = useHistory();
	// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
	// const PATH_CUSTOMERS = process.env.REACT_APP_API_USUARIOS_PATH;
  // const [newVal, setNewVal] = React.useState(0);
  // const [errors, setErrors] = React.useState(null);
  const usernameRef = React.useRef(null)

    
    
    // const insertar = () => {
    //   let usuarioACrear = form ;
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(usuarioACrear)
    //   };
    //   console.log(usuarioACrear);
    //   console.log(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions);
    //   fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
    //     .then(
    //     (response) => {
    //       response.json();
    //       setNewVal(newVal + 1);
    //     },
    //     (error) => {
  
    //     })
    //   }
    
    
    
    //  const insertarRegister = () => {
      
    //    let usuarioACrear = { form };
    //    console.log("usuarioACrear")
    //    console.log(usuarioACrear)
    //    userRegister.getIdToken(true).then(token => {
    //    const requestOptions = {
    //      method: 'POST',
    //      headers: {
    //        'Content-Type': 'application/json',
    //        Authorization: `Bearer ${token}`,
    //      },
    //      body: JSON.stringify(usuarioACrear)
    //    };
    //    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
    //      .then(
    //        (response) => {
    //          response.json();
    //          setNewVal(newVal + 1);
    //        },
    //        (error) => {
    //         //  setIsLoaded(true);
    //          setErrors(error);
    //        })
    //      });
      
    //  }
function capturaVariables(valor){
  const registrarUsuario = document.getElementById("btn-registrase");
  valor === true? registrarUsuario.disabled = true: registrarUsuario.disabled = false;
}

 function ValidarCorreo() {
  const emailRegister = document.getElementById("registro-correo");
   let msjemailRegister = document.getElementById("msjCorreo");

   if (!emailRegister.value.includes('@')) {
       emailRegister.classList.remove("margin-green");
       emailRegister.classList.add("margin-red");
       msjemailRegister.innerText = "  Ingrese un correo valido.";
       msjemailRegister.classList.remove("exito");
       msjemailRegister.classList.add("error");
       return false;
   } else {
       emailRegister.classList.remove("margin-red");
       emailRegister.classList.add("margin-green");
       msjemailRegister.innerText = "  El correo es valido.";
       msjemailRegister.classList.remove("error");
       msjemailRegister.classList.add("exito");
       capturaVariables(false)
       setEmailRegister(emailRegister.value)
       return true;
   }
 }
 function ValidaPass() {
  const pass = document.getElementById("registro-pass");
    let mensajePass = document.getElementById("msjPass");
   if (pass.value.length < 8) {
      pass.classList.remove("margin-green");
      pass.classList.add("margin-red");
       mensajePass.innerText = "La contraseña minimo 8 caracteres"
       mensajePass.classList.remove("exito");
       mensajePass.classList.add("error");
       return false;
   } else {
       pass.classList.remove("margin-red");
       pass.classList.add("margin-green");
       mensajePass.innerText = "  La contraseña es correcta."
       mensajePass.classList.remove("error");
       mensajePass.classList.add("exito");
       capturaVariables(false)
       setPasswordRegister(pass.value)
       return true;
   }
 }
 function ValidaConfirmar() {
  const pass = document.getElementById("registro-pass");
  const confirmar = document.getElementById("registro-confirmar-pass");
   let mensajeConfirmar = document.getElementById("msjConfirmar");

   if (confirmar.value === pass.value && ValidaPass() === true) {
        confirmar.classList.remove("margin-red");
        confirmar.classList.add("margin-green");
       mensajeConfirmar.innerText = " Las Contraseñas coinciden"
       mensajeConfirmar.classList.remove("error");
       mensajeConfirmar.classList.add("exito");
       capturaVariables(false)
       return true;
   } else if(confirmar.value === pass.value){
       mensajeConfirmar.innerText = " Las Contraseñas coinciden pero NO son seguras"
       mensajeConfirmar.classList.remove("exito");
       mensajeConfirmar.classList.add("error");
       return false;

   }else {
       confirmar.classList.remove("margin-green");
       confirmar.classList.add("margin-red");
       mensajeConfirmar.innerText = " Las Contraseñas no coinciden"
       mensajeConfirmar.classList.remove("exito");
       mensajeConfirmar.classList.add("error");
       return false;

   }
 }
 function Registrar() {
  
   let correo = ValidarCorreo();
   let pass = ValidaPass();
   let confirma = ValidaConfirmar();
   let form = {

	  }
  
   if (correo && pass &&confirma) {
     registerWithEmailAndPassword(emailRegister, passwordRegister);
     form = {
       nombreUsuario: emailRegister,
       // password: password,
       // // // // // PREGUNTAR COMO CAMBIAR EL TIPO String POR PASWORD
       password: "",
       rol: "",
       estado:"Pendiente"
      }
      console.log("Se registro correctamente");

   } else {
       alert("No Se registro correctamente");
       capturaVariables(true)
   }
 }
 
//  useEffect(() => {
 
//   if (userRegister) {
//     if (!userRegister.displayName) {
//       console.log("dashborad desde Register");
//       insertarRegister();
//     };
    
//     history.replace("/dashboard");
//   }
// }, [userRegister, loadingRegister]);
return(
<>
  <img className="logo" src={Logo} alt=""/>
  <h2>Regístrate</h2>      
  <input
          id="registro-correo"
          type="text"
          className="register__textBox"
          //  value={email}
          // onChange={(e) => setEmailRegister(e.target.value)}
          onChange={ValidarCorreo} 
          required 
          placeholder="Correo Electronico"
          ref={usernameRef}
        />
  <p id="msjCorreo">&nbsp;</p>    
  <input
          id="registro-pass"
          type="password"
          className="register__textBox"
          // value={password}
          // onChange={(e) => setPasswordRegister(e.target.value)}
          onChange={ValidaPass} 
          required
          placeholder="Contraseña"
        />
  <p id="msjPass">&nbsp;</p>
  <input id="registro-confirmar-pass" type="password" placeholder="Confirmar Contraseña" onChange={ValidaConfirmar} required/>
  <p id="msjConfirmar">&nbsp;</p>
  <button  type="button" id="btn-registrase" onClick={Registrar}>Regístrate</button>
  {/* <button id="registro-gmail"  
          onClick={signInWithGoogle}>
            Register Google
          </button>   */}
</>
);
};


export {
  Register,
  
}; 
