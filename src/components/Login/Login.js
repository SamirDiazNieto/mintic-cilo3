// import styled from 'styled-components';
// import { NavLink as Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../assets/logo.png'
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
// // // // // Prueba para MongoDB
	const BASE_URL = process.env.REACT_APP_API_BASE_URL;
	const PATH_CUSTOMERS = process.env.REACT_APP_API_USUARIOS_PATH;
  const [newVal, setNewVal] = React.useState(0);

   const insertar = () => {  
     
     let form = {
	 	nombreUsuario:user.email,
	 	password: "",
	 	rol: "Google",
	 	estado:"Pendiente"
	   }

	 	let usuarioACrear = form ;
	 	const requestOptions = {
	 	  method: 'POST',
	 	  headers: {
	 		'Content-Type': 'application/json'
	 	  },
	 	  body: JSON.stringify(usuarioACrear)
	 	};
	 	console.log(usuarioACrear);
	 	console.log("Google");
	 	console.log(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions);
	 	fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
	 	  .then(
	 		(response) => {
	 		  response.json();
	 		  setNewVal(newVal + 1);
	 		},
	 		(error) => {

	 		})
       
	   }
     // // // // // Prueba para MongoDB

  useEffect(() => {

    if (user) {
      history.replace("/dashboard");
      if (user.photoURL) {
        insertar();
      }
    } 
  }, [user, loading]);

  if (loading) {

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
      <img className="logo" src={Logo} alt="" />
          <h2>Inicia Sesión</h2>
          <input
            id="login-correo"
            type="text"
            value={email}
             onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electronico"
            ref={usernameRef}
          />
          <input
            id="login-pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <button
          type="button"
            onClick={() => signInEmailAndPassword(email, password, setLogin, setHasError, setErrors)}>
            Entrar
          </button>
          <button 
          type="button"
          id="ingreso-gmail"  
          onClick={()=>signInWithGoogle(setLogin, setHasError,setErrors)}>
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
