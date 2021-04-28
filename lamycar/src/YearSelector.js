import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';


class YearSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yearlist:[2021, 2020, 2019]
    };
    for (let i = 0; i < 20; i++) {
      this.state.yearlist.push(2018-i);
    }
  }

  render() {
    return (
 			<select>
        {
          this.state.yearlist.map(year => (
      			<DropDownOption> {year} </DropDownOption>
          ))
        }
        <DropDownOption> '>1999' </DropDownOption>
  		</select>
    );
  }
}

export default YearSelector;