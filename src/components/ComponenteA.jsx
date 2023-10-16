import React, { useState } from 'react';

const ComponenteA = () => {
  const propEjemplo = 'Hola desde Componente A';
  const ComponenteB = require('./ComponenteB').default;  
  

  const [x,xx]=useState("")
  const d =(e)=>{
    xx(e.target.value)
    
  }

  return (
    <div>
     <input type="file" accept="image/*" capture="camera" id="fotoInput" 
     onChange={d}
     ></input>
   <h1>{x}</h1>
    </div>
  );
};

export default ComponenteA;