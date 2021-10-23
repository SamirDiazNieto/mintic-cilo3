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
    if (loading) {
      // maybe trigger a loading screen
    }
    if (user) history.replace("/dashboard/lista-productos");
  }, [user, loading]);

  if (loading) {
    return <Spinner children="" style={{ width: '5rem', height: '5rem', position: 'fixed', top: '17%', left: '38%' } } />;
  } else {
  return(
    <>
     {login &&
            <Spinner children="" style={{ width: '5rem', height: '5rem', position: 'fixed', top: '17%', left: '38%' } } />
        }
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


 
export default Login;

