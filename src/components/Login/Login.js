// import styled from 'styled-components';
// import { NavLink as Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../assets/logo.png'
import Foto from "../../assets/foto-perfil.png"
import { useAuthState } from "react-firebase-hooks/auth";
import { Alert } from 'reactstrap';
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { 
  auth, 
  signInEmailAndPassword, 
  signInWithGoogle,  
} from "../Firebase/Firebase";

 const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [hasError, setHasError] = useState(false);
  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState("");
  const history = useHistory();
  const usernameRef = React.useRef(null)


  // const usuarios = () =>{
  //   const correo = document.getElementById("login-correo");
  //   setEmail(correo.value)
  //   console.log(correo.value);
  // }
  // const contrasenias = () =>{
  //   const pass = document.getElementById("login-pass");
  //   setPassword(pass.value)
  //   console.log(pass.value);
  // }


  useEffect(() => {
    console.log("user");
    console.log(user);
    console.log("auth");
    console.log(auth);
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  if (loading) {
    console.log("entro a if")
    console.log("loading")
    console.log(loading)
    return <Spinner children="" style={{ width: '10rem', height: '10rem', position: 'fixed', top: '17%', left: '38%' } } />;
  } else {

  return(
<>    {login &&
        <Spinner children="" style={{ width: '10rem', height: '10rem', position: 'fixed', top: '17%', left: '38%' , color:'red'} } />
    }
      {hasError &&
        <Alert color="warning">
          {errors}
        </Alert>
      }
      <img className="logo" src={Foto} alt="" />
          <h2>Inicia Sesión</h2>
          <input
            id="login-correo"
            type="text"
            value={email}
             onChange={(e) => setEmail(e.target.value)}
            // onChange={usuarios}
            placeholder="Correo Electronico"
            ref={usernameRef}
          />
          <input
            id="login-pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //  onChange={contrasenias}
            placeholder="Contraseña"
          />
          <button
          type="button"
            onClick={() => signInEmailAndPassword(email, password, setLogin, setHasError, setErrors)}>
            Entrar
          </button>
          <button id="ingreso-gmail"  
          onClick={() => signInWithGoogle(setLogin, setHasError,setErrors)}>
            Login with Google
          </button>
 </>
    );
 };
}

 Login.propTypes = {
  type: PropTypes.string, // default: 'border'
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.string, // default: 'Loading...'
};

Login.defaultProps = {};


 
export {
  Login,
};
