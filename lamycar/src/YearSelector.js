import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';


class YearSelector extends Component {
  render() {
    return (
 			<select>
    			<DropDownOption> 2021 </DropDownOption>
    			<DropDownOption> 2022 </DropDownOption>
    			<DropDownOption> 2023 </DropDownOption>
    			<DropDownOption> 2024 </DropDownOption>
  		</select>
    );
  }
}

export default YearSelector;