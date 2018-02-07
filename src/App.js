import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      value: 1
      
    }
    
    
    this.increment = this.increment.bind(this); //binding means inside of "increment" "this" keyword is the component 
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  increment(){
    this.setState({count: this.state.count + this.state.value}); 
  }
  decrement(){
    this.setState({count: this.state.count - this.state.value});
  }
  reset(){
    this.setState({count: 0});
  }
  handleValueChange(e){
    this.setState({value: +e.target.value});
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.reset}>Reset </button>
        <input type="number" onChange={this.handleValueChange} value={this.state.value}/>
        
      </div>
     
    );
  }
}

export default App;
