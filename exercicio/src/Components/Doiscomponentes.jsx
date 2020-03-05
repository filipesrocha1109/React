import React from 'react'

// opção 1
const CompA = props =>
  <h1> Primeiro componente : {props.valor} </h1>

const CompB = props =>
  <h2> Sgundo componente : {props.valor} </h2>

// opção 2
// export const CompA = props =>
//   <h1> Primeiro componente : {props.valor} </h1>
//
// export const CompB = props =>
//   <h2> Sgundo componente : {props.valor} </h2>

/// export anonimo somente com default
// export default function(){
//     return <p> Teste </p>
// }

export {CompA,CompB}
export default CompA
