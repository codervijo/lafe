import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';


class CarMakeSelector extends Component {
  render() {
    return (
 			<select>
    			<DropDownOption> Toyota </DropDownOption>
    			<DropDownOption> Honda </DropDownOption>
    			<DropDownOption> Ford </DropDownOption>
    			<DropDownOption> Subaru </DropDownOption>
  		</select>
    );
  }
}

export default CarMakeSelector;