import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
	constructor () {
		super()
		this.state = {
			sum: 0,
			value1: 0,
			value2: 0,
			// Operation: "add"
		}
		this.handleChangeValue1 = this.handleChangeValue1.bind(this)
		this.handleChangeValue2 = this.handleChangeValue2.bind(this)
		// this.handleChangeOperation = this.handleChangeOperation.bind(this)
	}

	calc(e) {
		this.setState({
			sum: parseInt(this.state.value1) + parseInt(this.state.value2)
		})
	}

	handleChangeValue1(e) {
		this.setState({
			value1: e.target.value
		})
	}

	handleChangeValue2(e) {
		this.setState({
			value2: e.target.value
		})
	}

	// handleChangeOperation(e) {
	// 	this.setState({
	// 		Operation: e.target.value
	// 	})
	// }

  	render() {
	    return (
	      <div className="container">
			  <h1>Add with React!</h1>

			  <div className="add">
			    <input type="text" value={this.state.value1} onChange={this.handleChangeValue1}/>
			    <span>+</span>
			    <input type="text" value={this.state.value2} onChange={this.handleChangeValue2}/>
			    <span>=</span>
			    <button onClick={ (e) => this.calc(e) }> Add </button>
			    <h3>--> {this.state.sum}</h3>
			  </div>
		</div>
    );
  }
}

export default Calculator;