import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';
import YearSelector   from './YearSelector.js';
import CarMakeSelector from './CarMakeSelector.js';
import CarModelSelector from './CarModelSelector.js';


class CarMakeModelSelect extends Component {
  render() {
  	//let data = this.props.data;
  	let message = "Yes, No Maybe?";
    return (
	    <div>

  			<YearSelector />
  			<CarMakeSelector />
  			<CarModelSelector />

  			<p>{message}</p>
  		</div>     
    );
  }
}

export default CarMakeModelSelect;