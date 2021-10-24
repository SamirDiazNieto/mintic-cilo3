import './Register.css';
import Logo from '../../assets/logo.png'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../Firebase/Firebase";


const Register = () =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useHistory();



function capturaVariables(valor){
  const registrarUsuario = document.getElementById("btn-registrase");
  valor === true? registrarUsuario.disabled = true: registrarUsuario.disabled = false;
}

 function ValidarCorreo() {
  const correo = document.getElementById("registro-correo");
   let msjCorreo = document.getElementById("msjCorreo");

   if (!correo.value.includes('@')) {
       correo.classList.remove("margin-green");
       correo.classList.add("margin-red");
       msjCorreo.innerText = "  Ingrese un correo valido.";
       msjCorreo.classList.remove("exito");
       msjCorreo.classList.add("error");
       return false;
   } else {
       correo.classList.remove("margin-red");
       correo.classList.add("margin-green");
       msjCorreo.innerText = "  El correo es valido.";
       msjCorreo.classList.remove("error");
       msjCorreo.classList.add("exito");
       capturaVariables(false)
       setEmail(correo.value)
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
       setPassword(pass.value)
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
   console.log("Correo= ",correo,"Pass= ",pass,"Confirma= ", confirma)
  
   if (correo && pass &&confirma) {
       console.log("Se agrego mensaje correctamente");
       registerWithEmailAndPassword(email, password);

   } else {
       alert("No Se registro correctamente");
       capturaVariables(true)
   }
 }
 useEffect(() => {
  if (loading) return;
  if (user) history.replace("/dashboard");
}, [user, loading]);

return(
<>
  <img className="logo" src={Logo} alt=""/>
  <h2>Regístrate</h2>      
  <input
          id="registro-correo"
          type="text"
          className="register__textBox"
          //  value={email}
          // onChange={(e) => setEmail(e.target.value)}
          onChange={ValidarCorreo} 
          required 
          placeholder="Correo Electronico"
        />
  <p id="msjCorreo">&nbsp;</p>    
  <input
          id="registro-pass"
          type="password"
          className="register__textBox"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
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


export default Register;
