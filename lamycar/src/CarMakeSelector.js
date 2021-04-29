import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';
import Dropdown from 'react-bootstrap/Dropdown';


class CarMakeSelector extends Component {
  state = {
    makelist:["Ford", "Toyota", "Subaru"]
  };

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Make
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {
              this.state.makelist.map(make => (
                <DropDownOption> {make} </DropDownOption>
              ))
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default CarMakeSelector;