import "./estilos.css"
import React, { useState, useEffect} from 'react';
import imagen1 from "./im.jpg"
const ComponenteB = ({ propEjemplo }) => {

  const [surtida , setsurtida]=useState({
    glassS:0,
    manteca:0,
    mantequilla:0,
    azucar:0,
    harina:0,
    total:0
  })
  


  const [quesitos , setquesitos]=useState({
    glassq:0,
    mantecaq:0,
    mantequillaq:0,
    azucarq:0,
    harinaq:0,
    totalq:0
  })
  

  const calcularquesitos = async (e) => {
    console.log("funciona");
  
    await setquesitos({
      ...quesitos,
      [e.target.name]: e.target.value,
    });
  
    setquesitos((q) => ({
      ...q,
      mantecaq: (0.2 * q.totalq).toFixed(2),
      glassq: (0.1333333333333333 * q.totalq).toFixed(2),
      harinaq: (0.4666666666666667* q.totalq).toFixed(2),
    }));
  };



let glasv=0
const calcularsurtida = async (e) => {
  console.log(surtida.total);

  await setsurtida({
    ...surtida,
    [e.target.name]: e.target.value,
  });

  setsurtida((surtida) => ({
    ...surtida,
    manteca:(0.16 * surtida.total).toFixed(2),
    mantequilla: (0.16 * surtida.total).toFixed(2),
    glassS: 0.12 * surtida.total,
    harina: 0.44 * surtida.total,
  }));
};





  return (
    <>
    <div id="superior">
        <div id="logo">
            <img src={imagen1} alt="" />
            
        </div>
        <div id="usuario">
            <div id="navbar">
                <div id="foto"></div>
                <div id="name">
                    <p id="nombrePerfi">Anna rodriguez</p>
                    <p id="correo">annarodriguez@gmail.com</p>
                </div>
            </div>

        </div>

    </div>
    <div id="contenedor_principal">
        <div id="menu">
            <div id="int">
                
                <p >ver como negocio </p>  
                <input type="text" placeholder="buscar" id="buscadormenu"/>
            </div>
            <div className="datos">perfil</div>
            <div id="nego">negocios</div>
            <div className="datos">publicaciones</div>
            <div className="datos">clientes</div>



        </div>
        <div id="derecha">


<div id="contenedorp">
    <p id="negoci">Negocios</p>
   
</div>

<div id="buscador">
    <input type="text" placeholder="buscar por  nombre del negocio celular o correo electronico" id="input1"  />
    <input type="text" id="input2" placeholder="ordenar por status" />
    <input type="text" id="input2" placeholder="todos los status" />
</div>

            <div id="table">
                <table>
                    <tr>
                        <td>tipo</td>
                        <td>mantequilla</td>
                        <td>manteca</td>
                        <td>azucar estandar</td>
                        <td>glass</td>
                        <td>harina</td>
                        <td className="er" id="nombre">cantidad</td>
                       
                       
                      </tr>
                      <tr>
                      <td><div id="estatus1">surtida</div></td>
                        <td>{surtida.mantequilla}</td>
                        <td id="negocio">{surtida.manteca} </td>
                        <td id="ciudad">{surtida.azucar}</td>
                        <td id="ciudad">{surtida.glassS}</td>
                        <td id="nombre">{surtida.harina}</td>
                        <td id="correo"><input type="number" id="cantidad" value={surtida.total} onChange={calcularsurtida} name="total" /></td>
                        
                      </tr>
                      <tr>
                      <td><div id="estatus1">quesitos</div></td>
                        <td>{quesitos.mantequillaq}</td>
                        <td id="negocio">{quesitos.mantecaq} </td>
                        <td id="ciudad">{quesitos.azucarq}</td>
                        <td id="ciudad">{quesitos.glassq}</td>
                        <td id="nombre">{quesitos.harinaq}</td>
                        <td id="correo"><input id="cantidad" type="number" value={quesitos.totalq} onChange={calcularquesitos} name="totalq" /></td>
                        
                      </tr>
                      <tr>
                        <td>Ago 10, 2022</td>
                        <td><div id="estatus1">nuevo</div></td>
                        <td id="negocio">Negocio </td> 
                        <td id="ciudad">Ciudad</td>
                        <td id="nombre">Nombre</td>
                        <td id="correo">Correo</td>
                        <td>Dato 7</td>
                      </tr>
                      <tr>
                        <td>Ago 10, 2022</td>
                        <td><div id="suspendido">suspendido</div></td>
                        <td id="negocio">Negocio </td>
                        <td id="ciudad">Ciudad</td>
                        <td id="nombre">Nombre</td>
                        <td id="correo">Correo</td>
                        <td>Dato 7</td>
                      </tr>
                      <tr>
                        <td>Ago 10, 2022</td>
                        <td><div id="activo">activo</div></td>
                        <td id="negocio">Negocio </td>
                        <td id="ciudad">Ciudad</td>
                        <td id="nombre">Nombre</td>
                        <td id="correo">Correo</td>
                        <td>Dato 7</td>
                      </tr>
                      <tr>
                        <td>Ago 10, 2022</td>
                        <td><div id="activo">activo</div></td>
                        <td id="negocio">Negocio </td>
                        <td id="ciudad">Ciudad</td>
                        <td id="nombre">Nombre</td>
                        <td id="correo">Correo</td>
                        <td>Dato 7</td>
                      </tr>
                      <tr>
                        <td>Ago 10, 2022</td>
                        <td><div id="suspendido">suspendido</div></td>
                        <td id="negocio">Negocio </td>
                        <td id="ciudad">Ciudad</td>
                        <td id="nombre">Nombre</td>
                        <td id="correo">Correo</td>
                        <td>Dato 7</td>
                      </tr>
                      <tr>
                        <td>Ago 10, 2022</td>
                        <td><div id="activo">activo</div></td>
                        <td id="negocio">Negocio </td>
                        <td id="ciudad">Ciudad</td>
                        <td id="nombre">Nombre</td>
                        <td id="correo">Correo</td>
                        <td>Dato 7</td>
                      </tr>
                      <tr>
                        <td>Ago 10, 2022</td>
                        <td><div id="activo">activo</div></td>
                        <td id="negocio">Negocio </td>
                        <td id="ciudad">Ciudad</td>
                        <td id="nombre">Nombre</td>
                        <td id="correo">Correo</td>
                        <td>Dato 7</td>
                      </tr>
                      <tr>
                        <td>Ago 10, 2022</td>
                        <td><div id="activo">activo</div></td>
                        <td id="negocio">Negocio </td>
                        <td id="ciudad">Ciudad</td>
                        <td id="nombre">Nombre</td>
                        <td id="correo">Correo</td>
                        <td><a href="https://api.whatsapp.com/send?phone=524621490967">dato 7</a></td>
                      </tr>
                  </table>
                  
            </div>

        </div>
        
          
    </div>
    

    
    </>
  );
};

export default ComponenteB;
