import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';


class CarModelSelector extends Component {
  state = {
    modellist:["Prius", "Civic", "Outbak"]
  };

  render() {
    return (
 			<select>
		        {
		          this.state.modellist.map(model => (
		      			<DropDownOption> {model} </DropDownOption>
		          ))
		        }
  			</select>
    );
  }
}

export default CarModelSelector;