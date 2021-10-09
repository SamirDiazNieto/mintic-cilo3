import React from 'react';
import './Register.css';
import Logo from '../../assets/logo.png'

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
       alert("Se agrego mensaje correctamente");
   } else {
       alert("NO Se agrego mensaje correctamente");
       capturaVariables(true)
   }
 }


const Register = () => (
<>
  <img className="logo" src={Logo} alt=""/>
  <h2>Regístrate</h2>      
  <input id="registro-correo" type="text" placeholder="Correo Electronico" onChange={ValidarCorreo} required />
  <p id="msjCorreo">&nbsp;</p>    
  <input id="registro-pass" type="password" placeholder="Contraseña" onChange={ValidaPass} required/>
  <p id="msjPass">&nbsp;</p>
  <input id="registro-confirmar-pass" type="password" placeholder="Confirmar Contraseña" onChange={ValidaConfirmar} required/>
  <p id="msjConfirmar">&nbsp;</p>
  <button  type="button" id="btn-registrase" onClick={Registrar}>Regístrate</button>
      
</>
);



export default Register;
