import React from 'react'

// function primeiro(){
//   return <h1>Primeiro componente</h1>
//
// }
//
// export default primeiro


// ******* OU **********

// export default function (){
//   return <h1>Primeiro componente</h1>
//
// }

// ******* OU **********

// todo cogdigo JS tem que estar dentro de {} Ex: <h2>{Math.random()}</h2>

export default (props) =>
  <div>
    <h1>{props.valor}</h1>
   
  </div>
