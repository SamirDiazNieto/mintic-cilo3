import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import './Login.css';

import Logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';
const googleClientId =  '618490195232-hq0bfvk88f9d0g3auskp4399ujdhtq8l.apps.googleusercontent.com';// process.env.REACT_APP_GOOGLE_CLIENT_ID;
 
const loadGoogleScript = () => {
 
  //loads the Google JavaScript Library
  (function () {
      const id = 'google-js';
      const src = 'https://apis.google.com/js/platform.js';
 
      //we have at least one script (React)
      const firstJs = document.getElementsByTagName('script')[0];
 
      //prevent script from loading twice
      if (document.getElementById(id)) { return; }
      const js = document.createElement('script'); 
      js.id = id;
      js.src = src;
      js.onload = window.onGoogleScriptLoad; 
      firstJs.parentNode.insertBefore(js, firstJs);
  }());    
 
} 

// const Login = () => (
// <>
//       <img className="logo" src={Logo} alt="" />
//       <h2>Inicia Sesión</h2>
//       <input type="text" placeholder="Correo Electronico" />
//       <input type="password" placeholder="Contraseña" />
//       <button>Entrar</button>
//       <button id="ingreso-gmail" disabled={true}>Ingresar con Gmail</button>
//   </>
// );

const Login = () => {
 
  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();
 
  const onSuccess = (googleUser) => {
    debugger;
    console.log('result from google', googleUser);
    setIsLoggedIn(true);
    const profile = googleUser.getBasicProfile();
    setName(profile.getName());
    setEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
  };
 
  const onFailure = () => {
    setIsLoggedIn(false);
  }
 
  const logOut = () => {
    (async() => {
      await googleAuth.signOut();
      setIsLoggedIn(false);
      renderSigninButton(gapi);
    })();
  };
 
  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure 
    });
  }
 
 
  useEffect(() => {
 
    //window.gapi is available at this point
    window.onGoogleScriptLoad = () => {
 
      const _gapi = window.gapi;
      setGapi(_gapi);

      console.log("_gapi");
      console.log(window.gapi);
 
      _gapi.load('auth2', () => {
        (async () => { 
          const _googleAuth = await _gapi.auth2.init({
           client_id: googleClientId
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    }
 
    //ensure everything is set before loading the script
    loadGoogleScript();
 
  }, );
 
 
 
 
  return (
    <>
    <img className="logo" src={Logo} alt="" />
           <h2>Inicia Sesión</h2>
           <input type="text" placeholder="Correo Electronico" />
           <input type="password" placeholder="Contraseña" />
           <div className="botones-login"> 
           <button>Entrar</button>
           {/* <button id="ingreso-gmail" disabled={true}>Ingresar con Gmail</button> */}
       
           {!isLoggedIn &&
          <div id="google-signin"></div>
        }
           </div>
 
        {isLoggedIn &&
          <div>
            <div>
              <img src={imageUrl} alt="google imagen" />
            </div>
            <div>{name}</div>
            <div>{email}</div>
            <button className='btn-primary' onClick={logOut}>Log Out</button>
          </div>
        }
</>
  );
}
 
export default Login;

