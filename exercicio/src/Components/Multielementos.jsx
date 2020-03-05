import React from 'react'

//opção 1 mais usada
export default props =>
  <div>
    <h1> Parte 1 </h1>
    <h2> Parte 2 </h2>
  </div>

// Opção 2 (direto na div do index.js)
// export default props =>
//   <React.Fragment>
//     <h1> Parte 1 </h1>
//     <h2> Parte 2 </h2>
//   </React.Fragment>

// opção 3 com array
// export default props => [
//
//     <h1> Parte 1 </h1>,
//     <h2> Parte 2 </h2>
// ]
