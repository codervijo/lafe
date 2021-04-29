import React, { Component } from 'react';
import './App.css';
import DropDownOption from './DropDownOption.js';
import Dropdown from 'react-bootstrap/Dropdown';

class CarModelSelector extends Component {
  state = {
    modellist:["Prius", "Civic", "Outbak"]
  };

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Car Model
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {
              this.state.modellist.map(model => (
                <DropDownOption> {model} </DropDownOption>
              ))
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default CarModelSelector;