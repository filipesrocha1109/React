import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './Components/PrimeiroComponente'
//import {CompA,CompB as B} from './Components/Doiscomponentes'
//import Multielementos from './Components/Multielementos'
//import FamiliaSilva from './Components/Familiasilva'
//import Familia from './Components/Familia'
//import Membros from  './Components/Membro'
//import ComponentescomFuncao from './Components/ComponenteComFuncao'
//import Pai from  './Components/Pai'
//import ComponenteClasse from './Components/ComponenteClasse'
//import Contador from './Components/Contador'
import Hook from './Components/Hook'

const elemento = document.getElementById('root')

// ReactDOM.render(
//   <ul>
//     <li>1- Pedro</li>
//     <li>2- Maria</li>
//     <li>3- Joao</li>
//   </ul>
// ,elemento)

// Normalmente se usa 1 Arquivo para cada componente

ReactDOM.render(
    <div>
      <Hook />
      {/*<Contador numeroInicial={1}/>*/}
      {/* <Contador numero={0} />*/}
      {/*<ComponenteClasse valor='sou um componente de classe!'/>*/}
      {/*<Pai />*/}
      {/*<ComponentescomFuncao />*/}
      {/*</Familia>*/}
      {/* <Membros nome="Mariana" />*/}
      {/*<Familia sobrenome="Pereira"  >
        <Membros nome="André"  />
        <Membros nome="Maria"  />
        <Membros nome="Joao"  />
        <Membros nome="Pedro"  />
        <Membros nome="Alberto"  /> */}
      {/*<PrimeiroComponente valor="bom dia" txt={Math.pow(2,8)}/>
         <CompA valor="ola eu sou a" />
         <B valor="b na area"/>
        <Multielementos/>
        <FamiliaSilva />*/}
    </div>
,elemento)
