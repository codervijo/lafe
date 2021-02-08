import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';


class YearSelector extends Component {
  state = {
    yearlist:[2021, 2020, 2019]
  };

  render() {
    return (
 			<select>
        {
          this.state.yearlist.map(year => (
      			<DropDownOption> {year} </DropDownOption>
          ))
        }
  		</select>
    );
  }
}

export default YearSelector;