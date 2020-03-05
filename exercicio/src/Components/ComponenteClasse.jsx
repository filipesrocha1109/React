import React, {Component} from 'react'


export default class ComponenteClasse extends Component {
  render(){
    return(
      //caso Passar valor assume ele, caso não, ultiliza um default
      ///  
      <h1> {this.props.valor || 'Default'}</h1>
    )
  }
}
