import React, { Component } from 'react';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';


class DropDownOption extends Component {
  render() {
    return (
    	<Dropdown.Item href="#/action-1" value="{this.props.children}">{this.props.children}</Dropdown.Item>
    );
  }
}

export default DropDownOption;