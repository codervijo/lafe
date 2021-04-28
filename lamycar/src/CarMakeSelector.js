import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';


class CarMakeSelector extends Component {
  state = {
    makelist:["Ford", "Toyota", "Subaru"]
  };

  render() {
    return (
 			<select>
		      {
		          this.state.makelist.map(make => (
		      			<DropDownOption> {make} </DropDownOption>
		          ))
		      }
  		</select>
    );
  }
}

export default CarMakeSelector;