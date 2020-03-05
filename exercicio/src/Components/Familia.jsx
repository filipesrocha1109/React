import React from 'react'
import {filhosComProps} from '../Utils/Utils'


export default props =>

  <div>
    <h1> Familia </h1>
    {filhosComProps(props)}

    {/* utiliza map para percorrer filhos e clona eles com as propriedades passadas
        React.Children.map(props.children, child =>
        { return React.cloneElement(child,{...props})}

        React.cloneElement(props.children,{...props})

        React.cloneElement(props.children,{sobrenome : props.sobrenome})

        props.children*/}
  </div>
