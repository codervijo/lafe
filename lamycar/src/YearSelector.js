import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';
import Dropdown from 'react-bootstrap/Dropdown';


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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Year
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {
              this.state.yearlist.map(year => (
                <DropDownOption> {year} </DropDownOption>
              ))
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default YearSelector;