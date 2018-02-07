import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
    
    
    this.increment = this.increment.bind(this); //binding means inside of "increment" "this" keyword is the component 
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment(){
    this.setState({count: this.state.count + 1}); 
  }
  decrement(){
    this.setState({count: this.state.count - 1});
  }
  reset(){
    this.setState({count: 0});
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.reset}>Reset </button>
      </div>
     
    );
  }
}

export default App;
