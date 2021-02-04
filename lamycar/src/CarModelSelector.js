import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';


class CarModelSelector extends Component {
  render() {
    return (
 			<select>
    			<DropDownOption> Prius </DropDownOption>
    			<DropDownOption> Outback </DropDownOption>
    			<DropDownOption> Civic </DropDownOption>
    			<DropDownOption> Tesla </DropDownOption>
  			</select>
    );
  }
}

export default CarModelSelector;