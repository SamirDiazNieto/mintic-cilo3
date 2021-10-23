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
import { auth, signInEmailAndPassword, signInWithGoogle  } from "../Firebase/Firebase";

 const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [hasError, setHasError] = useState(false);
  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState("");
  const history = useHistory();
  const usernameRef = React.useRef(null)


  useEffect(() => {
    console.log("entro a Replace");
    console.log(user);
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  if (loading) {
    console.log("entro a if loading")
    console.log(loading)
    return <Spinner children="" style={{ width: '5rem', height: '5rem', position: 'fixed', top: '17%', left: '38%' } } />;
  } else {
    console.log("entro a else");
  return(
    <div className="login">
    {login &&
        <Spinner children="" style={{ width: '10rem', height: '10rem', position: 'fixed', top: '17%', left: '38%' } } />
    }
    <div className="login-container">
      {hasError &&
        <Alert color="warning">
          {errors}
        </Alert>
      }
      <img className="logo" src={Logo} alt="" />
          <h2>Inicia Sesión</h2>
          <input
            type="text"
            // className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electronico"
            ref={usernameRef}
          />
          <input
            type="password"
            // className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <button
            // className="login__btn"
            onClick={() => signInEmailAndPassword(email, password,setLogin,setHasError,setErrors)}
          >
            Entrar
          </button>
          <button id="ingreso-gmail"  
          // className="login__btn login__google" 
          onClick={() => signInWithGoogle(setLogin, setHasError,setErrors)}>
            Login with Google
          </button>
 </div>
 </div>
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


 
export default Login;

