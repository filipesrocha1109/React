import React, {Component} from 'react'


export default class Contador extends Component {

  state ={
    numero: this.props.numeroInicial
  }

  maisUm = ()=>{
    this.alteraNumero(1)
  // OU
  //this.setState({numero: this.state.numero +1})
  //  this.state.numero++
  //  console.log(this)
  }

  menosUm = ()=>{
  this.alteraNumero(-1)
  // OU
  //this.setState({numero: this.state.numero -1})
  //  this.state.numero++
  //  console.log(this)
  }

  alteraNumero = diferenca =>{
    this.setState({
      numero: this.state.numero + diferenca
    })
  }

  render(){
    return(
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Incrementar</button>
        <button onClick={this.menosUm}>Decrementar</button>
        <br/>
        <button onClick={() => this.alteraNumero(10)}>Incrementar 10</button>
        <button onClick={() => this.alteraNumero(-10)}>Decrementar 10</button>
      </div>
    )
  }
}

// solução 01
// constructor(props){
//   super(props)
//   this.maisUm = this.maisUm.bind(this)
//
// }

/// solução 02
// <button onClick={()=>this.maisUm()}>Incrementar</button>

// solução 03
//   maisUm = ()=>
