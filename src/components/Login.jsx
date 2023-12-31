import React, { Fragment, useState } from "react";
import "../estiloLogin.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
  } from "react-router-dom";


const Login = () => {
  const [log, setlog] = useState({
    gmail: "",
    contraseña: ""
  });

  const [y, sety] = useState(false);

  const modificarestado = (e) => {
    setlog({
      ...log,
      [e.target.name]: e.target.value
    });

    if (e.target.name === "contraseña" && e.target.value.length > 8) {
      sety(true);
    } else {
      sety(false);
    }
  };

  return (
    <Fragment>
      <form className="contenedor" action="http://localhost/galletas/login.php" method="post">
        <h1 className="h1">login</h1>

        <label htmlFor="" className="label">
          username
        </label>
        <input
          type="gmail"
          placeholder="introduce tu correo"
          className="gmail"
          name="gmail"
          onChange={modificarestado}
          
        />

        <label className="label">contraseña</label>

        <input
          type="password"
          placeholder="introduce tu contraseña"
          className="contraseña"
          onChange={modificarestado}
          name="contraseña"
        />
        {!y ? (
          <span className="incorrecto">faltan caracteres</span>
          
        ) : (
          <span className="correcto">correcto</span>
        
         
        )}
  
        <button className="boton">login</button>

       

      </form>
      {y && <span className="error">Contraseña inválida</span>}
      
    </Fragment>
  );
};

export default Login;
