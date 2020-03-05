import React, { Component } from 'react'
import './Calculator.css'
import Button from  '../components/Button'
import Display from '../components/Display'

const initialState ={
  displayValue:'0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}

export default class Calculator extends Component {

  state ={...initialState}

  constructor(props){
    super(props)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }

  clearMemory(){
    this.setState({...initialState})
  }

  setOperation(operation){
    if(this.state.current === 0 ){
      this.setState({ operation, current: 1, clearDisplay:true})
    } else{
        const equals = operation === '='
        const currentOperation = this.state.operation
        // faz a operação
        const values = [...this.state.values]

        try{
          values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
        } catch(e){
          values[0] = this.state.values[0]
        }

        values[1] = 0

        this.setState({
          displayValue: values[0],
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: !equals,
          values
        })
    }
  }

  addDigit(n){
      if(n === '.' && this.state.displayValue.includes('.')){
          return
      }

      // limpa display se for 0 ou AC
      const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
      // verifica se o display não  esta limpo
      const currentValue = clearDisplay ? '' : this.state.displayValue
      // monta o  valor
      const displayValue = currentValue + n
      // seta os valores no display
      this.setState({displayValue, clearDisplay: false})

      if(n !== '.'){
        // pega o valor atual
        const i = this.state.current
        // converte
        const newValue = parseFloat(displayValue)
        // add new valor
        const values = [...this.state.values]
        // adiciona novo valor no mesmo indice
        values[i] = newValue
        // atualiza estado
        this.setState({ values })
      }
  }

  render(){
    return(
      <div className="calculator">
          <Display value={this.state.displayValue} />
          <Button label="AC" click={this.clearMemory} triple />
          <Button label="/" click={this.setOperation} operation />
          <Button label="7" click={this.addDigit} />
          <Button label="8" click={this.addDigit} />
          <Button label="9" click={this.addDigit} />
          <Button label="*" click={this.setOperation} operation />
          <Button label="4" click={this.addDigit} />
          <Button label="5" click={this.addDigit} />
          <Button label="6" click={this.addDigit} />
          <Button label="-" click={this.setOperation} operation />
          <Button label="1" click={this.addDigit} />
          <Button label="2" click={this.addDigit} />
          <Button label="3" click={this.addDigit} />
          <Button label="+" click={this.setOperation} operation />
          <Button label="0" click={this.addDigit} double />
          <Button label="." click={this.addDigit} />
          <Button label="=" click={this.setOperation} operation />
      </div>
    )
  }
}
